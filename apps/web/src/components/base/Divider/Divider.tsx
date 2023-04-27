import clsx from "clsx";
import { sprinkles, Sprinkles } from "@/styles/sprinkles.css";
import * as styles from "./Divider.css";

type DividerProps = {
  /** HTML Element type. Defaults to <hr>. */
  as?: "hr" | "div";
  /** The vertical spacing before and after the divider. Accepts a fluid spacing token. Defaults to "m". */
  marginBlock?: Sprinkles["marginBlock"];
  /** Divider border style. Defaults to "divider". */
  variant?: styles.BorderVariants;
  // core props
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Use to separate or group content.
 */
export default function Divider({
  as = "hr",
  marginBlock = "m",
  variant = "divider",
  // core props
  className,
  style,
}: DividerProps) {
  const Component = as;
  const classNames = clsx(
    styles.base,
    variant && styles.variant[variant],
    // FIXME: weird specificity problem if included in styles.base
    marginBlock ? sprinkles({ marginBlock }) : styles.marginReset,
    className
  );
  return <Component className={classNames} style={style} />;
}
