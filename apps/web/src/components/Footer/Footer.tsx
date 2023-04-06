import clsx from "clsx";
import { Divider, Stack, Text } from "@/components/base";
import Logo from "@/components/Logo";
import PrimaryNav from "@/components/PrimaryNav/PrimaryNav";
import SocialNav from "@/components/SocialNav/SocialNav";
import * as styles from "./Footer.css";

export default function Footer({ className }: { className?: string }) {
  const classNames = clsx(styles.footer, className);
  return (
    <footer className={classNames}>
      <div className={styles.wrapper}>
        <Stack align="center" className={styles.topGroup}>
          <Logo />
          <PrimaryNav onSurface className={styles.nav} />
        </Stack>

        <Divider marginBlock="m-l" />

        <Stack align="center" gap="xs-s" className={styles.bottomGroup}>
          <SocialNav />
          <Text as="p" variant="bodyS">
            Copyright © {getFullYear()} TaxPal. All rights reserved.
          </Text>
        </Stack>
      </div>
    </footer>
  );
}

const getFullYear = () => new Date().getFullYear();
