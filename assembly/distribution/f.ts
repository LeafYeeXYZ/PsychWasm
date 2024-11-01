function gammaln(x: f64): f64 {
  const c: f64[] = [
    76.18009172947146,
    -86.50532032941677,
    24.01409824083091,
    -1.231739572450155,
    0.001208650973866179,
    -0.000005395239384953
  ];
  let y: f64 = x
  let tmp: f64 = x + 5.5
  tmp -= (x + 0.5) * Math.log(tmp)
  let ser: f64 = 1.000000000190015
  for (let j: i32 = 0; j < 6; j++) {
    ser += c[j] / ++y
  }
  return -tmp + Math.log(2.5066282746310005 * ser / x)
}

function ibeta(x: f64, a: f64, b: f64): f64 {
  const bt: f64 = (x === 0 || x === 1) ? 0 :
    Math.exp(gammaln(a + b) - gammaln(a) - gammaln(b) + a * Math.log(x) + b * Math.log(1 - x));
  if (x < 0 || x > 1) return 0
  if (x < (a + 1) / (a + b + 2)) {
    return bt * betacf(x, a, b) / a
  }
  return 1 - bt * betacf(1 - x, b, a) / b
}

function betacf(x: f64, a: f64, b: f64): f64 {
  const fpmin: f64 = 1e-30
  const qab: f64 = a + b
  const qap: f64 = a + 1
  const qam: f64 = a - 1
  let c: f64 = 1
  let d: f64 = 1 - qab * x / qap
  if (Math.abs(d) < fpmin) d = fpmin
  d = 1 / d
  let h: f64 = d
  for (let m: i32 = 1; m <= 100; m++) {
    const m2: i32 = 2 * m;
    let aa: f64 = m * (b - m) * x / ((qam + m2) * (a + m2))
    d = 1 + aa * d
    if (Math.abs(d) < fpmin) d = fpmin
    c = 1 + aa / c 
    if (Math.abs(c) < fpmin) c = fpmin
    d = 1 / d
    h *= d * c
    aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2))
    d = 1 + aa * d
    if (Math.abs(d) < fpmin) d = fpmin
    c = 1 + aa / c
    if (Math.abs(c) < fpmin) c = fpmin
    d = 1 / d
    h *= d * c
  }
  return h
}

/**
 * F distribution f value to p value  
 * P value is the probability of f value to the right tail if twoside is false  
 * otherwise, it is the number above times 2
 * @param f f value
 * @param df1 degree of freedom 1
 * @param df2 degree of freedom 2
 * @param twoside two side or not
 * @returns p value
 * @throws {Error} f must be greater than 0
 * @throws {Error} df1 must be greater than 0
 * @throws {Error} df2 must be greater than 0
 */
export function f2p(f: f64, df1: f64, df2: f64, twoside: bool = true): f64 {
  if (f <= 0) {
    throw new Error('f must be greater than 0')
  }
  if (df1 <= 0) {
    throw new Error('df1 must be greater than 0')
  }
  if (df2 <= 0) {
    throw new Error('df2 must be greater than 0')
  }
  const x: f64 = df2 / (df2 + df1 * f)
  const p: f64 = ibeta(x, df2 / 2, df1 / 2)
  return twoside ? 2 * Math.min(p, 1 - p) : p
}

/**
 * F distribution p value to f value  
 * P value is the probability of f value to the right tail if twoside is false  
 * otherwise, it is the number above times 2
 * @param p p value
 * @param df1 degree of freedom 1
 * @param df2 degree of freedom 2
 * @param twoside two side or not
 * @returns f value
 * @throws {Error} p value must be in the range (0, 1)
 * @throws {Error} df1 must be greater than 0
 * @throws {Error} df2 must be greater than 0
 */
export function p2f(p: f64, df1: f64, df2: f64, twoside: bool = true): f64 {
  if (p <= 0 || p >= 1) {
    throw new Error('p value must be in the range (0, 1)')
  }
  if (df1 <= 0) {
    throw new Error('df1 must be greater than 0')
  }
  if (df2 <= 0) {
    throw new Error('df2 must be greater than 0')
  }
  let min: f64 = 0.0
  let max: f64 = 1000000.0
  let f: f64 = 0.0
  const precision: f64 = 0.00001
  while (max - min > precision) {
    f = (min + max) / 2
    if (f2p(f, df1, df2, twoside) < p) {
      max = f
    } else {
      min = f
    }
  }
  return f
}