import { style } from "@vanilla-extract/css";
import { transparentize } from "polished";
import { fluid, tokens, vars } from "@/styles";
import { border, transition } from "@/styles/utils.css";

export const slider = style({
  backgroundColor: vars.color.surfaceAlt,
  borderRadius: vars.shape.borderRadius["2xl"],
  border: border(1, "solid", tokens.color.border),
  marginBlockStart: fluid.space("xl-2xl"),
  overflow: "hidden",
  padding: fluid.space("xl-2xl"),
});

export const sliderItem = style({
  flexShrink: 0,
  borderRadius: vars.shape.borderRadius.l,
  border: border(1, "solid", transparentize(0.2, tokens.color.border)),
  opacity: 0.5,
  overflow: "hidden",
  // 0.8 is needed because of the percentage width
  paddingBlockStart: (856 / 1688) * 100 * 0.8 + "%",
  position: "relative",
  boxShadow: vars.shadow.m,
  width: "80%",
  transition:
    transition("opacity", "long1", "standard") +
    ", " +
    transition("transform", "long4", "standard"),
  willChange: "opacity, transform",
});

export const sliderItemActive = style({
  opacity: 1,
});
