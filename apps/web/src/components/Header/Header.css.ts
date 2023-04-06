import { style } from "@vanilla-extract/css";
import { fluid, vars } from "@/styles";

export const header = style({
  fontSize: fluid.type("step--1"),
  paddingBlock: fluid.space("m-l"),
});

export const logo = style({
  display: "inline-flex",
});
