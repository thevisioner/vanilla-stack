import { rem } from "polished";
import {
  minFontSize,
  maxFontSize,
  spacingTokenNames,
  spacingTokenValues,
  spacingCustomPairs,
} from "./settings";

const createOneUpPairs = <T extends readonly any[]>(array: T) =>
  array
    .map((value, index) => {
      const nextValue = array[index + 1];
      if (nextValue) {
        return `${value}-${nextValue}` as OneUpPair<typeof array>;
      }
      return null;
    })
    .filter(Boolean) as OneUpPair<typeof array>[];

type OneUpPair<
  T extends readonly any[],
  S extends any[] = [],
  S2 extends number[] = [0]
> = T["length"] extends S2["length"]
  ? S[number]
  : OneUpPair<
      T,
      [`${T[S["length"]]}-${T[S2["length"]]}`, ...S],
      [0, S["length"], ...S]
    >;

const oneUpSpacingPairs = createOneUpPairs(spacingTokenNames);

const composedSpacingTokenNames = [
  ...spacingTokenNames,
  ...oneUpSpacingPairs,
  ...spacingCustomPairs,
] as const;

type SpacingKey = (typeof spacingTokenNames)[number];
export type SpacingSpaceKey = (typeof composedSpacingTokenNames)[number];

type SpacingRule = [
  SpacingSpaceKey,
  `calc(${string} + ${number} * var(--fluid-ratio))`
];

const generateSpacingRule = (key: SpacingSpaceKey): SpacingRule => {
  if (key.includes("-")) {
    const [key1, key2] = key.split("-") as SpacingKey[];
    const value1 = spacingTokenValues[spacingTokenNames.indexOf(key1)];
    const value2 = spacingTokenValues[spacingTokenNames.indexOf(key2)];
    return [
      key,
      `calc(${rem(minFontSize * value1)} + ${
        maxFontSize * value2 - minFontSize * value1
      } * var(--fluid-ratio))`,
    ];
  } else {
    const value =
      spacingTokenValues[spacingTokenNames.indexOf(key as SpacingKey)];
    return [
      key,
      `calc(${rem(minFontSize * value)} + ${
        maxFontSize * value - minFontSize * value
      } * var(--fluid-ratio))`,
    ];
  }
};

export const spacingContract = Object.fromEntries(
  composedSpacingTokenNames.map((key) => [key, `space-${key}`])
) as Record<SpacingRule[0], string>;

export const spacingTokens = Object.fromEntries(
  composedSpacingTokenNames.map(generateSpacingRule)
) as Record<SpacingRule[0], SpacingRule[1]>;
