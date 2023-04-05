import { fluidVars } from "./theme.css";
import type { SpacingSpaceKey } from "./space.css";
import type { TypeStepKey } from "./type.css";

const createTokenAccessFn =
  <T extends Record<string, any>>(tokens: T) =>
  <K extends keyof T>(key: K) =>
    tokens[key];

const space = createTokenAccessFn(fluidVars.space);
const type = createTokenAccessFn(fluidVars.type);

export type FluidSpacingSpace = SpacingSpaceKey;
export type FluidTypeStep = TypeStepKey;

export const fluid = {
  space,
  type,
  vars: fluidVars,
};
