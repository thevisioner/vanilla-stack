import clsx from "clsx";
import * as styles from "./Layout.css";

type LayoutProps = {
  as?: "div" | "section" | "main" | "header" | "footer";
  id?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function Layout({
  as = "div",
  id,
  children,
  className,
  style,
}: LayoutProps) {
  const Component = as;
  const classNames = clsx(styles.layoutRoot, className);
  return (
    <Component id={id} className={classNames} style={style}>
      {children}
    </Component>
  );
}
