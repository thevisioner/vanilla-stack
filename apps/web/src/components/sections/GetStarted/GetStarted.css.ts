import { style } from "@vanilla-extract/css";
import { fluid, vars } from "@/styles";

export const section = style({
  paddingBlock: fluid.space("2xl-3xl"),
  textAlign: "center",
});

export const sectionText = style({
  marginBlockEnd: fluid.space("m-l"),
  maxWidth: vars.type.lineLength.wide,
  marginInline: "auto",
});

export const cta = style({
  backgroundColor: vars.color.textOnPrimary,
  color: vars.color.textSubdued,
  ":focus": {
    outlineColor: vars.color.textOnPrimary,
  },
});
