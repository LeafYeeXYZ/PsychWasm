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
 * assembly/base/sp
 * @param x `~lib/array/Array<f64>`
 * @param y `~lib/array/Array<f64>`
 * @returns `f64`
 */
export declare function sp(x: Array<number>, y: Array<number>): number;
/**
 * assembly/base/vari
 * @param data `~lib/array/Array<f64>`
 * @returns `f64`
 */
export declare function vari(data: Array<number>): number;
/**
 * assembly/base/std
 * @param data `~lib/array/Array<f64>`
 * @returns `f64`
 */
export declare function std(data: Array<number>): number;
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
 * @returns `f64`
 */
export declare function cov(x: Array<number>, y: Array<number>): number;
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
