/**
 * Calculate the sum of numbers
 * @param data numbers
 * @returns sum of numbers
 */
export function sum(data: f64[]): f64 {
  let r: f64 = 0
  for (let i = 0; i < data.length; i++) {
    r += data[i]
  }
  return r
}

/**
 * Calculate the mean of numbers
 * @param data numbers
 * @returns mean of numbers
 */
export function mean(data: f64[]): f64 {
  return sum(data) / data.length
}

/**
 * Calculate the sum of squares
 * @param data numbers
 * @returns sum of squares
 */
export function ss(data: f64[]): f64 {
  const m: f64 = mean(data)
  let r: f64 = 0
  for (let i = 0; i < data.length; i++) {
    r += (data[i] - m) ** 2
  }
  return r
}

/**
 * Calculate the SP of two arrays
 * @param x array
 * @param y array
 * @returns SP of two arrays
 */
export function sp(x: f64[], y: f64[]): f64 {
  const mx: f64 = mean(x)
  const my: f64 = mean(y)
  let r: f64 = 0
  for (let i = 0; i < x.length; i++) {
    r += (x[i] - mx) * (y[i] - my)
  }
  return r
}

/**
 * Calculate the variance of numbers
 * @param data numbers
 * @returns variance of numbers
 */
export function vari(data: f64[]): f64 {
  return ss(data) / data.length
}

/**
 * Calculate the standard deviation of numbers
 * @param data numbers
 * @returns standard deviation of numbers
 */
export function std(data: f64[]): f64 {
  return Math.sqrt(vari(data))
}

/**
 * Calculate the minimum of numbers
 * @param data numbers
 * @returns minimum of numbers
 */
export function min(data: f64[]): f64 {
  let r: f64 = data[0]
  for (let i = 1; i < data.length; i++) {
    if (data[i] < r) {
      r = data[i]
    }
  }
  return r
}

/**
 * Calculate the maximum of numbers
 * @param data numbers
 * @returns maximum of numbers
 */
export function max(data: f64[]): f64 {
  let r: f64 = data[0]
  for (let i = 1; i < data.length; i++) {
    if (data[i] > r) {
      r = data[i]
    }
  }
  return r
}

/**
 * Sort numbers in ascending order
 * @param data numbers
 * @returns sorted numbers
 */
export function sort(data: f64[]): f64[] {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] > data[j]) {
        const t: f64 = data[i]
        data[i] = data[j]
        data[j] = t
      }
    }
  }
  return data
}

/**
 * Calculate the median of numbers
 * @param data numbers
 * @returns median of numbers
 */
export function median(data: f64[]): f64 {
  const sorted: f64[] = sort(data)
  const n: i32 = data.length
  if (n % 2 == 0) {
    return (sorted[n >> 1] + sorted[(n >> 1) - 1]) / 2
  } else {
    return sorted[n >> 1]
  }
}

/**
 * Calculate the quantile of numbers
 * @param data numbers
 * @param q quantile
 * @returns quantile of numbers
 */
export function quantile(data: f64[], q: f64): f64 {
  const sorted: f64[] = sort(data)
  const n: i32 = data.length
  const i: i32 = Math.floor(q * (n - 1)) as i32
  const f: f64 = q * (n - 1) - i
  return sorted[i] + f * (sorted[i + 1] - sorted[i])
}

/**
 * Calculate the correlation coefficient of two arrays
 * @param x array
 * @param y array
 * @returns correlation coefficient of two arrays
 */
export function corr(x: f64[], y: f64[]): f64 {
  return sp(x, y) / Math.sqrt(ss(x) * ss(y))
}

/**
 * Calculate the COV of two arrays
 * @param x array
 * @param y array
 * @returns COV of two arrays
 */
export function cov(x: f64[], y: f64[]): f64 {
  return sp(x, y) / x.length
}
