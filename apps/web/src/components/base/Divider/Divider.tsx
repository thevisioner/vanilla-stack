import clsx from "clsx";
import { sprinkles, Sprinkles } from "@/styles/sprinkles.css";
import * as styles from "./Divider.css";

type DividerProps = {
  as?: "div" | "hr";
  borderStyle?: styles.BorderVariants;
  // core props
  className?: string;
  style?: React.CSSProperties;
  // sprinkles
  marginBlock?: Sprinkles["marginBlock"];
};
export default function Divider({
  as,
  borderStyle,
  marginBlock = "m",
  className,
  style,
}: DividerProps) {
  const Component = as ?? "hr";
  const classNames = clsx(
    styles.base,
    borderStyle && styles.borderStyle[borderStyle],
    // FIXME: weird specificity problem if included in styles.base
    marginBlock ? sprinkles({ marginBlock }) : styles.marginReset,
    className
  );
  return <Component className={classNames} style={style} />;
}
