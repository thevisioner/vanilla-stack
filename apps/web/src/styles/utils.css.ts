import { StyleRule, style } from "@vanilla-extract/css";
import { em, rgba } from "polished";
import { tokens, vars } from "@/styles";

export const subgridParent = style({
  gridColumn: "full",
  display: "inherit",
  gridTemplateColumns: "inherit",
});

export const subgridChild = style({
  selectors: {
    [`${subgridParent} &`]: {
      gridColumn: "content",
    },
  },
});

export const visuallyHidden = style({
  border: 0,
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: 0,
  clip: "rect(0 0 0 0)",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
});

export const stateLayerBase = () =>
  style({
    position: "relative",
    "::before": {
      content: "",
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      pointerEvents: "none",
      opacity: 0,
      transition: transition("opacity", "short4", "emphasized"),
    },
  });

export const stateLayerStyle = () =>
  style({
    "::before": {
      backgroundColor: "currentColor",
    },
    selectors: {
      "&:hover::before": {
        opacity: vars.state.layerOpacity.hover,
      },
      "&:focus::before": {
        opacity: vars.state.layerOpacity.focus,
      },
      "&:active::before": {
        opacity: vars.state.layerOpacity.pressed,
      },
    },
  });

type HexColor = `#${string}`;

export const stateDisabledStyle = (
  parent: string,
  contentColorToken: HexColor,
  containerColorToken: HexColor
) =>
  style({
    "::before": {
      content: "none",
    },
    selectors: {
      [`${parent}&`]: {
        backgroundColor: rgba(
          containerColorToken,
          parseFloat(tokens.state.layerOpacity.disabled.container)
        ),
        color: rgba(
          contentColorToken,
          parseFloat(tokens.state.layerOpacity.disabled.content)
        ),
      },
    },
  });

type BorderWidthKey = keyof typeof vars.shape.borderWidth;
type BorderStyle =
  | "solid"
  | "dashed"
  | "dotted"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset"
  | "none"
  | "hidden";

export const border = (
  width: BorderWidthKey,
  type: BorderStyle,
  color: string
) => `${vars.shape.borderWidth[width]} ${type} ${color}`;

type ScreenKey = keyof typeof tokens.screen;

export const screen = (screen: ScreenKey | number, style: StyleRule) => ({
  [`screen and (min-width: ${em(
    typeof screen === "number" ? screen : tokens.screen[screen] + "px"
  )})`]: {
    ...style,
  },
});

type MotionDurationKey = keyof typeof vars.motion.duration;
type MotionEasingKey = keyof typeof vars.motion.easing;

export const transition = (
  property: string,
  duration: MotionDurationKey,
  easing: MotionEasingKey
) =>
  `${property} ${vars.motion.duration[duration]} ${vars.motion.easing[easing]}`;
