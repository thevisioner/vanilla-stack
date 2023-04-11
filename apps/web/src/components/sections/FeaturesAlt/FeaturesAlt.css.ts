import { style } from "@vanilla-extract/css";
import { fluid, vars } from "@/styles";
import { screen, transition } from "@/styles/utils.css";

export const sectionText = style({
  maxWidth: vars.type.lineLength.wide,
  marginInline: "auto",
});

export const featuresList = style({
  display: "grid",
  gridGap: fluid.space("l-xl"),
  marginInline: `calc(${fluid.space("2xs-xs")} * -1)`,
  overflow: "hidden",
  "@media": screen("m", {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  }),
});

export const featureItem = style({
  opacity: 0.75,
  paddingInline: fluid.space("2xs-xs"),
  position: "relative",
  transition: transition("opacity", "medium2", "standard"),
  ":focus-within": {
    opacity: 1,
  },
  ":hover": {
    opacity: 1,
  },
});

export const featureItemActive = style({
  opacity: 1,
});

export const featureNameButton = style({
  borderRadius: 0,
  fontFamily: vars.font.display,
  fontSize: fluid.type("step--1"),
  fontWeight: vars.type.fontWeight.regular,
  margin: `calc(${fluid.space("2xs-xs")} * -1)`,
  marginBlockEnd: 0,
  padding: fluid.space("2xs-xs"),
  position: "static",
  "::before": {
    pointerEvents: "auto",
  },
  ":focus": {
    outlineOffset: `calc(${vars.shape.borderWidth[2]} * -1)`,
  },
  selectors: {
    "&:hover::before": {
      opacity: 0,
    },
    "&:focus::before": {
      opacity: 0,
    },
    "&:active::before": {
      opacity: 0,
    },
    [`${featureItemActive} &`]: {
      color: vars.color.primary,
    },
  },
});

export const featureTitle = style({
  fontFamily: vars.font.display,
  fontSize: `calc(${fluid.type("step-1")} * 0.875)`,
  marginBlockEnd: fluid.space("2xs-xs"),
});
