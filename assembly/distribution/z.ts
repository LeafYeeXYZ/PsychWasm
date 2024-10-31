/**
 * Convert p value to z value (the z value from the left tail to p)
 * @param p p value
 * @returns z value
 * @throws {Error} p must be in the range (0, 1)
 */
export function p2z(p: f64): f64 {
  if (p <= 0 || p >= 1) {
    throw new Error('p must be in the range (0, 1)')
  }
  const precision: f64 = 0.0000001
  let min: f64 = -5.0
  let max: f64 = 5.0
  let z: f64 = 0.0
  while (max - min > precision) {
    z = (min + max) / 2
    if (z2p(z) > p) {
      max = z
    } else {
      min = z
    }
  }
  return z
}

/**
 * Convert z value to p value (the probability from the left tail to z)
 * @param z z value
 * @returns p value
 */
export function z2p(z: number): number {
  const p = 0.3275911
  const a1 = 0.254829592
  const a2 = -0.284496736
  const a3 = 1.421413741
  const a4 = -1.453152027
  const a5 = 1.061405429
  const sign = z < 0 ? -1 : 1;
  const absZ = Math.abs(z) / Math.sqrt(2.0)
  const t = 1.0 / (1.0 + p * absZ)
  const erf = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-absZ * absZ)
  return 0.5 * (1 + sign * erf)
}
