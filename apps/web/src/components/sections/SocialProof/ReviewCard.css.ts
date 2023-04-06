import { style } from "@vanilla-extract/css";
import { fluid, vars } from "@/styles";

export const card = style({
  backgroundColor: vars.color.background,
  borderRadius: vars.shape.borderRadius.l,
  boxShadow: vars.shadow.xl,
  margin: 0,
  padding: fluid.space("s-m"),
});

export const blockquote = style({
  margin: 0,
  position: "relative",
});

export const quotes = style({
  position: "absolute",
  top: "0.5em",
  left: "0.5em",
  fill: vars.color.surface,
  width: fluid.space("2xl-3xl"),
});

export const text = style({
  lineHeight: vars.type.lineHeight.loose,
  position: "relative",
});

export const name = style({
  fontFamily: vars.font.display,
});

export const title = style({
  fontSize: fluid.type("step--1"),
  opacity: 0.75,
});

export const image = style({
  flexShrink: 0,
  borderRadius: vars.shape.borderRadius.circle,
});
