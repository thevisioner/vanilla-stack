import { style } from "@vanilla-extract/css";
import { fluid, vars } from "@/styles";
import { subgridChild, subgridParent, screen } from "@/styles/utils.css";

export const footer = style([
  subgridParent,
  {
    backgroundColor: "#f8fafc",
    paddingBlockStart: fluid.space("l-xl"),
  },
]);

export const wrapper = style([subgridChild]);

export const topGroup = style({
  marginBlockEnd: fluid.space("l-xl"),
});

export const nav = style({
  fontSize: fluid.type("step--1"),
  marginBlockStart: fluid.space("m-l"),
});

export const bottomGroup = style({
  color: vars.color.decorative,
  marginBlock: fluid.space("m-l"),
  "@media": screen("s", {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  }),
});
