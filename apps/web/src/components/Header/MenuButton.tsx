import { Button } from "@/components/base";
import * as styles from "./MenuButton.css";

export default function MenuButton({
  expanded,
  onToggle,
}: {
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <Button
      ariaExpanded={expanded}
      ariaLabel="Toggle navigation"
      className={styles.button}
      onClick={onToggle}
      iconBefore={
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0"
            y="0"
            width="14"
            height="2"
            fill="currentColor"
            style={{
              transform: expanded
                ? "rotate(45deg) translateY(6px)"
                : "rotate(0deg)",
              transformOrigin: "50% 50%",
            }}
          />
          <rect
            x="0"
            y="6"
            width="14"
            height="2"
            fill="currentColor"
            style={{ opacity: expanded ? 0 : 1 }}
          />
          <rect
            x="0"
            y="12"
            width="14"
            height="2"
            fill="currentColor"
            style={{
              transform: expanded
                ? "rotate(-45deg) translateY(-6px)"
                : "rotate(0deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>
      }
    />
  );
}
