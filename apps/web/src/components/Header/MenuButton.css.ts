import { fluid, vars } from "@/styles";
import { style } from "@vanilla-extract/css";

export const button = style({
  color: vars.color.textSubdued,
  marginInline: `calc(${fluid.space("s")} * -1)`,
});
