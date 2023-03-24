import { style } from "@vanilla-extract/css";
import { rgba } from "polished";
import { state } from "@/styles/tokens";
import { vars } from "@/styles/theme.css";

export const visuallyHidden = style({
  border: 0,
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: 0,
  clip: "rect(0 0 0 0)",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
});

export const stateLayerBase = () =>
  style({
    position: "relative",
    "::before": {
      content: "",
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      pointerEvents: "none",
      opacity: 0,
      transition: `opacity ${vars.motion.duration.short1} ${vars.motion.easing.standard}`,
    },
  });

// TODO: Add stricter types to state layer helpers

export const stateLayerStyle = (contentColor: string) =>
  style({
    "::before": {
      backgroundColor: contentColor,
    },
    selectors: {
      "&:hover::before": {
        opacity: vars.state.layerOpacity.hover,
      },
      "&:focus::before": {
        opacity: vars.state.layerOpacity.focus,
      },
      "&:active::before": {
        opacity: vars.state.layerOpacity.pressed,
      },
    },
  });

type HexColor = `#${string}`;

export const stateDisabledStyle = (
  parent: string,
  contentColorToken: HexColor,
  containerColorToken: HexColor
) =>
  style({
    "::before": {
      content: "none",
    },
    selectors: {
      [`${parent}&`]: {
        backgroundColor: rgba(
          containerColorToken,
          parseFloat(state.layerOpacity.disabled.container)
        ),
        color: rgba(
          contentColorToken,
          parseFloat(state.layerOpacity.disabled.content)
        ),
      },
    },
  });
