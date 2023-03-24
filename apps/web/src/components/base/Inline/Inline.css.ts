import { style } from "@vanilla-extract/css";
import { styleVariants } from "@vanilla-extract/css";

export const base = style({
  display: "flex",
  flexWrap: "wrap",
});

export const align = styleVariants({
  start: { justifyContent: "start" },
  end: { justifyContent: "end" },
  center: { justifyContent: "center" },
  "space-around": { justifyContent: "space-around" },
  "space-between": { justifyContent: "space-between" },
  "space-evenly": { justifyContent: "space-evenly" },
});

export const blockAlign = styleVariants({
  start: { alignItems: "start" },
  end: { alignItems: "end" },
  center: { alignItems: "center" },
  baseline: { alignItems: "baseline" },
  stretch: { alignItems: "stretch" },
});

export const nowrap = style({
  flexWrap: "nowrap",
});
