import clsx from "clsx";
import * as styles from "./Button.css";

type ButtonProps = {
  /** The content to display inside the button. */
  children?: string | string[];
  /** Disables the button but not the interaction. */
  disabled?: boolean;
  /** Displays a loading spinner. */
  loading?: boolean;
  /** Renders a button that looks like a link. */
  plain?: boolean;
  /** Removes the background color and adds a outline. */
  primary?: boolean;
  /** Provides extra visual weight and adds a secondary background color to the button. */
  secondary?: boolean;
  /** Allows the button to grow to the width of its container. */
  outline?: boolean;
  /** Provides extra visual weight and adds a primary background color to the button. */
  fullWidth?: boolean;
  /** Aligns the text within the button. */
  textAlign?: styles.TextAlignVariants;
  /** Adds an icon before the button text. */
  iconBefore?: React.ReactElement;
  /** Adds an icon after the button text. */
  iconAfter?: React.ReactElement;
  /** Changes the size of the button. */
  size?: styles.SizeVariants;
  /** The HTML button type. */
  type?: "button" | "reset" | "submit";

  /** The URL to link to. */
  url?: string;
  /** Opens the link in a new tab. */
  external?: boolean;
  /** Adds a download attribute to the link. */
  download?: boolean | string;

  /** The click event handler. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** The focus event handler. */
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  /** The blur event handler. */
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;

  /** The aria-label attribute. */
  ariaLabel?: string;
  /** The aria-expanded attribute. */
  ariaExpanded?: boolean;
  /** The aria-selected attribute. */
  ariaSelected?: boolean;
  /** The aria-role attribute. */
  ariaRole?: string;

  // core props
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Buttons are used primarily for actions, such as "Add", "Close", "Cancel", or "Save". Plain buttons, which look similar to links, are used for less important or less commonly used actions
 */
export default function Button({
  children,
  disabled,
  loading,
  plain,
  primary,
  secondary,
  outline,
  fullWidth,
  textAlign,
  iconBefore,
  iconAfter,
  size = "small",
  type = "button",
  url,
  external,
  download,
  onClick,
  onFocus,
  onBlur,
  ariaLabel,
  ariaExpanded,
  ariaSelected,
  ariaRole,
  // core props
  className,
  style,
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const buttonProps = {
    "aria-label": ariaLabel,
    "aria-expanded": ariaExpanded,
    "aria-selected": ariaSelected,
    role: ariaRole,
    disabled: isDisabled,
    // FIXME: Remove anys
    onClick: onClick as any,
    onFocus: onFocus as any,
    onBlur: onBlur as any,
    type,
  };
  const linkProps = {
    href: url,
    target: external ? "_blank" : undefined,
    rel: external ? "noopener noreferrer" : undefined,
    download,
  };
  const containsIcon = iconBefore || iconAfter;
  const iconOnly = !children && containsIcon;
  const iconClassNames = clsx(styles.icon, !iconOnly && styles.alignIcon);
  const iconProps = iconOnly
    ? {
        "aria-hidden": true,
        focusable: false,
      }
    : {};
  const isLink = url;
  const Component = isLink ? "a" : "button";
  const props = isLink ? linkProps : buttonProps;
  const classNames = clsx(
    styles.base,
    plain && styles.plain,
    outline && styles.outline,
    primary && styles.primary,
    secondary && styles.secondary,
    fullWidth && styles.fullWidth,
    textAlign && styles.textAlign[textAlign],
    size && styles.size[size],
    disabled && styles.disabled,
    loading && styles.loading,
    containsIcon && styles.containsIcon,
    className
  );
  return (
    <Component className={classNames} style={style} {...props}>
      {iconBefore && (
        <span className={iconClassNames} {...iconProps}>
          {iconBefore}
        </span>
      )}
      {children && <span>{children}</span>}
      {iconAfter && (
        <span className={iconClassNames} {...iconProps}>
          {iconAfter}
        </span>
      )}
    </Component>
  );
}
