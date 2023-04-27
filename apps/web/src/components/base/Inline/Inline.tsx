import clsx from "clsx";
import { Sprinkles, sprinkles } from "@/styles/sprinkles.css";
import * as styles from "./Inline.css";

type InlineProps = {
  /** HTML Element type. Defaults to <div>. */
  as?: "div" | "ul" | "ol" | "fieldset";
  /** Horizontal alignment of children. */
  align?:
    | "start"
    | "center"
    | "end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  /** Vertical alignment of children. */
  blockAlign?: "start" | "center" | "end" | "baseline" | "stretch";
  /** The spacing between elements. Accepts a fluid spacing token. */
  gap?: Sprinkles["columnGap"];
  /** The vertical spacing between elements if wrap. Accepts a fluid spacing token. */
  rowGap?: Sprinkles["rowGap"];
  /** Wrap elements to multiple rows as needed. Defaults to true. */
  wrap?: boolean;
  // core props
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Use to display children horizontally in a row. Based on CSS Flexbox.
 */
export default function Inline({
  as = "div",
  align,
  blockAlign = "center",
  gap,
  rowGap,
  wrap = true,
  // core props
  children,
  className,
  style,
}: InlineProps) {
  const Component = as;
  const classNames = clsx(
    styles.base,
    align && styles.align[align],
    blockAlign && styles.blockAlign[blockAlign],
    gap && sprinkles({ columnGap: gap }),
    rowGap && sprinkles({ rowGap }),
    !wrap && styles.nowrap,
    className
  );
  return (
    <Component className={classNames} style={style}>
      {children}
    </Component>
  );
}
