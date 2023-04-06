import { style } from "@vanilla-extract/css";
import { fluid, vars } from "@/styles";
import { subgridChild, subgridParent } from "@/styles/utils.css";

export const section = style([
  subgridParent,
  {
    backgroundColor: vars.color.primary,
    color: vars.color.textOnPrimary,
    paddingBlock: fluid.space("2xl-3xl"),
    position: "relative",
    textAlign: "center",
  },
]);

export const sectionBackground = style({
  userSelect: "none",
  objectFit: "contain",
});

export const content = style([
  subgridChild,
  {
    position: "relative",
  },
]);

export const sectionTitle = style({
  fontWeight: vars.type.fontWeight.regular,
  marginBlockEnd: fluid.space("s-m"),
});

export const sectionDescription = style({
  marginBlockEnd: fluid.space("m-l"),
  letterSpacing: vars.type.letterSpacing.tight,
  maxWidth: vars.type.lineLength.wide,
  marginInline: "auto",
  opacity: 0.875,
});

export const cta = style({
  backgroundColor: vars.color.textOnPrimary,
  color: vars.color.textSubdued,
  ":focus": {
    outlineColor: vars.color.textOnPrimary,
  },
});
