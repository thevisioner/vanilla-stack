import { rem } from "polished";
import {
  maxFontSize,
  maxTypeScale,
  minFontSize,
  minTypeScale,
  typeTokenValues,
} from "./settings";

type TypeScale = (typeof typeTokenValues)[number];
export type TypeStepKey = `step-${TypeScale}`;

export const typeContract = Object.fromEntries(
  typeTokenValues.map((value) => [`step-${value}`, `step-${value}`])
) as Record<TypeStepKey, string>;

type TypeRule = [
  TypeStepKey,
  `calc(${string} + ${number} * var(--fluid-ratio))`
];

const roundWithAccuracy = (value: number, decimals: number = 2) =>
  Number(Math.round(Number(value + `e${decimals}`)) + `e-${decimals}`);

const generateTypeRule = (value: TypeScale): TypeRule => {
  const minValue = minFontSize * Math.pow(minTypeScale, value);
  const maxValue = maxFontSize * Math.pow(maxTypeScale, value);
  return [
    `step-${value}`,
    `calc(${rem(roundWithAccuracy(minValue))} + ${roundWithAccuracy(
      maxValue - minValue
    )} * var(--fluid-ratio))`,
  ];
};

export const typeTokens = Object.fromEntries(
  typeTokenValues.map(generateTypeRule)
) as Record<TypeRule[0], TypeRule[1]>;
