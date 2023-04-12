import { style } from "@vanilla-extract/css";
import { fluid, vars } from "@/styles";

export const section = style({
  backgroundColor: "#f8fafc",
  overflow: "hidden",
  // FIXME: Use only common padding value
  paddingBlock: fluid.space("2xl-3xl"),
});

export const sectionBackground = style({
  transform: "translate(20%, -20%)",
});

export const sectionText = style({
  maxWidth: vars.type.lineLength.wide,
  marginInline: "auto",
});

export const questionsStack = style({
  maxWidth: vars.type.lineLength.wide,
  marginInline: "auto",
});

export const question = style({
  fontFamily: vars.font.display,
  marginBlockEnd: fluid.space("3xs-2xs"),
});
