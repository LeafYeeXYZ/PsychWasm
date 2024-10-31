import { mean, std, z2p } from '../build/release.js'

const TOFIXED = 12

/**
 * Calculate the kurtosis and its z value and significance
 *
 * 计算峰度及其 z 值和显著性
 * @param data data to be calculated
 * @returns kurtosis, z value, and significance
 * @example
 * ```typescript
 * import { kurtosis } from '@leaf/psych-lib'
 * kurtosis([5, 5, 6, 8, 5])
 * ```
 */
export function kurtosis(data: number[]): {
	kurtosis: number
	z: number
	p: number
} {
	const n = data.length
	const m = mean(data)
	const s = std(data)
	const kurtosis = +(data.reduce((acc, Xi) => acc + ((Xi - m) / s) ** 4, 0) / n)
		.toFixed(TOFIXED)
	const z = +(kurtosis / Math.sqrt(24 / n))
		.toFixed(TOFIXED)
	const p = (1 - z2p(Math.abs(z))) * 2
	return { kurtosis, z, p }
}

/**
 * Calculate the skewness and its z value and significance
 *
 * 计算偏度及其 z 值和显著性
 * @param data data to be calculated
 * @returns skewness, z value, and significance
 * @example
 * ```typescript
 * import { skewness } from '@leaf/psych-lib'
 * skewness([1, 2, 3, 4, 5])
 * ```
 */
export function skewness(data: number[]): {
	skewness: number
	z: number
	p: number
} {
	const n = data.length
	const m = mean(data)
	const s = std(data)
	const skewness = +(data.reduce((acc, Xi) => acc + ((Xi - m) / s) ** 3, 0) / n)
		.toFixed(TOFIXED)
	const z = +(skewness / Math.sqrt(6 / n))
		.toFixed(TOFIXED)
	const p = (1 - z2p(Math.abs(z))) * 2
	return { skewness, z, p }
}
