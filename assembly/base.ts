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
 * Partition the array for QuickSort
 * @param arr array to partition
 * @param low starting index
 * @param high ending index
 * @param ascending whether to sort in ascending order
 * @returns partition index
 */
function partition(arr: f64[], low: i32, high: i32, ascending: boolean): i32 {
  const pivot: f64 = arr[high]
  let i: i32 = low - 1
  for (let j: i32 = low; j < high; j++) {
    if (ascending ? arr[j] < pivot : arr[j] > pivot) {
      i++
      const temp: f64 = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
  const temp: f64 = arr[i + 1]
  arr[i + 1] = arr[high]
  arr[high] = temp
  return i + 1
}

/**
 * QuickSort algorithm
 * @param arr array to sort
 * @param low starting index
 * @param high ending index
 * @param ascending whether to sort in ascending order
 */
function quickSort(arr: f64[], low: i32, high: i32, ascending: boolean): void {
  if (low < high) {
    const pi: i32 = partition(arr, low, high, ascending)
    quickSort(arr, low, pi - 1, ascending)
    quickSort(arr, pi + 1, high, ascending)
  }
}

/**
 * Sort numbers in ascending or descending order
 * @param data numbers
 * @param ascending whether to sort in ascending order
 * @returns sorted numbers
 */
export function sort(data: f64[], ascending: boolean = true): f64[] {
  const copy: f64[] = data.slice()
  quickSort(copy, 0, data.length - 1, ascending)
  return copy
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
