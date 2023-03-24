import clsx from "clsx";
import { sprinkles, Sprinkles } from "@/styles/sprinkles.css";
import * as styles from "./Columns.css";

type ColumsProps = {
  as?: "div" | "ul" | "ol" | "fieldset";
  align?: "start" | "end" | "center";
  columns?: number | ("oneThird" | "oneHalf" | "twoThirds")[];
  gap?: Sprinkles["rowGap"];
  // core props
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
export default function Colums({
  as,
  align,
  columns,
  gap,
  children,
  className,
  style,
}: ColumsProps) {
  const Component = as ?? "div";
  const classNames = clsx(
    styles.base,
    align && styles.align[align],
    Array.isArray(columns) && styles.columns[columns[0]],
    gap && sprinkles({ rowGap: gap }),
    className
  );
  const composedStyles = {
    gridTemplateColumns:
      typeof columns === "number"
        ? `repeat(${columns}, minmax(0, 1fr))`
        : undefined,
    ...style,
  };
  return (
    <Component className={classNames} style={composedStyles}>
      {children}
    </Component>
  );
}
