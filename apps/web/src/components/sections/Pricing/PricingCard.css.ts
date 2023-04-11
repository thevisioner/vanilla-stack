import { style } from "@vanilla-extract/css";
import { fluid, vars } from "@/styles";

export const card = style({
  padding: fluid.space("m-l"),
});

export const highlighted = style({
  backgroundColor: vars.color.primary,
  borderRadius: vars.shape.borderRadius["2xl"],
  color: vars.color.textOnPrimary,
});

export const name = style({
  fontWeight: vars.type.fontWeight.semibold,
});

export const description = style({
  color: vars.color.textSubduedOnSurfaceDark,
  selectors: {
    [`${highlighted} &`]: {
      color: vars.color.textOnPrimary,
      opacity: 0.875,
    },
  },
});

export const price = style({
  fontSize: `calc(${fluid.type("step-4")} * 1.2)`,
  fontWeight: vars.type.fontWeight.regular,
  marginBlockEnd: fluid.space("2xs-xs"),
  opacity: 0.95,
  order: -1,
});

export const button = style({
  borderColor: vars.color.decorative,
  color: vars.color.textOnSurfaceDark,
  marginBlock: fluid.space("xs-s"),
  selectors: {
    [`${highlighted} &`]: {
      backgroundColor: vars.color.textOnSurfaceDark,
      color: vars.color.secondary,
      opacity: 0.875,
    },
  },
});

export const featuresList = style({});

export const featureItem = style({
  opacity: 0.875,
});

export const featureItemIcon = style({
  color: vars.color.textSubduedOnSurfaceDark,
  selectors: {
    [`${highlighted} &`]: {
      color: vars.color.textOnPrimary,
      opacity: 0.75,
    },
  },
});
