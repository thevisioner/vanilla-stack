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

  /* Smooth scroll behavior */
  scrollBehavior: "smooth",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      scrollBehavior: "auto",
    },
  },

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

// Tailwind Preflight
// https://tailwindcss.com/docs/preflight
// https://unpkg.com/tailwindcss@3.3.0/src/css/preflight.css

globalStyle("a", {
  color: "inherit",
  margin: "-0.5em",
  padding: "0.5em",
  textDecoration: "inherit",
});

globalStyle("ol, ul", {
  listStyle: "none",
  margin: 0,
  padding: 0,
});
