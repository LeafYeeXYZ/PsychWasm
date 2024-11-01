import { corr, sp, ss, std, sort } from '../base'

/**
 * Bootstrap sampling
 * @param x data to be sampled
 * @param m data to be sampled
 * @param y data to be sampled
 * @returns a bootstrap sample
 */
class BootstrapSample {
  constructor(x: f64[], m: f64[], y: f64[]) {
    const xS: f64[] = []
    const mS: f64[] = []
    const yS: f64[] = []
    for (let i = 0; i < x.length; i++) {
      const r: i32 = Math.floor(Math.random() * x.length) as i32
      xS.push(x[r])
      mS.push(m[r])
      yS.push(y[r])
    }
    this.x = xS
    this.m = mS
    this.y = yS
  }
  x: f64[]
  m: f64[]
  y: f64[]
}

/**
 * Simple mediation model nonparametric Bootstrap test
 * @param x independent variable
 * @param m mediator variable
 * @param y dependent variable
 * @param B sampling times
 * @param a signifiance level
 * @returns confidence interval
 * @throws {Error} the length of x, m and y must be the same
 */
export function bootstrapTest(
  x: f64[],
  m: f64[],
  y: f64[],
  B: i32,
  a: f64,
): f64[] {
  if (x.length != m.length || x.length != y.length) {
    throw new Error('the length of x, m and y must be the same')
  }
  const ab: f64[] = []
  for (let i = 0; i < B; i++) {
    const sample = new BootstrapSample(x, m, y)
    ab.push(calculate(sample.x, sample.m, sample.y))
  }
  const sorted: f64[] = sort(ab)
  const lower: f64 = sorted[Math.floor(B * a / 2) as i32]
  const upper: f64 = sorted[Math.floor(B * (1 - a / 2)) as i32]
  return [lower, upper]
}

function calculate(x: f64[], m: f64[], y: f64[]): f64 {
  const c: f64 = corr(x, m)
  const stdx: f64 = std(x)
  const stdm: f64 = std(m)
  const a: f64 = c * stdm / stdx
  const ssx: f64 = ss(x)
  const ssm: f64 = ss(m)
  const spxm: f64 = sp(x, m)
  const spxy: f64 = sp(x, y)
  const spmy: f64 = sp(m, y)
	const b: f64 = (spmy * ssx - spxy * spxm) / (ssx * ssm - spxm ** 2)
  return a * b
}