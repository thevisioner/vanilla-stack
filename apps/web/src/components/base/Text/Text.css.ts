import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";
import { fluid } from "@/styles/fluid";

export const base = style({
  marginBlock: 0,
  textAlign: "inherit",
});

export const breakWord = style({
  overflowWrap: "break-word",
});

export const italic = style({
  fontStyle: "italic",
});

export const numeric = style({
  fontVariantNumeric: "tabular-nums lining-nums",
});

export const truncate = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export { visuallyHidden } from "@/styles/helpers.css";

export const align = styleVariants({
  start: { textAlign: "start" },
  end: { textAlign: "end" },
  center: { textAlign: "center" },
  justify: { textAlign: "justify" },
});

export type AlignVariants = keyof typeof align;

export const color = styleVariants({
  subdued: { color: vars.color.textSubdued },
  onDark: { color: vars.color.textOnDark },
});

export type ColorVariants = keyof typeof color;

export const fontWeight = styleVariants({
  light: { fontWeight: vars.type.fontWeight.light },
  regular: { fontWeight: vars.type.fontWeight.regular },
  medium: { fontWeight: vars.type.fontWeight.medium },
  bold: { fontWeight: vars.type.fontWeight.bold },
});

export type FontWeightVariants = keyof typeof fontWeight;

export const styleVariant = styleVariants({
  headingXl: {
    fontSize: fluid.type("step-5"),
    fontWeight: vars.type.fontWeight.light,
    lineHeight: vars.type.lineHeight.headline,
  },
  headingL: {
    fontSize: fluid.type("step-4"),
    fontWeight: vars.type.fontWeight.regular,
    lineHeight: vars.type.lineHeight.headline,
  },
  headingM: {
    fontSize: fluid.type("step-3"),
    fontWeight: vars.type.fontWeight.medium,
    lineHeight: vars.type.lineHeight.headline,
  },
  headingS: {
    fontSize: fluid.type("step-2"),
    fontWeight: vars.type.fontWeight.medium,
    lineHeight: vars.type.lineHeight.headline,
  },
  bodyL: {
    fontSize: fluid.type("step-1"),
    fontWeight: vars.type.fontWeight.regular,
    lineHeight: vars.type.lineHeight.base,
  },
  bodyM: {
    fontSize: fluid.type("step-0"),
    fontWeight: vars.type.fontWeight.regular,
    lineHeight: vars.type.lineHeight.base,
  },
  bodyS: {
    fontSize: fluid.type("step--1"),
    fontWeight: vars.type.fontWeight.regular,
    lineHeight: vars.type.lineHeight.tight,
  },
  bodyXs: {
    fontSize: fluid.type("step--2"),
    fontWeight: vars.type.fontWeight.regular,
    lineHeight: vars.type.lineHeight.tight,
  },
});

export type StyleVariants = keyof typeof styleVariant;
