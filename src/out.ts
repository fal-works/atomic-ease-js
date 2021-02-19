import type { Easing } from "./type";
import { secondPower, thirdPower, fourthPower } from "./math";

const easeOutQuad: Easing = (x) => -secondPower(x - 1) + 1;
const easeOutCubic: Easing = (x) => thirdPower(x - 1) + 1;
const easeOutQuart: Easing = (x) => -fourthPower(x - 1) + 1;
const easeOutExpo: Easing = (x) => (x < 1 ? -Math.pow(2, -10 * x) + 1 : 1);

/** @returns New "easeOutBack" function with `coefficient`. */
const createEaseOutBack = (coefficient = 1.70158): Easing => {
  return (x: number) => {
    const r = x - 1;
    const r2 = r * r;
    return (coefficient + 1) * (r * r2) + coefficient * r2 + 1;
  };
};

export {
  easeOutQuad as quad,
  easeOutCubic as cubic,
  easeOutQuart as quart,
  easeOutExpo as expo,
  createEaseOutBack as createBack,
};
