import { style } from "@vanilla-extract/css";
import { fluid, vars } from "@/styles";

export const overlay = style({
  display: "flex",
  flexDirection: "column",
  // backdropFilter: "blur(4px)",
  paddingBlock: fluid.space("m-l"),
  paddingInline: fluid.space("s-m"),
  position: "fixed",
  inset: 0,
  zIndex: vars.depth[4],
  willChange: "opacity",
  "::before": {
    content: "",
    position: "fixed",
    inset: 0,
    zIndex: -1,
    backgroundColor: vars.color.surface,
    opacity: 0.75,
  },
});

export const wrapper = style({
  backgroundColor: vars.color.background,
  borderRadius: vars.shape.borderRadius.xl,
  border: `1px solid ${vars.color.border}`,
  boxShadow: vars.shadow.xl,
  marginBlockStart: fluid.space("xl-2xl"),
  padding: fluid.space("m-l"),
  willChange: "transform",
});

export const link = style({
  backgroundColor: "transparent",
  borderRadius: vars.shape.borderRadius.m,
  color: vars.color.textSubdued,
  display: "block",
  fontSize: `calc(${fluid.type("step-0")} * 1.125)`,
  padding: fluid.space("xs-s"),
});
