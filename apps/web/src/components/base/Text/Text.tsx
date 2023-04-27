import clsx from "clsx";
import * as styles from "./Text.css";

type TextProps = {
  /** The element type. Defaults to '<p>'. */
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "legend";

  /** HTML id attribute. */
  id?: string;
  /** Adjust horizontal alignment of text. */
  align?: styles.AlignVariants;
  /** Prevent text from overflowing. Defaults to true. */
  breakWord?: boolean;
  /** Display text in italic. */
  italic?: boolean;
  /** Use a numeric font variant where numbers are all of the same size. */
  numeric?: boolean;
  /** Truncate text overflow with ellipsis. */
  truncate?: boolean;
  /** Visually hide the text. */
  visuallyHidden?: boolean;
  /** Adjust color of text. */
  color?: styles.ColorVariants;
  /** Adjust weight of text. */
  fontWeight?: styles.FontWeightVariants;
  /** Typographic style of text. Defaults to 'bodyM'. */
  variant?: styles.StyleVariants;

  // core props
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Use to display text. Change the element type to adjust the semantic meaning and variant to adjust the typographic style.
 */
export default function Text({
  as: Component = "p",
  id,
  align,
  breakWord = true,
  italic,
  numeric,
  truncate,
  visuallyHidden,
  color,
  fontWeight,
  variant = "bodyM",
  // core props
  children,
  className,
  style,
}: TextProps) {
  const classNames = clsx(
    styles.base,
    breakWord && styles.breakWord,
    italic && styles.italic,
    numeric && styles.numeric,
    truncate && styles.truncate,
    visuallyHidden && styles.visuallyHidden,
    align && styles.align[align],
    color && styles.color[color],
    fontWeight && styles.fontWeight[fontWeight],
    styles.styleVariant[variant],
    className
  );
  return (
    <Component id={id} className={classNames} style={style}>
      {children}
    </Component>
  );
}
