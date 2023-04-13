import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePresence } from "framer-motion";
import { animate } from "motion";
import { Divider, Stack } from "@/components/base";
import * as styles from "./MobileNav.css";
import { useRouter } from "next/router";

// FIXME: Similar to PrimaryNav

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
  {
    separator: true,
  },
  {
    href: "/signin",
    label: "Sign in",
  },
];

export default function MobileNav({ onClose }: { onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      const wrapper = wrapperRef.current;
      const target = event.target as HTMLElement;
      if (!wrapper?.contains(target) && !target.hasAttribute("aria-expanded")) {
        onClose();
      }
    }
    document.body.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.body.removeEventListener("pointerdown", onPointerDown);
    };
  }, [onClose]);

  const [isPresent, safeToRemove] = usePresence();
  useEffect(() => {
    const overlay = overlayRef.current as HTMLElement;
    animate(overlay, { opacity: isPresent ? 1 : 0 }, { duration: 0.2 });

    const wrapper = wrapperRef.current as HTMLElement;
    const wrapperSlideIn = animate(
      wrapper,
      { transform: `translateY(${isPresent ? 0 : -10}px)` },
      { duration: 0.2 }
    );

    wrapperSlideIn.finished.then(() => {
      !isPresent && safeToRemove();
    });
  }, [isPresent, safeToRemove]);

  const router = useRouter();
  useEffect(() => {
    const onRouteChange = () => {
      onClose();
    };
    router.events.on("routeChangeComplete", onRouteChange);
    router.events.on("hashChangeComplete", onRouteChange);
    return () => {
      router.events.off("routeChangeComplete", onRouteChange);
      router.events.off("hashChangeComplete", onRouteChange);
    };
  }, [onClose, router]);

  return (
    <div ref={overlayRef} className={styles.overlay} style={{ opacity: 0 }}>
      <div
        ref={wrapperRef}
        className={styles.wrapper}
        style={{ transform: `translateY(20px)` }}
      >
        <nav aria-label="Main navigation">
          <Stack as="ul" gap="s-m">
            {navigationItems.map((item, index) => {
              if (item.href) {
                return (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                );
              } else if (item.separator) {
                return (
                  <Divider
                    key={`separator.${index}`}
                    style={{ marginBlock: 0 }}
                  />
                );
              }
            })}
          </Stack>
        </nav>
      </div>
    </div>
  );
}
