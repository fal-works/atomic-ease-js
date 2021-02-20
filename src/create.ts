import type { Easing } from "./type";

/**
 * Creates a new easing function by clipping and normalizing a specific range
 * from any 1-dimension numeric function.
 */
const createEasing = (
  func: (x: number) => number,
  xRange: { start: number; end: number },
  yRange: { start: number; end: number }
): Easing => {
  const { start: startX, end: endX } = xRange;
  const { start: startY, end: endY } = yRange;
  const lengthX = endX - startX;
  const lengthY = endY - startY;
  if (lengthY === 0) throw new Error();
  const factorY = 1 / lengthY;

  return (x) => factorY * (func(startX + x * lengthX) - startY);
};

/**
 * Concatenates two easing functions without normalization.
 * @param thresholdRatio - Defaults to `0.5`.
 * @returns New easing function.
 */
const concatenateEasing = (
  easingA: Easing,
  easingB: Easing,
  thresholdRatio = 0.5
): Easing => {
  const inverseThresholdRatio = 1 / thresholdRatio;

  return (ratio: number) => {
    if (ratio < thresholdRatio) return easingA(inverseThresholdRatio * ratio);
    else {
      const ratioB = 1 - thresholdRatio;
      return easingB((ratio - thresholdRatio) / ratioB);
    }
  };
};

/**
 * Integrates two easing functions.
 * Both provided functions will be normalized depending on `thresholdRatio`.
 * @param thresholdRatio - Defaults to `0.5`.
 * @returns New easing function.
 */
const integrateEasing = (
  easingA: Easing,
  easingB: Easing,
  thresholdRatio = 0.5
): Easing => {
  const inverseThresholdRatio = 1 / thresholdRatio;

  return (ratio: number) => {
    if (ratio < thresholdRatio)
      return thresholdRatio * easingA(inverseThresholdRatio * ratio);
    else {
      const ratioB = 1 - thresholdRatio;
      return (
        thresholdRatio + ratioB * easingB((ratio - thresholdRatio) / ratioB)
      );
    }
  };
};

export {
  createEasing as from,
  concatenateEasing as concatenate,
  integrateEasing as integrate,
};
