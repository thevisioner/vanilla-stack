import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

const base = style({
  border: `1px solid ${vars.color.border}`,
});

export const border = styleVariants({
  base: [base],
  divider: [
    base,
    {
      borderColor: vars.color.divider,
    },
  ],
  transparent: [base, { borderColor: "transparent" }],
});

export type BorderVariants = keyof typeof border;
