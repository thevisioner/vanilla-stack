import { style } from "@vanilla-extract/css";
import { fluid, vars } from "@/styles";

export const button = style({
  color: vars.color.textSubdued,
  marginInline: `calc(${fluid.space("s")} * -1)`,
  zIndex: vars.depth[5],
});
