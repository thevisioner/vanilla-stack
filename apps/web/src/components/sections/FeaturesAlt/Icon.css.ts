import { style } from "@vanilla-extract/css";
import { rem } from "polished";
import { fluid, vars } from "@/styles";
import { featureItemActive } from "./FeaturesAlt.css";

export const icon = style({
  backgroundColor: vars.color.decorative,
  borderRadius: vars.shape.borderRadius.m,
  display: "block",
  marginBlockEnd: fluid.space("xs-s"),
  width: rem(36),
  height: rem(36),
  selectors: {
    [`${featureItemActive} &`]: {
      backgroundColor: vars.color.primary,
    },
  },
});
