import type { Easing } from "./type";
import { integrate } from "./create";
import * as easeIn from "./in";
import * as easeOut from "./out";

const easeOutInQuad = integrate(easeOut.quad, easeIn.quad);
const easeOutInCubic = integrate(easeOut.cubic, easeIn.cubic);
const easeOutInQuart = integrate(easeOut.quart, easeIn.quart);
const easeOutInExpo = integrate(easeOut.expo, easeIn.expo);

/** @returns New "easeOutInBack" function with `coefficient`. */
const createEaseOutInBack = (coefficient: number): Easing =>
  integrate(easeOut.createBack(coefficient), easeIn.createBack(coefficient));

export {
  easeOutInQuad as quad,
  easeOutInCubic as cubic,
  easeOutInQuart as quart,
  easeOutInExpo as expo,
  createEaseOutInBack as createBack,
};
