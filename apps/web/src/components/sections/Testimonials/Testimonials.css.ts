import { style } from "@vanilla-extract/css";
import { fluid, vars } from "@/styles";
import { screen } from "@/styles/utils.css";

export const section = style({
  backgroundColor: vars.color.surface,
  paddingBlock: fluid.space("2xl-3xl"),
});

export const sectionText = style({
  maxWidth: vars.type.lineLength.wide,
  marginInline: "auto",
});

export const columns = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gridGap: fluid.space("l-xl"),
});

export const reviewsList = style({
  rowGap: fluid.space("m-l"),
  "@media": screen("m", {
    rowGap: fluid.space("l-xl"),
  }),
});
