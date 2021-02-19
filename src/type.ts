/**
 * @param x Any ratio.
 * @returns Eased ratio. Typically `0` if x=0, `1` if x=1.
 */
export type Easing = (x: number) => number;
