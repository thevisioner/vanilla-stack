import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const base = style({
  border: 0,
  borderBlockStart: `1px solid ${vars.color.border}`,
  width: "100%",
});

export const marginReset = style({
  marginBlock: "auto",
});

export const variant = styleVariants({
  border: [base],
  divider: [
    base,
    {
      borderColor: vars.color.divider,
    },
  ],
  transparent: [base, { borderColor: "transparent" }],
});

export type BorderVariants = keyof typeof variant;
