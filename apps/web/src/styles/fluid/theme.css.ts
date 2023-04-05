import {
  createGlobalThemeContract,
  createGlobalTheme,
  globalStyle,
} from "@vanilla-extract/css";
import { rem, em } from "polished";
import { minViewportWidth, maxViewportWidth } from "./settings";
import { spacingContract, spacingTokens } from "./space.css";
import { typeContract, typeTokens } from "./type.css";

// Creates a contract of globally scoped variable names
export const fluidVars = createGlobalThemeContract({
  vw: "fluid-vw",
  ratio: "fluid-ratio",
  space: {
    ...spacingContract,
  },
  type: {
    ...typeContract,
  },
});

createGlobalTheme(":root", fluidVars, {
  vw: rem(minViewportWidth),
  ratio: `calc((var(--fluid-vw) - ${rem(minViewportWidth)}) / ${
    maxViewportWidth - minViewportWidth
  })`,
  space: {
    ...spacingTokens,
  },
  type: {
    ...typeTokens,
  },
});

globalStyle(":root", {
  "@media": {
    [`screen and (min-width: ${em(minViewportWidth)})`]: {
      vars: {
        "--fluid-vw": "100vw",
      },
    },
    [`screen and (min-width: ${em(maxViewportWidth)})`]: {
      vars: {
        "--fluid-vw": rem(maxViewportWidth),
      },
    },
  },
});
