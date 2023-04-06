import { style } from "@vanilla-extract/css";
import { fluid, vars } from "@/styles";
import { subgridChild, subgridParent } from "@/styles/utils.css";

export const section = style([
  subgridParent,
  {
    backgroundColor: vars.color.surface,
    paddingBlock: fluid.space("2xl-3xl"),
  },
]);

export const content = style([subgridChild]);

export const sectionTitle = style({
  fontWeight: vars.type.fontWeight.regular,
  marginBlockEnd: fluid.space("s-m"),
});

export const sectionDescription = style({
  marginBlockEnd: fluid.space("xl-2xl"),
  letterSpacing: vars.type.letterSpacing.tight,
  maxWidth: vars.type.lineLength.wide,
  marginInline: "auto",
  opacity: 0.875,
});

export const columns = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gridGap: fluid.space("l-xl"),
});
