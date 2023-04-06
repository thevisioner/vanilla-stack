import { style } from "@vanilla-extract/css";
import { vars } from "@/styles";
import { transition } from "@/styles/utils.css";

export const link = style({
  display: "inline-flex",
  width: "1.5em",
  height: "1.5em",
  transition: transition("color", "short4", "standard"),
  ":hover": {
    color: vars.color.textSubdued,
  },
});
