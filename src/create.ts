import type { Easing } from "./type";

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

export { concatenateEasing as concatenate, integrateEasing as integrate };
