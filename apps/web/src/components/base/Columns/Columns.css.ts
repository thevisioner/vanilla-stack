import { style } from "@vanilla-extract/css";
import { styleVariants } from "@vanilla-extract/css";

export const base = style({
  display: "grid",
});

export const align = styleVariants({
  start: { alignItems: "start" },
  end: { alignItems: "end" },
  center: { alignItems: "center" },
});

export const columns = styleVariants({
  oneThird: {
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
  },
  oneHalf: {
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
  },
  twoThirds: {
    gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)",
  },
});
