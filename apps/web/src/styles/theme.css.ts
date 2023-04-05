import {
  createGlobalThemeContract,
  createGlobalTheme,
} from "@vanilla-extract/css";
import { tokens } from "@/styles";

const camelToKebabCase = (s: string) =>
  s.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

// FIXME: Does global theme contract is necessary?
// ..ensures that the token names are not hashed
// ..but hashed output is more compressed
// TODO: Export theme contract in development
// mode only to make it easier to debug

const themeVars = createGlobalThemeContract(
  {
    ...tokens,
  },
  (_value, path) => path.map(camelToKebabCase).join("-")
);

createGlobalTheme(":root", themeVars, {
  ...tokens,
});

const fontVars = createGlobalThemeContract({
  body: "font-body",
  display: "font-display",
});

createGlobalTheme("#__app", fontVars, {
  body: "var(--font-inter)",
  display: "var(--font-lexend)",
});

export const vars = {
  ...themeVars,
  font: {
    ...fontVars,
  },
};
