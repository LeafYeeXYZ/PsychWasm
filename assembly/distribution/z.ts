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
  // Coefficients for the approximation
  const a1: f64 = -3.969683028665376e+01
  const a2: f64 = 2.209460984245205e+02
  const a3: f64 = -2.759285104469687e+02
  const a4: f64 = 1.383577518672690e+02
  const a5: f64 = -3.066479806614716e+01
  const a6: f64 = 2.506628277459239e+00
  const b1: f64 = -5.447609879822406e+01
  const b2: f64 = 1.615858368580409e+02
  const b3: f64 = -1.556989798598866e+02
  const b4: f64 = 6.680131188771972e+01
  const b5: f64 = -1.328068155288572e+01
  const c1: f64 = -7.784894002430293e-03
  const c2: f64 = -3.223964580411365e-01
  const c3: f64 = -2.400758277161838e+00
  const c4: f64 = -2.549732539343734e+00
  const c5: f64 = 4.374664141464968e+00
  const c6: f64 = 2.938163982698783e+00
  const d1: f64 = 7.784695709041462e-03
  const d2: f64 = 3.224671290700398e-01
  const d3: f64 = 2.445134137142996e+00
  const d4: f64 = 3.754408661907416e+00
  // Define break-points
  const pLow: f64 = 0.02425
  const pHigh: f64 = 1 - pLow
  let q: f64
  let r: f64
  if (p < pLow) {
    // Rational approximation for lower region
    q = Math.sqrt(-2 * Math.log(p))
    return (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
      ((((d1 * q + d2) * q + d3) * q + d4) * q + 1)
  } else if (p <= pHigh) {
    // Rational approximation for central region
    q = p - 0.5
    r = q * q
    return (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q /
      (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1)
  } else {
    // Rational approximation for upper region
    q = Math.sqrt(-2 * Math.log(1 - p))
    return -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
      ((((d1 * q + d2) * q + d3) * q + d4) * q + 1)
  }
}

/**
 * Convert z value to p value (the probability from the left tail to z)
 * @param z z value
 * @returns p value
 */
export function z2p(z: f64): f64 {
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
