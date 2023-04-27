import clsx from "clsx";
import { Sprinkles, sprinkles } from "@/styles/sprinkles.css";

type BleedProps = {
  /** Margin scale on top and bottom. */
  marginBlock?: Sprinkles["marginBlock"];
  /** Margin scale on top. */
  marginBlockStart?: Sprinkles["marginBlockStart"];
  /** Margin scale on bottom. */
  marginBlockEnd?: Sprinkles["marginBlockEnd"];
  /** Margin scale on left and right. */
  marginInline?: Sprinkles["marginInline"];
  /** Margin scale on left. */
  marginInlineStart?: Sprinkles["marginInlineStart"];
  /** Margin scale on right. */
  marginInlineEnd?: Sprinkles["marginInlineEnd"];
  // core props
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Applies negative margin to allow content to bleed out into the surrounding layout.
 */
export default function Bleed({
  // sprinkles
  marginBlock,
  marginBlockStart,
  marginBlockEnd,
  marginInline,
  marginInlineStart,
  marginInlineEnd,
  // core porps
  children,
  className,
  style,
}: BleedProps) {
  const classNames = clsx(
    marginBlock && sprinkles({ marginBlock }),
    marginBlockStart && sprinkles({ marginBlockStart }),
    marginBlockEnd && sprinkles({ marginBlockEnd }),
    marginInline && sprinkles({ marginInline }),
    marginInlineStart && sprinkles({ marginInlineStart }),
    marginInlineEnd && sprinkles({ marginInlineEnd }),
    className
  );
  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
}
