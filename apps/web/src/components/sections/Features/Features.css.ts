import { style } from "@vanilla-extract/css";
import { rem, transparentize } from "polished";
import { fluid, tokens, vars } from "@/styles";
import { screen, transition } from "@/styles/utils.css";

const smallScreen = 700;

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
    top: 0,
    bottom: "50%",
    left: `calc(var(--fluid-edge-width) * -1)`,
    right: `calc(var(--fluid-edge-width) * -1)`,
    backgroundColor: transparentize(0.95, tokens.color.textOnPrimary),
    boxShadow: "rgba(255, 255, 255, 0.18) 0px 0px 0px 1px inset",
  },
  "@media": {
    ...screen(smallScreen, {
      "::before": {
        inset: 0,
        borderRadius: vars.shape.borderRadius.xl,
      },
    }),
    ...screen("m", {
      gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
      alignItems: "center",
      "::before": {
        display: "none",
      },
    }),
  },
});

// TODO: Even smaller width styles with overflow and scroll

export const featuresList = style({
  display: "flex",
  columnGap: fluid.space("xs-s"),
  marginInline: `calc(var(--fluid-edge-width) * -1)`,
  paddingInline: fluid.space("s-m"),
  paddingBlockEnd: fluid.space("xs-s"),
  position: "relative",
  overflowX: "auto",
  whiteSpace: "nowrap",
  // FIXME: More elegant solution ??
  "@media": {
    ...screen(smallScreen, {
      justifyContent: "center",
      marginInline: 0,
      paddingBlockEnd: 0,
    }),
    ...screen("m", {
      flexDirection: "column",
      gridColumn: "span 5",
      paddingInline: 0,
      whiteSpace: "normal",
    }),
  },
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
  overflowX: "hidden",
  marginInlineEnd: `calc(var(--fluid-edge-width) * -1)`,
  "@media": {
    ...screen(smallScreen, {
      overflowX: "visible",
      marginInlineEnd: 0,
    }),
    ...screen("m", {
      gridColumn: "6 / span 7",
      transform: "translateX(-2px)",
    }),
  },
});

export const featureImageInner = style({
  borderRadius: vars.shape.borderRadius.xl,
  boxShadow: vars.shadow.xl,
  minWidth: rem(640),
  overflow: "hidden",
  position: "relative",
  paddingBlockStart: (1464 / 2174) * 100 + "%",
  "@media": screen("m", {
    width: rem(1085),
  }),
});
