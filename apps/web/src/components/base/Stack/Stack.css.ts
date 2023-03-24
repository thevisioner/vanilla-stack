import { style } from "@vanilla-extract/css";
import { styleVariants } from "@vanilla-extract/css";

export const base = style({
  display: "flex",
  flexDirection: "column",
});

export const align = styleVariants({
  start: { alignItems: "start" },
  end: { alignItems: "end" },
  center: { alignItems: "center" },
});

export const reverse = style({
  flexDirection: "column-reverse",
});
