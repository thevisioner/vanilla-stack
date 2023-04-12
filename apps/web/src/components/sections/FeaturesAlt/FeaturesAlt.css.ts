import { style } from "@vanilla-extract/css";
import { fluid, tokens, vars } from "@/styles";
import { border, screen, transition } from "@/styles/utils.css";
import { rem, transparentize } from "polished";

export const sectionText = style({
  maxWidth: vars.type.lineLength.wide,
  marginInline: "auto",
});

export const featuresList = style({
  marginInline: `calc(${fluid.space("2xs-xs")} * -1)`,
  overflow: "hidden",
});

export const featureItem = style({
  "@media": screen("m", {
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
  }),
});

export const featureItemActive = style({
  "@media": screen("m", {
    opacity: 1,
  }),
});

export const featureName = style({
  fontFamily: vars.font.display,
  fontSize: fluid.type("step--1"),
  fontWeight: vars.type.fontWeight.regular,
  selectors: {
    [`${featureItemActive} &`]: {
      color: vars.color.primary,
    },
  },
});

export const featureNameButton = style([
  featureName,
  {
    borderRadius: 0,
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
    },
  },
]);

export const featureTitle = style({
  fontFamily: vars.font.display,
  fontSize: `calc(${fluid.type("step-1")} * 0.875)`,
  marginBlockEnd: fluid.space("2xs-xs"),
});

export const featureSmallImageBleed = style({
  marginBlockStart: fluid.space("l-xl"),
  paddingBlockEnd: fluid.space("l-xl"),
  paddingInline: `var(--fluid-edge-width)`,
  overflow: "hidden",
  position: "relative",
  "::before": {
    backgroundColor: vars.color.surfaceAlt,
    content: "",
    transform: `translateY(${fluid.space("l-xl")})`,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

export const featureSmallImageWrapper = style({
  minWidth: rem(640),
});

// FIXME: Similar to Slider.css.ts 'sliderItem'

export const featureSmallImage = style({
  borderRadius: vars.shape.borderRadius.l,
  border: border(1, "solid", transparentize(0.2, tokens.color.border)),
  boxShadow: vars.shadow.m,
  position: "relative",
  marginInline: "auto",
  overflow: "hidden",
  paddingBlockStart: (856 / 1688) * 100 + "%",
});
