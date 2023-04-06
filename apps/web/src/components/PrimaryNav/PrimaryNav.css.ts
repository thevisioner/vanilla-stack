import { style } from "@vanilla-extract/css";
import { fluid, vars } from "@/styles";

export const link = style({
  backgroundColor: "transparent",
  borderRadius: vars.shape.borderRadius.m,
  color: vars.color.textSubdued,
  paddingBlock: fluid.space("2xs"),
  paddingInline: fluid.space("xs"),
  transitionProperty: "background-color color",
  transitionDuration: vars.motion.duration.short4,
  transitionTimingFunction: vars.motion.easing.emphasized,
  ":hover": {
    backgroundColor: vars.color.surface,
    color: vars.color.text,
  },
});

export const linkOnSurface = style({
  ":hover": {
    backgroundColor: vars.color.surfaceAlt,
  },
});
