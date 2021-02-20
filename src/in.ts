import type { Easing } from "./type";
import { secondPower, thirdPower, fourthPower } from "./math";

const easeInQuad: Easing = secondPower;
const easeInCubic: Easing = thirdPower;
const easeInQuart: Easing = fourthPower;
const easeInExpo: Easing = (x) => (x <= 0 ? 0 : Math.pow(2, 10 * (x - 1)));

/** @returns New "easeInBack" function with `coefficient`. */
const createEaseInBack = (coefficient = 1.70158): Easing => (x) =>
  x * x * ((coefficient + 1) * x - coefficient);

export {
  easeInQuad as quad,
  easeInCubic as cubic,
  easeInQuart as quart,
  easeInExpo as expo,
  createEaseInBack as createBack,
};
