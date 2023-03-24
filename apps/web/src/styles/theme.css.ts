import {
  createGlobalThemeContract,
  createGlobalTheme,
} from "@vanilla-extract/css";
import {
  color,
  screen,
  type,
  depth,
  shadow,
  motion,
  shape,
  state,
} from "@/styles/tokens";

const camelToKebabCase = (s: string) =>
  s.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

// FIXME: Does global theme contract is necessary?
// ..ensures that the token names are not hashed
// ..but hashed output is more compressed
// TODO: Export theme contract in development
// mode only to make it easier to debug

const themeVars = createGlobalThemeContract(
  {
    color,
    screen,
    type,
    depth,
    shadow,
    motion,
    shape,
    state,
  },
  (_value, path) => path.map(camelToKebabCase).join("-")
);

createGlobalTheme(":root", themeVars, {
  color,
  screen,
  type,
  shape,
  depth,
  shadow,
  motion,
  state,
});

const fontVars = createGlobalThemeContract({
  primary: "font-primary",
  secondary: "font-secondary",
});

createGlobalTheme("#__app", fontVars, {
  primary: "var(--font-dm-sans)",
  secondary: "var(--font-shrikhand)",
});

export const vars = {
  ...themeVars,
  font: {
    ...fontVars,
  },
};
