import { mean, z2p, median, kurtosis, skewness } from '../build/release.js'

/**
 * Calculate the kurtosis and its z value and significance
 *
 * 计算峰度及其 z 值和显著性
 * @param data data to be calculated
 * @returns kurtosis, z value, and significance
 * @example
 * ```typescript
 * import { kurtosis } from 'psych-wasm/ts'
 * kurtosis([5, 5, 6, 8, 5])
 * ```
 */
export function kurtosisTest(data: number[]): {
	kurtosis: number
	z: number
	p: number
} {
	const k = kurtosis(data)
	const z = k / Math.sqrt(24 / data.length)
	const p = (1 - z2p(Math.abs(z))) * 2
	return { kurtosis: k, z, p }
}

/**
 * Calculate the skewness and its z value and significance
 *
 * 计算偏度及其 z 值和显著性
 * @param data data to be calculated
 * @returns skewness, z value, and significance
 * @example
 * ```typescript
 * import { skewness } from 'psych-wasm/ts'
 * skewness([1, 2, 3, 4, 5])
 * ```
 */
export function skewnessTest(data: number[]): {
	skewness: number
	z: number
	p: number
} {
	const s = skewness(data)
	const z = s / Math.sqrt(6 / data.length)
	const p = (1 - z2p(Math.abs(z))) * 2
	return { skewness: s, z, p }
}

/**
 * Calculate the mode of numbers  
 * If there are multiple modes, return 3 * median - 2 * mean  
 * 
 * 计算数字的众数 (如果有多个众数，则返回 3 * 中位数 - 2 * 平均数)
 * @param data numbers
 * @returns mode of numbers
 * @example
 * ```typescript
 * import { mode } from 'psych-wasm/ts'
 * mode([1, 2, 3, 3, 4, 5]) // 3
 * mode([1, 2, 3, 4, 5, 6]) // 3.5
 * ```
 */
export function mode(data: number[]): number {
	const freq = new Map<number, number>()
	let max = 0
	for (let i = 0; i < data.length; i++) {
		const f = (freq.has(data[i]) ? freq.get(data[i])! : 0) + 1
		freq.set(data[i], f)
		if (f > max) {
			max = f
		}
	}
	const modes: number[] = []
	for (const [k, v] of freq) {
		if (v === max) {
			modes.push(k)
		}
	}
  if (modes.length == 1) {
    return modes[0]
  } else {
    return 3 * median(data) - 2 * mean(data)
  }
}