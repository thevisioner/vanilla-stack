import clsx from "clsx";
import { Sprinkles, sprinkles } from "@/styles/sprinkles.css";

type BleedProps = {
  marginBlock?: Sprinkles["marginBlock"];
  marginBlockStart?: Sprinkles["marginBlockStart"];
  marginBlockEnd?: Sprinkles["marginBlockEnd"];
  marginInline?: Sprinkles["marginInline"];
  marginInlineStart?: Sprinkles["marginInlineStart"];
  marginInlineEnd?: Sprinkles["marginInlineEnd"];
  // core props
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function Bleed({
  marginBlock,
  marginBlockStart,
  marginBlockEnd,
  marginInline,
  marginInlineStart,
  marginInlineEnd,
  children,
  className,
  style,
}: BleedProps) {
  const classNames = clsx(
    marginBlock && sprinkles({ marginBlock }),
    marginBlockStart && sprinkles({ marginBlockStart }),
    marginBlockEnd && sprinkles({ marginBlockEnd }),
    marginInline && sprinkles({ marginInline }),
    marginInlineStart && sprinkles({ marginInlineStart }),
    marginInlineEnd && sprinkles({ marginInlineEnd }),
    className
  );
  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
}
