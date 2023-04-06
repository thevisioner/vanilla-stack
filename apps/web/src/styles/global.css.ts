import { globalStyle } from "@vanilla-extract/css";
import "./reset.css";
import { fluid } from "./fluid";
import { vars } from "./theme.css";

globalStyle("body", {
  backgroundColor: vars.color.background,
  color: vars.color.text,
});

// Scope where font is available,
// see @/styles/font/FontProvider.tsx
globalStyle("#__app", {
  fontFamily: vars.font.body,
  fontSize: fluid.type("step-0"),
});
