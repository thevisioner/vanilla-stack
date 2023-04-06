import { useEffect, useRef } from "react";
import { scroll } from "motion";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Inline, Button } from "@/components/base";
import PrimaryNav from "@/components/PrimaryNav/PrimaryNav";
import { link as linkStyle } from "@/components/PrimaryNav/PrimaryNav.css";
import * as styles from "./Header.css";

const scrollThreshold = 100;

// TODO: Mobile menu

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

  return (
    <header ref={headerRef} className={styles.header}>
      <Inline align="space-between">
        <Inline gap="l-xl">
          <Link href="/" aria-label="Home" className={styles.logo}>
            <Logo />
          </Link>

          <PrimaryNav />
        </Inline>

        <Inline gap="m-l">
          <Link href="/signin" className={linkStyle}>
            Sign in
          </Link>
          <Button primary url="/register">
            Get started today
          </Button>
        </Inline>
      </Inline>
    </header>
  );
}
