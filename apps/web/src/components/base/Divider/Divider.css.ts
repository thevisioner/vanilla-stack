import { style, styleVariants } from "@vanilla-extract/css";
// import { color } from "@/styles/tokens";
import { vars } from "@/styles/theme.css";

export const base = style({
  border: 0,
  borderBlockStart: `1px solid ${vars.color.border}`,
});

export const marginReset = style({
  marginBlock: "auto",
});

export const borderStyle = styleVariants({
  base: [base],
  divider: [
    base,
    {
      borderColor: vars.color.divider,
    },
  ],
  dividerDark: [
    base,
    {
      borderColor: vars.color.dividerDark,
    },
  ],
  transparent: [base, { borderColor: "transparent" }],
});

export type BorderVariants = keyof typeof borderStyle;
