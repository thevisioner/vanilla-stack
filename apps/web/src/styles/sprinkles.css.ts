import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { fluid, vars } from "@/styles";

const spacingProperties = defineProperties({
  properties: {
    gap: fluid.vars.space,
    rowGap: fluid.vars.space,
    columnGap: fluid.vars.space,

    marginInline: fluid.vars.space,
    marginInlineStart: fluid.vars.space,
    marginInlineEnd: fluid.vars.space,
    marginBlock: fluid.vars.space,
    marginBlockStart: fluid.vars.space,
    marginBlockEnd: fluid.vars.space,

    paddingInline: fluid.vars.space,
    paddingInlineStart: fluid.vars.space,
    paddingInlineEnd: fluid.vars.space,
    paddingBlock: fluid.vars.space,
    paddingBlockStart: fluid.vars.space,
    paddingBlockEnd: fluid.vars.space,
  },
});

export type BackgroundColorTokenAlias = Pick<
  typeof vars.color,
  "background" | "surface" | "surfaceAlt" | "surfaceDark"
>;

export type ColorTokenAlias = Pick<
  typeof vars.color,
  "text" | "textSubdued" | "textOnPrimary" | "textOnSecondary"
>;

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    backgroundColor: vars.color as BackgroundColorTokenAlias,
    color: vars.color as ColorTokenAlias,
  },
});

// TODO: Implement :hover only on desktop ??
// const properties = defineProperties({
//   conditions: {
//     default: {},
//     hover: { selector: '&:hover' },
//     focus: { selector: '&:focus' }
//   },
//   defaultCondition: 'default'
//   // etc.
// });

export const sprinkles = createSprinkles(spacingProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
