import clsx from "clsx";
import { rem } from "polished";
import { sprinkles, Sprinkles } from "@/styles/sprinkles.css";
import * as styles from "./Columns.css";

// TODO: Add auto-fill and auto-fit

type ColumsProps = {
  /** HTML Element type. Defaults to <div>. */
  as?: "div" | "ul" | "ol" | "fieldset";
  /** Vertical alignment of children. If not set, inline elements will stretch to the height of the parent. */
  align?: "start" | "end" | "center";
  /** The number of columns to display. Accepts either a single number or an array of fractions. */
  columns?: number | ("oneThird" | "oneHalf" | "twoThirds")[];
  /** The spacing between elements. Accepts a fluid spacing token. */
  gap?: Sprinkles["columnGap"];
  minWidth?: number;
  autoFit?: boolean;
  // core props
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Use to lay out children horizontally with equal gap between columns. Based on CSS Grid.
 */
export default function Colums({
  as = "div",
  align,
  columns,
  gap,
  minWidth,
  autoFit,
  // core props
  children,
  className,
  style,
}: ColumsProps) {
  const Component = as;
  const classNames = clsx(
    styles.base,
    align && styles.align[align],
    Array.isArray(columns) && styles.columns[columns[0]],
    gap && sprinkles({ columnGap: gap }),
    className
  );
  const composedStyles = {
    gridTemplateColumns:
      typeof columns === "number"
        ? `repeat(${
            minWidth ? (autoFit ? "auto-fit" : "auto-fill") : columns
          }, minmax(${minWidth ? rem(minWidth) : 0}, 1fr))`
        : undefined,
    ...style,
  };
  return (
    <Component className={classNames} style={composedStyles}>
      {children}
    </Component>
  );
}
