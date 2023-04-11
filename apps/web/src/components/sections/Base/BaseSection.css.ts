import { style, styleVariants } from "@vanilla-extract/css";
import { subgridChild, subgridParent } from "@/styles/utils.css";
import { fluid, vars } from "@/styles";

export const section = style({
  paddingBlockStart: `calc(${fluid.space("2xl-3xl")} * 1.25)`,
  paddingBlockEnd: `calc(${fluid.space("2xl-3xl")} * 1.125)`,
});

export const withBackgroundImage = style({
  position: "relative",
});

export const backgroundImage = style({
  objectFit: "contain",
  userSelect: "none",
});

export const wrapContent = style([subgridParent]);

export const wrapper = style([
  subgridChild,
  {
    position: "relative",
  },
]);

export const heading = style({
  fontWeight: vars.type.fontWeight.regular,
  marginBlockEnd: fluid.space("s-m"),
});

export const text = style({
  marginBlockEnd: fluid.space("xl-2xl"),
  letterSpacing: vars.type.letterSpacing.tight,
  opacity: 0.875,
});

export const primary = style({
  backgroundColor: vars.color.primary,
});

export const textOnPrimary = style({
  color: vars.color.textOnPrimary,
});

export const textAlign = styleVariants({
  center: {
    textAlign: "center",
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
});
