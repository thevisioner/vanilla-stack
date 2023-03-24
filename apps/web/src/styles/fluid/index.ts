import { fluidVars } from "./theme.css";

const createTokenAccessFn =
  <T extends Record<string, any>>(tokens: T) =>
  <K extends keyof T>(key: K) =>
    tokens[key];

const space = createTokenAccessFn(fluidVars.space);
const type = createTokenAccessFn(fluidVars.type);

export const fluid = {
  space,
  type,
  vars: fluidVars,
};
