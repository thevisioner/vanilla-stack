import Link from "next/link";
import { Inline } from "@/components/base";
import SocialIcon from "./SocialIcon";
import * as styles from "./SocialNav.css";

const navigationItems = [
  {
    href: "https://twitter.com/taxpal",
    label: "Twitter",
  },
  {
    href: "https://www.github.com/taxpal",
    label: "GitHub",
  },
];

export default function SocialNav({ className }: { className?: string }) {
  return (
    <nav aria-label="Social networks" className={className}>
      <Inline as="ul" blockAlign="center" gap="xs-s">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} title={item.label} className={styles.link}>
              <SocialIcon render={item.label} />
            </Link>
          </li>
        ))}
      </Inline>
    </nav>
  );
}
