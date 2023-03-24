import { globalStyle } from "@vanilla-extract/css";
import { fluid } from "./fluid";
import "./reset.css";
import { vars } from "./theme.css";

// Scope where font is available,
// see @/styles/font/FontProvider.tsx
globalStyle("#__app", {
  fontFamily: vars.font.primary,
  fontSize: fluid.type("step-0"),
});
