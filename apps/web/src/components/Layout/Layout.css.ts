import settings from "@/settings";
import {
  createGlobalThemeContract,
  createGlobalTheme,
  style,
  globalStyle,
} from "@vanilla-extract/css";
import { rem } from "polished";

const layout = settings.layout;

export const vars = createGlobalThemeContract({
  fluid: {
    edgeWidth: "fluid-edge-width",
  },
});

createGlobalTheme(":root", vars, {
  fluid: {
    edgeWidth: `calc(
      ${rem(layout.edgeWidthMin)} +
        ${layout.edgeWidthMax - layout.edgeWidthMin} * var(--fluid-ratio)
    )`,
  },
});

// TODO: Add column for expanded content dynamically if possible

export const layoutRoot = style({
  display: "grid",
  gridTemplateColumns: `
    [full-start] minmax(0, 1fr)
    [edge-start] ${vars.fluid.edgeWidth}
    [content-start] minmax(0, ${rem(layout.contentWidth)}) [content-end]
    ${vars.fluid.edgeWidth} [edge-end]
    minmax(0, 1fr) [full-end]
    `,
});

globalStyle(`${layoutRoot} > *`, {
  gridColumn: "content",
});
