import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  display: "flex",
  flexDirection: "column",
});

export const align = styleVariants({
  start: { alignItems: "start" },
  end: { alignItems: "end" },
  center: { alignItems: "center" },
});

export const gap = styleVariants({
  s: { rowGap: "0.25rem" },
  m: { rowGap: "0.75rem" },
  l: { rowGap: "1.5rem" },
});

export const reverse = style({
  flexDirection: "column-reverse",
});
