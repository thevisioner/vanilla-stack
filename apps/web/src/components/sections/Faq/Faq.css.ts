import { style } from "@vanilla-extract/css";
import { fluid, vars } from "@/styles";
import { subgridChild, subgridParent } from "@/styles/utils.css";

export const section = style([
  subgridParent,
  {
    backgroundColor: "#f8fafc",
    overflow: "hidden",
    paddingBlock: fluid.space("2xl-3xl"),
    position: "relative",
  },
]);

export const sectionBackground = style({
  userSelect: "none",
  objectFit: "contain",
  transform: "translate(20%, -20%)",
});

export const wrapper = style([
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
  marginBlockEnd: fluid.space("xl-2xl"),
  maxWidth: vars.type.lineLength.wide,
  letterSpacing: vars.type.letterSpacing.tight,
  opacity: 0.875,
});

export const columns = style({});

export const column = style({});

export const question = style({
  fontFamily: vars.font.display,
  marginBlockEnd: fluid.space("3xs-2xs"),
});
