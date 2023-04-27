import clsx from "clsx";
import { Sprinkles, sprinkles } from "@/styles/sprinkles.css";
import * as styles from "./Stack.css";

type StackProps = {
  /** HTML Element type. Defaults to <div>. */
  as?: "div" | "ul" | "ol" | "fieldset";
  /** Horizontal alignment of children. */
  align?: "start" | "end" | "center";
  /** The spacing between elements. Accepts a fluid spacing token. */
  gap?: Sprinkles["rowGap"];
  /** Reverse the render order of child items. */
  reverse?: boolean;
  // core props
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Use to display children vertically with full width by default. Based on CSS Flexbox.
 */
export default function Stack({
  as = "div",
  align,
  gap,
  reverse = false,
  // core props
  children,
  className,
  style,
}: StackProps) {
  const Component = as;
  const classNames = clsx(
    styles.base,
    align && styles.align[align],
    gap && sprinkles({ rowGap: gap }),
    reverse && styles.reverse,
    className
  );
  return (
    <Component className={classNames} style={style}>
      {children}
    </Component>
  );
}
