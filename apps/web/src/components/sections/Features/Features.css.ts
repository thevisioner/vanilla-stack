import { style } from "@vanilla-extract/css";
import { rem } from "polished";
import { fluid, vars } from "@/styles";
import { subgridChild, subgridParent, transition } from "@/styles/utils.css";

export const section = style([
  subgridParent,
  {
    backgroundColor: vars.color.primary,
    marginBlockStart: fluid.space("l-xl"),
    paddingBlockStart: `calc(${fluid.space("2xl-3xl")} * 1.25)`,
    paddingBlockEnd: `calc(${fluid.space("2xl-3xl")} * 1.125)`,
    overflow: "hidden",
    position: "relative",
  },
]);

export const sectionBackground = style({
  userSelect: "none",
  objectFit: "contain",
});

export const content = style([
  subgridChild,
  {
    color: vars.color.textOnPrimary,
    position: "relative",
  },
]);

export const sectionTitle = style({
  fontWeight: vars.type.fontWeight.regular,
  marginBlockEnd: fluid.space("s-m"),
});

export const sectionDescription = style({
  marginBlockEnd: fluid.space("xl-2xl"),
  letterSpacing: vars.type.letterSpacing.tight,
  opacity: 0.875,
});

export const featuresContent = style({
  display: "grid",
  gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
  alignItems: "center",
});

export const featuresList = style({
  gridColumn: "span 5",
});

export const featureItem = style({
  position: "relative",
  padding: fluid.space("s-m"),
});

export const featureTitle = style({
  marginBlockEnd: fluid.space("2xs-xs"),
});

// FIXME: Too many Button overrides
export const featureTitleButton = style({
  color: vars.color.textOnPrimary,
  fontFamily: vars.font.display,
  position: "static",
  margin: `calc(${fluid.space("2xs-xs")} * -1)`,
  padding: fluid.space("2xs-xs"),
  "::before": {
    borderRadius: 0,
    borderTopLeftRadius: vars.shape.borderRadius.l,
    borderBottomLeftRadius: vars.shape.borderRadius.l,
    pointerEvents: "auto",
    transition: transition("opacity", "medium2", "standard"),
  },
  selectors: {
    [`&[aria-selected="true"]::before`]: {
      opacity: vars.state.layerOpacity.pressed,
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
});

export const featureImage = style({
  gridColumn: "6 / span 7",
  display: "grid",
  transform: "translateX(-2px)",
});

export const featureImageInner = style({
  borderRadius: vars.shape.borderRadius.xl,
  boxShadow: vars.shadow.xl,
  overflow: "hidden",
  position: "relative",
  paddingBlockStart: (1464 / 2174) * 100 + "%",
  width: rem(1085),
});
