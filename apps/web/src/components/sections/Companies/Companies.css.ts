import { style } from "@vanilla-extract/css";
import { fluid, vars } from "@/styles";
import { screen } from "@/styles/utils.css";

export const section = style({
  fontSize: fluid.type("step-0"),
  marginBlock: fluid.space("m-l"),
});

export const text = style({
  color: vars.color.textSubdued,
  fontFamily: vars.font.display,
  fontSize: "0.875em",
  marginBlockEnd: fluid.space("xs-s"),
});

export const logosList = style({
  flexDirection: "column",
  marginBlock: fluid.space("2xs-xs"),
  "@media": screen("s", {
    flexDirection: "row",
  }),
});
