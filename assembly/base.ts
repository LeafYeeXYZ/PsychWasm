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
 * @throws {Error} the length of data must be greater than 0
 */
export function mean(data: f64[]): f64 {
  const n: i32 = data.length
  if (n < 1) {
    throw new Error('the length of data must be greater than 0')
  }
  return sum(data) / n
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
 * Calculate the sum of squares of two arrays
 * @param x numbers
 * @param y numbers
 * @returns sum of squares of two arrays
 * @throws {Error} the length of x and y must be the same
 */
export function _ss(x: f64[], y: f64[]): f64 {
  if (x.length != y.length) {
    throw new Error('the length of x and y must be the same')
  }
  let r: f64 = 0
  for (let i = 0; i < x.length; i++) {
    r += (x[i] - y[i]) ** 2
  }
  return r
}

/**
 * Calculate the SP of two arrays
 * @param x array
 * @param y array
 * @returns SP of two arrays
 * @throws {Error} the length of x and y must be the same
 */
export function sp(x: f64[], y: f64[]): f64 {
  if (x.length != y.length) {
    throw new Error('the length of x and y must be the same')
  }
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
 * @param sample devided by n - 1 (rather than n) if true (default is true)
 * @returns variance of numbers
 * @throws {Error} the length of data must be greater than 0
 * @throws {Error} the length of data must be greater than 1 if sample is true
 */
export function vari(data: f64[], sample: bool = true): f64 {
  const n: i32 = data.length
  if (sample) {
    if (n < 2) {
      throw new Error('the length of data must be greater than 1')
    }
    return ss(data) / (n - 1)
  } else {
    if (n < 1) {
      throw new Error('the length of data must be greater than 0')
    }
    return ss(data) / n
  }
}

/**
 * Calculate the standard deviation of numbers
 * @param data numbers
 * @param sample devided by n - 1 (rather than n) if true (default is true)
 * @returns standard deviation of numbers
 * @throws {Error} the length of data must be greater than 0
 * @throws {Error} the length of data must be greater than 1 if sample is true
 */
export function std(data: f64[], sample: bool = true): f64 {
  const n: i32 = data.length
  if (sample && n < 2) {
    throw new Error('the length of data must be greater than 1')
  }
  if (n < 1) {
    throw new Error('the length of data must be greater than 0')
  }
  return Math.sqrt(vari(data, sample))
}

/**
 * Calculate the minimum of numbers
 * @param data numbers
 * @returns minimum of numbers
 * @throws {Error} the length of data must be greater than 0
 */
export function min(data: f64[]): f64 {
  const n: i32 = data.length
  if (n < 1) {
    throw new Error('the length of data must be greater than 0')
  }
  let r: f64 = data[0]
  for (let i = 1; i < n; i++) {
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
 * @throws {Error} the length of data must be greater than 0
 */
export function max(data: f64[]): f64 {
  const n: i32 = data.length
  if (n < 1) {
    throw new Error('the length of data must be greater than 0')
  }
  let r: f64 = data[0]
  for (let i = 1; i < n; i++) {
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
 * @private
 */
function partition(arr: f64[], low: i32, high: i32, ascending: bool): i32 {
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
 * @private
 */
function quickSort(arr: f64[], low: i32, high: i32, ascending: bool): void {
  if (low < high) {
    const pi: i32 = partition(arr, low, high, ascending)
    quickSort(arr, low, pi - 1, ascending)
    quickSort(arr, pi + 1, high, ascending)
  }
}

/**
 * Sort numbers in ascending or descending order
 * @param data numbers
 * @param ascending whether to sort in ascending order (default is true)
 * @returns sorted numbers
 */
export function sort(data: f64[], ascending: bool = true): f64[] {
  const copy: f64[] = data.slice()
  quickSort(copy, 0, data.length - 1, ascending)
  return copy
}

/**
 * Calculate the median of numbers
 * @param data numbers
 * @returns median of numbers
 * @throws {Error} the length of data must be greater than 0
 */
export function median(data: f64[]): f64 {
  const n: i32 = data.length
  if (n < 1) {
    throw new Error('the length of data must be greater than 0')
  }
  const sorted: f64[] = sort(data)
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
 * @throws {Error} the length of data must be greater than 0
 */
export function quantile(data: f64[], q: f64): f64 {
  const n: i32 = data.length
  if (n < 1) {
    throw new Error('the length of data must be greater than 0')
  }
  const sorted: f64[] = sort(data)
  const i: i32 = Math.floor(q * (n - 1)) as i32
  const f: f64 = q * (n - 1) - i
  return sorted[i] + f * (sorted[i + 1] - sorted[i])
}

/**
 * Calculate the correlation coefficient of two arrays
 * @param x array
 * @param y array
 * @returns correlation coefficient of two arrays
 * @throws {Error} the length of x and y must be the same
 * @throws {Error} the length of x and y must be greater than 0
 */
export function corr(x: f64[], y: f64[]): f64 {
  const n: i32 = x.length
  if (n != y.length) {
    throw new Error('the length of x and y must be the same')
  }
  if (n < 1) {
    throw new Error('the length of x and y must be greater than 1')
  }
  return sp(x, y) / Math.sqrt(ss(x) * ss(y))
}

/**
 * Calculate the COV of two arrays
 * @param x array
 * @param y array
 * @param sample devided by n - 1 (rather than n) if true (default is true)
 * @returns COV of two arrays
 * @throws {Error} the length of x and y must be the same
 * @throws {Error} the length of x and y must be greater than 0
 * @throws {Error} the length of x and y must be greater than 1 if sample is true
 */
export function cov(x: f64[], y: f64[], sample: bool = true): f64 {
  const n: i32 = x.length
  if (n != y.length) {
    throw new Error('the length of x and y must be the same')
  }
  if (sample) {
    if (n < 2) {
      throw new Error('the length of x and y must be greater than 1')
    }
    return sp(x, y) / (n - 1)
  } else {
    if (n < 1) {
      throw new Error('the length of x and y must be greater than 0')
    }
    return sp(x, y) / n
  }
}

/**
 * AssemblyScript implementation of toFixed
 * @param n float number
 * @param d precision
 * @returns fixed number
 */
export function fixed(n: f64, d: i32): f64 {
  const p: f64 = Math.pow(10, d)
  return Math.round(n * p) / p
}

/**
 * Calculate the kurtosis of numbers
 * @param data numbers
 * @param sample return sample kurtosis otherwise population kurtosis (default is true)
 * @returns kurtosis
 * @throws {Error} the length of data must be greater than 3
 * @see https://en.wikipedia.org/wiki/Kurtosis
 */
export function kurtosis(data: f64[], sample: bool = true): f64 {
  if (data.length < 4) {
    throw new Error('the length of data must be greater than 3')
  }
  const n: i32 = data.length
  const m: f64 = mean(data)
  if (sample) {
    let rT: f64 = 0
    let rB: f64 = 0
    for (let i = 0; i < n; i++) {
      rT += (data[i] - m) ** 4
      rB += (data[i] - m) ** 2
    }
    rT /= n
    rB /= n
    return rT / (rB ** 2) - 3
  } else {
    const s: f64 = std(data)
    let r: f64 = 0
    for (let i = 0; i < n; i++) {
      r += ((data[i] - m) / s) ** 4
    }
    return r / n
  }
}

/**
 * Calculate the skewness of numbers
 * @param data numbers
 * @param sample return sample skewness otherwise population skewness (default is true)
 * @returns skewness
 * @throws {Error} the length of data must be greater than 3
 * @see https://en.wikipedia.org/wiki/Skewness
 */
export function skewness(data: f64[], sample: bool = true): f64 {
  if (data.length < 3) {
    throw new Error('the length of data must be greater than 2')
  }
	const n: i32 = data.length
	const m: f64 = mean(data)
  if (sample) {
    let rT: f64 = 0
    let rB: f64 = 0
    for (let i = 0; i < n; i++) {
      rT += (data[i] - m) ** 3
      rB += (data[i] - m) ** 2
    }
    rT /= n
    rB /= n
    return rT / (rB ** 1.5)
  } else {
    const s: f64 = std(data)
    let r: f64 = 0
    for (let i = 0; i < n; i++) {
      r += ((data[i] - m) / s) ** 3
    }
    return r / n
  }
}