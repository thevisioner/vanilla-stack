import {
  AllHTMLAttributes,
  ElementType,
  ReactNode,
  CSSProperties,
} from "react";
import clsx from "clsx";
import { Sprinkles, sprinkles } from "@/styles/sprinkles.css";
import * as styles from "./Box.css";

interface BoxProps
  extends Omit<AllHTMLAttributes<HTMLElement>, "color">,
    Sprinkles {
  component?: ElementType;
  /** HTML id attribute. */
  id?: string;
  /** Border style. */
  border?: styles.BorderVariants;

  /** The aria-role attribute. */
  role?: string;
  /* The tab-index attribute. */
  tabIndex?: number;

  // core props
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Box is the most primitive layout component. It’s a way to access design tokens.
 */
export default function Box({
  component: Component = "div",
  id,
  // sprinkles
  backgroundColor,
  border,
  color,
  marginBlock,
  marginBlockStart,
  marginBlockEnd,
  marginInline,
  marginInlineStart,
  marginInlineEnd,
  paddingBlock,
  paddingBlockStart,
  paddingBlockEnd,
  paddingInline,
  paddingInlineStart,
  paddingInlineEnd,
  // aria props
  role,
  tabIndex,
  // core porps
  children,
  className,
  style,
  // remaining props
  ...props
}: BoxProps) {
  // TODO: add support for `minWidth`, `minHeight`, `maxWidth`, `overflowX`, `overflowY`,
  // `position` / `inset**`, `opacity`, `visuallyHidden`, `zIndex` props
  // https://polaris.shopify.com/components/layout-and-structure/box
  const classNames = clsx(
    backgroundColor && sprinkles({ backgroundColor }),
    border && styles.border[border],
    color && sprinkles({ color }),
    marginBlock && sprinkles({ marginBlock }),
    marginBlockStart && sprinkles({ marginBlockStart }),
    marginBlockEnd && sprinkles({ marginBlockEnd }),
    marginInline && sprinkles({ marginInline }),
    marginInlineStart && sprinkles({ marginInlineStart }),
    marginInlineEnd && sprinkles({ marginInlineEnd }),
    paddingBlock && sprinkles({ paddingBlock }),
    paddingBlockStart && sprinkles({ paddingBlockStart }),
    paddingBlockEnd && sprinkles({ paddingBlockEnd }),
    paddingInline && sprinkles({ paddingInline }),
    paddingInlineStart && sprinkles({ paddingInlineStart }),
    paddingInlineEnd && sprinkles({ paddingInlineEnd }),
    className
  );
  return (
    <Component
      id={id}
      className={classNames}
      role={role}
      style={style}
      tabIndex={tabIndex}
      {...props}
    >
      {children}
    </Component>
  );
}
