import { style, styleVariants } from "@vanilla-extract/css";
import { darken } from "polished";
import { fluid, tokens, vars } from "@/styles";
import {
  stateLayerBase,
  stateLayerStyle,
  stateDisabledStyle,
  transition,
  border,
} from "@/styles/utils.css";

const reset = style({
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  margin: 0,
  padding: 0,
  // outline: "none",
});

// FIXME: Class names is in reverse order
export const base = style([
  reset,
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: vars.shape.borderRadius.s,
    fontFamily: vars.font.body,
    fontSize: fluid.type("step-0"),
    lineHeight: vars.type.lineHeight.label,
    paddingBlock: fluid.space("xs"),
    paddingInline: fluid.space("s"),
    selectors: {
      "&:focus": {
        outlineOffset: vars.shape.borderWidth[2],
      },
    },
  },
  stateLayerBase(),
]);

export const plain = style([
  {
    backgroundColor: "transparent",
    color: vars.color.text,
    marginBlock: `calc(${fluid.space("xs")} * -1)`,
    marginInline: `calc(${fluid.space("s")} * -1)`,
    // selectors: {
    //   "&:hover": {
    //     textDecoration: "underline",
    //   },
    // },
  },
  stateLayerStyle(),
]);

export const primary = style([
  {
    backgroundColor: vars.color.primary,
    borderRadius: vars.shape.borderRadius.full,
    color: vars.color.textOnPrimary,
    fontWeight: vars.type.fontWeight.semibold,
    selectors: {
      "&:focus": {
        outline: border(2, "solid", vars.color.primary),
      },
    },
  },
  stateLayerStyle(),
]);

export const secondary = style([
  primary,
  {
    backgroundColor: vars.color.text,
    color: vars.color.textOnPrimary,
    selectors: {
      "&:focus": {
        outline: border(2, "solid", vars.color.text),
      },
    },
  },
]);

export const outline = style([
  {
    backgroundColor: "transparent",
    border: border(1, "solid", tokens.color.border),
    borderRadius: vars.shape.borderRadius.full,
    color: vars.color.text,
    transition: transition("border-color", "short4", "emphasized"),
    selectors: {
      "&:hover": {
        borderColor: darken(0.1, tokens.color.border),
      },
    },
  },
  stateLayerStyle(),
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
  stateDisabledStyle(primary, tokens.color.textOnPrimary, tokens.color.primary),
]);

export const loading = style({
  cursor: "wait",
  opacity: 0.75,
});

export const containsIcon = style({
  columnGap: fluid.space("3xs"),
});

export const icon = style({
  fill: vars.color.primary,
  width: "0.875em",
  height: "0.875em",
  pointerEvents: "none",
});

export const alignIcon = style({
  ":first-child": {
    transform: "translateX(-0.2em)",
  },
  ":last-child": {
    transform: "translateX(0.2em)",
  },
});
