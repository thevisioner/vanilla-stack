// Based on Utopia Fluid Responsive Design
// https://utopia.fyi/

export const minViewportWidth = 320;
export const minFontSize = 16;
export const minTypeScale = 1.2;
export const maxViewportWidth = 1240;
export const maxFontSize = 18;
export const maxTypeScale = 1.25;

export const spacingTokenNames = [
  "3xs",
  "2xs",
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "2xl",
  "3xl",
] as const;

export const spacingTokenValues = [
  0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6,
] as const;

export const spacingCustomPairs = ["s-l", "l-3xl"] as const;

export const typeTokenValues = [-2, -1, 0, 1, 2, 3, 4, 5, 6] as const;
