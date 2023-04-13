import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { scroll } from "motion";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Inline, Button } from "@/components/base";
import PrimaryNav from "@/components/PrimaryNav/PrimaryNav";
import { link as linkStyle } from "@/components/PrimaryNav/PrimaryNav.css";
import useMatchScreenSize from "@/hooks/match-screen-size";
import MenuButton from "./MenuButton";
import MobileNav from "./MobileNav";
import * as styles from "./Header.css";

const scrollThreshold = 100;

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      scroll(({ y }) => {
        header.classList.toggle("float", y.current > scrollThreshold);
      });
    }
  }, []);

  // FIXME: SSR issue with useMatchScreenSize (Next.js middleware + cookie)
  const matchMediumScreen = useMatchScreenSize(800);

  const [mobileNavExpanded, setMobileNavExpanded] = useState(false);
  const toggleMobileNav = () => setMobileNavExpanded((expanded) => !expanded);
  const onMobileNavClose = () => setMobileNavExpanded(false);

  return (
    <header ref={headerRef} className={styles.header}>
      <Inline align="space-between">
        <Inline gap="l-xl">
          <Link href="/" aria-label="Home" className={styles.logo}>
            <Logo />
          </Link>

          {matchMediumScreen && <PrimaryNav />}
        </Inline>

        <Inline gap="m-l">
          {matchMediumScreen && (
            <Link href="/signin" className={linkStyle}>
              Sign in
            </Link>
          )}
          <Button primary url="/register">
            Get started{matchMediumScreen ? " today" : ""}
          </Button>
          {!matchMediumScreen && (
            <MenuButton
              expanded={mobileNavExpanded}
              onToggle={toggleMobileNav}
            />
          )}
        </Inline>
      </Inline>

      <AnimatePresence>
        {mobileNavExpanded && <MobileNav onClose={onMobileNavClose} />}
      </AnimatePresence>
    </header>
  );
}
