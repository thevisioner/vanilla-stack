import { style, styleVariants } from "@vanilla-extract/css";
import { fluid, vars } from "@/styles";
import { FluidTypeStep } from "@/styles/fluid";

export const base = style({
  marginBlock: 0,
  textAlign: "inherit",
});

export const align = styleVariants({
  start: { textAlign: "start" },
  end: { textAlign: "end" },
  center: { textAlign: "center" },
  justify: { textAlign: "justify" },
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

export { visuallyHidden } from "@/styles/utils.css";

export type AlignVariants = keyof typeof align;

export const color = styleVariants({
  subdued: { color: vars.color.textSubdued },
  onSurfaceDark: { color: vars.color.textOnSurfaceDark },
});

export type ColorVariants = keyof typeof color;

// FIXME: Specificity issue with `styleVariant`
export const fontWeight = styleVariants({
  light: { fontWeight: vars.type.fontWeight.light },
  regular: { fontWeight: vars.type.fontWeight.regular },
  medium: { fontWeight: vars.type.fontWeight.medium },
  semibold: { fontWeight: vars.type.fontWeight.semibold },
  bold: { fontWeight: vars.type.fontWeight.bold },
});

export type FontWeightVariants = keyof typeof fontWeight;

const scale = {
  heading2Xl: "step-6",
  headingXl: "step-5",
  headingL: "step-4",
  headingM: "step-3",
  headingS: "step-2",
  bodyL: "step-1",
  bodyM: "step-0",
  bodyS: "step--1",
  bodyXs: "step--2",
};

const headingBase = style({
  fontFamily: vars.font.display,
  fontWeight: vars.type.fontWeight.medium,
  lineHeight: vars.type.lineHeight.headline,
  letterSpacing: vars.type.letterSpacing.tight,
});

const bodyBase = style({
  fontWeight: vars.type.fontWeight.regular,
  lineHeight: vars.type.lineHeight.base,
});

export const styleVariant = styleVariants(scale, (step, key) =>
  key.startsWith("heading")
    ? [
        headingBase,
        {
          fontSize: fluid.type(step as FluidTypeStep),
        },
      ]
    : [
        bodyBase,
        {
          fontSize: fluid.type(step as FluidTypeStep),
        },
      ]
);

export type StyleVariants = keyof typeof styleVariant;
