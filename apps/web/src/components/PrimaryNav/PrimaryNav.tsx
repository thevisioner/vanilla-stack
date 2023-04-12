import clsx from "clsx";
import Link from "next/link";
import { Inline } from "@/components/base";
import * as styles from "./PrimaryNav.css";

const navigationItems = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
];

export default function PrimaryNav({
  onSurface = false,
  className,
}: {
  onSurface?: boolean;
  className?: string;
}) {
  const linkClassNames = clsx(styles.link, onSurface && styles.linkOnSurface);
  return (
    <nav aria-label="Main navigation" className={className}>
      <Inline as="ul" gap="s-m">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={linkClassNames}>
              {item.label}
            </Link>
          </li>
        ))}
      </Inline>
    </nav>
  );
}
