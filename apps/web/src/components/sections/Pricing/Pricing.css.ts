import { style } from "@vanilla-extract/css";
import { screen, subgridChild, subgridParent } from "@/styles/utils.css";
import { fluid, vars } from "@/styles";

export const section = style([
  subgridParent,
  {
    backgroundColor: vars.color.surfaceDark,
    color: vars.color.textOnSurfaceDark,
    paddingBlockStart: `calc(${fluid.space("2xl-3xl")} * 1.25)`,
    paddingBlockEnd: `calc(${fluid.space("2xl-3xl")} * 1.125)`,
  },
]);

export const wrapper = style([subgridChild]);

export const heading = style({
  fontWeight: vars.type.fontWeight.regular,
  marginBlockEnd: fluid.space("s-m"),
});

export const text = style({
  color: vars.color.textSubduedOnSurfaceDark,
  marginBlockEnd: fluid.space("xl-2xl"),
  letterSpacing: vars.type.letterSpacing.tight,
  maxWidth: vars.type.lineLength.wide,
  marginInline: "auto",
  opacity: 0.875,
});

export const emphasize = style({
  fontStyle: "normal",
  whiteSpace: "nowrap",
  position: "relative",
});

export const emphasizeText = style({
  position: "relative",
});

export const scribble = style({
  position: "absolute",
  top: "0.7em",
  left: 0,
  width: "100%",
  height: "0.875em",
  fill: "#60a5fa",
});

export const cardsList = style({
  display: "grid",
  justifyContent: "center",
  gridGap: fluid.space("l-xl"),
  "@media": screen("l", {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  }),
});
