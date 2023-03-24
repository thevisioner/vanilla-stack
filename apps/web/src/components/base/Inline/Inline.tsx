import clsx from "clsx";
import { Sprinkles, sprinkles } from "@/styles/sprinkles.css";
import * as styles from "./Inline.css";

type InlineProps = {
  as?: "div" | "ul" | "ol" | "fieldset";
  align?:
    | "start"
    | "end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly";
  blockAlign?: "start" | "center" | "end" | "baseline" | "stretch";
  gap?: Sprinkles["rowGap"];
  wrap?: boolean;
  // core props
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function Inline({
  as,
  align,
  blockAlign,
  gap,
  wrap = true,
  children,
  className,
  style,
}: InlineProps) {
  const Component = as ?? "div";
  const classNames = clsx(
    styles.base,
    align && styles.align[align],
    blockAlign && styles.blockAlign[blockAlign],
    gap && sprinkles({ columnGap: gap }),
    !wrap && styles.nowrap,
    className
  );
  return (
    <Component className={classNames} style={style}>
      {children}
    </Component>
  );
}
