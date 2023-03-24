import { style, styleVariants } from "@vanilla-extract/css";
import { fluid } from "@/styles/fluid";
import { color } from "@/styles/tokens";
import { vars } from "@/styles/theme.css";

import {
  stateLayerBase,
  stateLayerStyle,
  stateDisabledStyle,
} from "@/styles/helpers.css";

const reset = style({
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
  border: "none",
  padding: 0,
  margin: 0,
  cursor: "pointer",
  outline: "none",
  backgroundColor: "transparent",
});

// FIXME: Classnames is in reversed order

export const base = style([
  reset,
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBlock: fluid.space("xs"),
    paddingInline: fluid.space("s"),
    borderRadius: vars.shape.borderRadius.m,
    fontFamily: vars.font.primary,
    fontSize: fluid.type("step-0"),
    fontWeight: vars.type.fontWeight.regular,
    lineHeight: vars.type.lineHeight.label,
    textDecoration: "none",
  },
  stateLayerBase(),
]);

export const plain = style([
  {
    backgroundColor: "transparent",
    color: vars.color.text,
  },
  stateLayerStyle(vars.color.text),
]);

export const primary = style([
  {
    backgroundColor: vars.color.primary,
    color: vars.color.textOnPrimary,
  },
  stateLayerStyle(vars.color.textOnPrimary),
]);

export const fullWidth = style({
  width: "100%",
});

export const textAlign = styleVariants({
  start: { textAlign: "start" },
  end: { textAlign: "end" },
  center: { textAlign: "center" },
});

export type TextAlignVariants = keyof typeof textAlign;

export const size = styleVariants({
  small: {
    paddingBlock: fluid.space("xs"),
    paddingInline: fluid.space("s"),
    fontSize: fluid.type("step--1"),
  },
  medium: {
    paddingBlock: fluid.space("s"),
    paddingInline: fluid.space("m"),
    fontSize: fluid.type("step-0"),
  },
  large: {
    paddingBlock: fluid.space("m"),
    paddingInline: fluid.space("l"),
    fontSize: fluid.type("step-1"),
  },
});

export type SizeVariants = keyof typeof size;

export const disabled = style([
  {
    cursor: "not-allowed",
  },
  stateDisabledStyle(primary, color.textOnPrimary, color.primary),
]);

export const loading = style({
  cursor: "wait",
  opacity: 0.75,
});

export const icon = style({
  selectors: {
    "&:not(:first-child)": {
      marginLeft: fluid.space("xs"),
    },
    "&:not(:last-child)": {
      marginRight: fluid.space("xs"),
    },
  },
});

export { visuallyHidden } from "@/styles/helpers.css";
