import { style } from "@vanilla-extract/css";
import { transparentize } from "polished";
import { fluid, vars, tokens } from "@/styles";
import { screen } from "@/styles/utils.css";

export const main = style({
  marginBlockStart: `calc(${fluid.space("2xl-3xl")} * 1.5)`,
  marginBlockEnd: fluid.space("xl-2xl"),
  textAlign: "center",
});

export const headline = style({
  fontSize: `calc(${fluid.type("step-6")} * 0.875)`,
  maxWidth: vars.type.lineLength.narrow,
  marginInline: "auto",
  "@media": screen("xs", {
    fontSize: `calc(${fluid.type("step-6")} * 1.125)`,
  }),
});

export const body = style({
  maxWidth: vars.type.lineLength.wide,
  marginInline: "auto",
  marginBlockStart: fluid.space("s-m"),
  marginBlockEnd: fluid.space("m-l"),
});

export const emphasize = style({
  color: vars.color.primary,
  fontStyle: "normal",
  // whiteSpace: "nowrap",
  position: "relative",
});

export const scribble = style({
  position: "absolute",
  top: "0.9em",
  left: 0,
  width: "100%",
  height: "0.6em",
  fill: transparentize(0.7, tokens.color.primary),
});
