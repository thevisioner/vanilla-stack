import clsx from "clsx";
import * as styles from "./Button.css";

type ButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  plain?: boolean;
  primary?: boolean;
  fullWidth?: boolean;
  textAlign?: styles.TextAlignVariants;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  size?: styles.SizeVariants;
  type?: "button" | "reset" | "submit";
  // link props
  url?: string;
  external?: boolean;
  download?: boolean | string;
  // core props
  ariaLabel?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function Button({
  disabled,
  loading,
  plain,
  primary,
  fullWidth,
  textAlign,
  iconBefore,
  iconAfter,
  size = "medium",
  type = "button",
  // link props
  url,
  external,
  download,
  // core props
  ariaLabel,
  children,
  className,
  style,
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const buttonProps = {
    disabled: isDisabled,
    type,
  };
  const linkProps = {
    href: url,
    target: external ? "_blank" : undefined,
    rel: external ? "noopener noreferrer" : undefined,
    download,
  };
  const contentOnly = children && !(iconBefore || iconAfter);
  const iconOnly = !children && (iconBefore || iconAfter);
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
    primary && styles.primary,
    fullWidth && styles.fullWidth,
    textAlign && styles.textAlign[textAlign],
    size && styles.size[size],
    disabled && styles.disabled,
    loading && styles.loading,
    className
  );
  return (
    <Component className={classNames} style={style} {...props}>
      {iconBefore && (
        <span className={styles.icon} {...iconProps}>
          {iconBefore}
        </span>
      )}
      {iconOnly && ariaLabel && (
        <span className={styles.visuallyHidden}>{ariaLabel}</span>
      )}
      {children}
      {iconAfter && (
        <span className={styles.icon} {...iconProps}>
          {iconAfter}
        </span>
      )}
    </Component>
  );
}
