import { style } from "@vanilla-extract/css";
import { rem, transparentize } from "polished";
import { fluid, tokens, vars } from "@/styles";
import { screen, transition } from "@/styles/utils.css";

export const section = style({
  marginBlockStart: fluid.space("l-xl"),
  overflow: "hidden",
});

export const layout = style({
  display: "grid",
  paddingBlockStart: fluid.space("m-l"),
  position: "relative",
  "::before": {
    content: "",
    position: "absolute",
    inset: 0,
    backgroundColor: transparentize(0.95, tokens.color.textOnPrimary),
    borderRadius: vars.shape.borderRadius.xl,
    boxShadow: "rgba(255, 255, 255, 0.18) 0px 0px 0px 1px inset",
  },
  "@media": screen("m", {
    gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
    alignItems: "center",
    "::before": {
      display: "none",
    },
  }),
});

// TODO: Even smaller width styles with overflow and scroll

export const featuresList = style({
  display: "flex",
  columnGap: fluid.space("xs-s"),
  justifyContent: "center",
  paddingInline: fluid.space("s-m"),
  "@media": screen("m", {
    flexDirection: "column",
    gridColumn: "span 5",
    paddingInline: 0,
  }),
});

export const featureItem = style({
  "@media": screen("m", {
    position: "relative",
    padding: fluid.space("s-m"),
  }),
});

export const featureTitle = style({
  "@media": screen("m", {
    marginBlockEnd: fluid.space("2xs-xs"),
  }),
});

// FIXME: Too many Button overrides
export const featureTitleButton = style({
  borderRadius: vars.shape.borderRadius.full,
  color: vars.color.textOnPrimary,
  fontFamily: vars.font.display,
  fontSize: fluid.type("step-0"),
  margin: 0,
  selectors: {
    [`&[aria-selected="true"]`]: {
      backgroundColor: vars.color.textOnPrimary,
      color: vars.color.primary,
    },
  },
  "@media": screen("m", {
    borderRadius: vars.shape.borderRadius.s,
    margin: `calc(${fluid.space("2xs-xs")} * -1)`,
    padding: fluid.space("2xs-xs"),
    position: "static",
    "::before": {
      borderRadius: 0,
      borderTopLeftRadius: vars.shape.borderRadius.l,
      borderBottomLeftRadius: vars.shape.borderRadius.l,
      pointerEvents: "auto",
      zIndex: 1,
      transition: transition("opacity", "medium2", "standard"),
    },
    selectors: {
      [`&[aria-selected="true"]`]: {
        backgroundColor: "transparent",
        color: vars.color.textOnPrimary,
      },
      [`&[aria-selected="true"]::after`]: {
        content: "",
        position: "absolute",
        inset: 0,
        borderTopLeftRadius: vars.shape.borderRadius.l,
        borderBottomLeftRadius: vars.shape.borderRadius.l,
        boxShadow: "rgba(255, 255, 255, 0.18) 0px 0px 0px 1px inset",
        pointerEvents: "none",
      },
    },
  }),
});

export const featureDescription = style({
  display: "none",
  opacity: 0.875,
  "@media": screen("m", {
    display: "initial",
  }),
});

export const featureSeparateDescription = style({
  marginBlockStart: fluid.space("s-m"),
  marginBlockEnd: fluid.space("l-xl"),
  maxWidth: vars.type.lineLength.wide,
  marginInline: "auto",
  opacity: 0.875,
  "@media": screen("m", {
    display: "none",
  }),
});

export const featureImage = style({
  display: "grid",
  "@media": screen("m", {
    gridColumn: "6 / span 7",
    transform: "translateX(-2px)",
  }),
});

export const featureImageInner = style({
  borderRadius: vars.shape.borderRadius.xl,
  boxShadow: vars.shadow.xl,
  overflow: "hidden",
  position: "relative",
  paddingBlockStart: (1464 / 2174) * 100 + "%",
  "@media": screen("m", {
    width: rem(1085),
  }),
});
