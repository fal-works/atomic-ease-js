import type { Easing } from "./type";
import { integrate } from "./create";
import * as easeIn from "./in";
import * as easeOut from "./out";

const easeInOutQuad = integrate(easeIn.quad, easeOut.quad);
const easeInOutCubic = integrate(easeIn.cubic, easeOut.cubic);
const easeInOutQuart = integrate(easeIn.quart, easeOut.quart);
const easeInOutExpo = integrate(easeIn.expo, easeOut.expo);

/** @returns New "easeInOutBack" function with `coefficient`. */
const createEaseInOutBack = (coefficient: number): Easing =>
  integrate(easeIn.createBack(coefficient), easeOut.createBack(coefficient));

export {
  easeInOutQuad as quad,
  easeInOutCubic as cubic,
  easeInOutQuart as quart,
  easeInOutExpo as expo,
  createEaseInOutBack as createBack,
};
