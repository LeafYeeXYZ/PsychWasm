/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * assembly/base/sum
 * @param data `~lib/array/Array<f64>`
 * @returns `f64`
 */
export declare function sum(data: Array<number>): number;
/**
 * assembly/base/mean
 * @param data `~lib/array/Array<f64>`
 * @returns `f64`
 */
export declare function mean(data: Array<number>): number;
/**
 * assembly/base/ss
 * @param data `~lib/array/Array<f64>`
 * @returns `f64`
 */
export declare function ss(data: Array<number>): number;
/**
 * assembly/base/_ss
 * @param x `~lib/array/Array<f64>`
 * @param y `~lib/array/Array<f64>`
 * @returns `f64`
 */
export declare function _ss(x: Array<number>, y: Array<number>): number;
/**
 * assembly/base/sp
 * @param x `~lib/array/Array<f64>`
 * @param y `~lib/array/Array<f64>`
 * @returns `f64`
 */
export declare function sp(x: Array<number>, y: Array<number>): number;
/**
 * assembly/base/vari
 * @param data `~lib/array/Array<f64>`
 * @param sample `bool`
 * @returns `f64`
 */
export declare function vari(data: Array<number>, sample?: boolean): number;
/**
 * assembly/base/std
 * @param data `~lib/array/Array<f64>`
 * @param sample `bool`
 * @returns `f64`
 */
export declare function std(data: Array<number>, sample?: boolean): number;
/**
 * assembly/base/min
 * @param data `~lib/array/Array<f64>`
 * @returns `f64`
 */
export declare function min(data: Array<number>): number;
/**
 * assembly/base/max
 * @param data `~lib/array/Array<f64>`
 * @returns `f64`
 */
export declare function max(data: Array<number>): number;
/**
 * assembly/base/sort
 * @param data `~lib/array/Array<f64>`
 * @param ascending `bool`
 * @returns `~lib/array/Array<f64>`
 */
export declare function sort(data: Array<number>, ascending?: boolean): Array<number>;
/**
 * assembly/base/median
 * @param data `~lib/array/Array<f64>`
 * @returns `f64`
 */
export declare function median(data: Array<number>): number;
/**
 * assembly/base/quantile
 * @param data `~lib/array/Array<f64>`
 * @param q `f64`
 * @returns `f64`
 */
export declare function quantile(data: Array<number>, q: number): number;
/**
 * assembly/base/corr
 * @param x `~lib/array/Array<f64>`
 * @param y `~lib/array/Array<f64>`
 * @returns `f64`
 */
export declare function corr(x: Array<number>, y: Array<number>): number;
/**
 * assembly/base/cov
 * @param x `~lib/array/Array<f64>`
 * @param y `~lib/array/Array<f64>`
 * @param sample `bool`
 * @returns `f64`
 */
export declare function cov(x: Array<number>, y: Array<number>, sample?: boolean): number;
/**
 * assembly/base/fixed
 * @param n `f64`
 * @param d `i32`
 * @returns `f64`
 */
export declare function fixed(n: number, d: number): number;
/**
 * assembly/base/kurtosis
 * @param data `~lib/array/Array<f64>`
 * @param sample `bool`
 * @returns `f64`
 */
export declare function kurtosis(data: Array<number>, sample?: boolean): number;
/**
 * assembly/base/skewness
 * @param data `~lib/array/Array<f64>`
 * @param sample `bool`
 * @returns `f64`
 */
export declare function skewness(data: Array<number>, sample?: boolean): number;
/**
 * assembly/mediation/bootstrap/bootstrapTest
 * @param x `~lib/array/Array<f64>`
 * @param m `~lib/array/Array<f64>`
 * @param y `~lib/array/Array<f64>`
 * @param B `i32`
 * @param a `f64`
 * @returns `~lib/array/Array<f64>`
 */
export declare function bootstrapTest(x: Array<number>, m: Array<number>, y: Array<number>, B: number, a: number): Array<number>;
/**
 * assembly/distribution/f/f2p
 * @param f `f64`
 * @param df1 `f64`
 * @param df2 `f64`
 * @param twoside `bool`
 * @returns `f64`
 */
export declare function f2p(f: number, df1: number, df2: number, twoside?: boolean): number;
/**
 * assembly/distribution/f/p2f
 * @param p `f64`
 * @param df1 `f64`
 * @param df2 `f64`
 * @param twoside `bool`
 * @param precision `f64`
 * @returns `f64`
 */
export declare function p2f(p: number, df1: number, df2: number, twoside?: boolean, precision?: number): number;
/**
 * assembly/distribution/t/t2p
 * @param t `f64`
 * @param df `f64`
 * @param twoside `bool`
 * @returns `f64`
 */
export declare function t2p(t: number, df: number, twoside?: boolean): number;
/**
 * assembly/distribution/t/p2t
 * @param p `f64`
 * @param df `f64`
 * @param twoside `bool`
 * @param precision `f64`
 * @returns `f64`
 */
export declare function p2t(p: number, df: number, twoside?: boolean, precision?: number): number;
/**
 * assembly/distribution/z/p2z
 * @param p `f64`
 * @returns `f64`
 */
export declare function p2z(p: number): number;
/**
 * assembly/distribution/z/z2p
 * @param z `f64`
 * @returns `f64`
 */
export declare function z2p(z: number): number;
