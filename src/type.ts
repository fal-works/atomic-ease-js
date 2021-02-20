/**
 * Easing function.
 * @param x Any input ratio. Typically between `0` and `1`.
 * @returns Eased ratio. Typically `0` if x=0, `1` if x=1.
 */
export type Easing = (x: number) => number;
