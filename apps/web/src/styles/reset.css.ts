import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  margin: 0,
});

// Typography (Shopify Polaris)
// https://polaris.shopify.com/design/typography#font-stack

globalStyle("html", {
  /* Load system fonts */
  fontFamily: `-apple-system, BlinkMacSystemFont, San Francisco, Segoe UI,
  Roboto, Helvetica Neue, sans-serif`,

  /* Make type rendering look crisper */
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",

  /* Deactivate auto-enlargement of small text in Safari */
  textSizeAdjust: "100%",

  /* Enable kerning and optional ligatures */
  textRendering: "optimizeLegibility",
});

/**
 * Form elements render using OS defaults,
 * so font-family inheritance must be specifically declared
 */
globalStyle(`button, input, optgroup, select, textarea`, {
  fontFamily: "inherit",
});
