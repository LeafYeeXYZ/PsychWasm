import assert from 'node:assert'
import * as as from '../build/release.js'

const PERCISION = 12

// Base
console.time('base')
assert.strictEqual(as.sum([1, 2, 3]).toFixed(PERCISION), Number(6).toFixed(PERCISION))
assert.strictEqual(as.mean([1, 2, 3]).toFixed(PERCISION), Number(2).toFixed(PERCISION))
assert.strictEqual(as.ss([1, 2, 3]).toFixed(PERCISION), Number(2).toFixed(PERCISION))
assert.strictEqual(as.vari([1, 2, 3]).toFixed(PERCISION), Number(2 / 3).toFixed(PERCISION))
assert.strictEqual(as.std([1, 2, 3]).toFixed(PERCISION), Number(Math.sqrt(2 / 3)).toFixed(PERCISION))
assert.strictEqual(as.min([1, 2, 3]).toFixed(PERCISION), Number(1).toFixed(PERCISION))
assert.strictEqual(as.max([1, 2, 3]).toFixed(PERCISION), Number(3).toFixed(PERCISION))
assert.strictEqual(as.median([3.6, 1.1, 2.1, 1.4, 3.4, 3.2]).toFixed(PERCISION), Number(2.65).toFixed(PERCISION))
assert.strictEqual(as.quantile([1, 2, 3], 0.5).toFixed(PERCISION), Number(2).toFixed(PERCISION))
assert.strictEqual(as.quantile([1, 2, 3, 4], 0.1).toFixed(PERCISION), Number(1.3).toFixed(PERCISION))
assert.strictEqual(as.quantile([1, 1, 1, 2], 0.25).toFixed(PERCISION), Number(1).toFixed(PERCISION))
assert.strictEqual(as.sp([1, 2, 3], [4, 6, 8]).toFixed(PERCISION), Number(4).toFixed(PERCISION))
assert.strictEqual(as.corr([1, 2, 3], [4, 6, 8]).toFixed(PERCISION), Number(1).toFixed(PERCISION))
assert.strictEqual(as.cov([1, 2, 3], [4, 6, 8]).toFixed(PERCISION), Number(4 / 3).toFixed(PERCISION))
assert.strictEqual(as.fixed(1.23456789, 2).toFixed(PERCISION), Number(1.23).toFixed(PERCISION))
assert.strictEqual(as.fixed(1.23456789, 3).toFixed(PERCISION), Number(1.235).toFixed(PERCISION))
assert.strictEqual(as._ss([1, 2, 3], [4, 6, 8]).toFixed(PERCISION), Number(50).toFixed(PERCISION))
assert.strictEqual(as.kurtosis([1, 2, 3, 4, 5]).toFixed(PERCISION), Number(1.7).toFixed(PERCISION))
assert.strictEqual(as.skewness([1, 2, 3, 4, 5]).toFixed(PERCISION), Number(0).toFixed(PERCISION))
console.timeEnd('base')

// Bootstrap
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const m = [34, 56, 78, 90, 124, 145, 167, 189, 200, 234]
const y = [2, 6, 31, 66, 100, 134, 167, 200, 234, 267]
const B = 1000
const a = 0.05
console.time('bootstrap')
const bs = as.bootstrapTest(x, m, y, B, a)
assert.strictEqual(bs.length, 2)
assert.strictEqual(typeof bs[0], 'number')
assert.strictEqual(typeof bs[1], 'number')
console.timeEnd('bootstrap')

// Distribution
console.time('distribution')
assert.strictEqual(as.z2p(1.96).toFixed(3), '0.975')
assert.strictEqual(as.z2p(-2.58).toFixed(3), '0.005')
assert.strictEqual(as.p2z(0.975).toFixed(2), '1.96')
assert.strictEqual(as.p2z(0.005).toFixed(2), '-2.58')
assert.strictEqual(as.t2p(0.7, 10).toFixed(3), '0.500')
assert.strictEqual(as.t2p(0.7, 10, false).toFixed(3), '0.250')
assert.strictEqual(as.t2p(2.086, 20).toFixed(3), '0.050')
assert.strictEqual(as.t2p(2.086, 20, false).toFixed(3), '0.025')
assert.strictEqual(as.t2p(-0.7, 10).toFixed(3), '0.500')
assert.strictEqual(as.t2p(-0.7, 10, false).toFixed(3), '0.250')
assert.strictEqual(as.t2p(-2.086, 20).toFixed(3), '0.050')
assert.strictEqual(as.t2p(-2.086, 20, false).toFixed(3), '0.025')
assert.strictEqual(as.p2t(0.500, 10).toFixed(2), '0.70')
assert.strictEqual(as.p2t(0.250, 10, false).toFixed(2), '0.70')
assert.strictEqual(as.p2t(0.050, 20).toFixed(2), '2.09')
assert.strictEqual(as.p2t(0.025, 20, false).toFixed(2), '2.09')
assert.strictEqual(as.f2p(161, 1.0, 1.0, false).toFixed(3), '0.050')
assert.strictEqual(as.f2p(4.1, 2, 10, false).toFixed(3), '0.050')
assert.strictEqual(as.f2p(647.8, 1.0, 1.0).toFixed(3), '0.050')
assert.strictEqual(as.f2p(7.15, 5, 5).toFixed(3), '0.050')
assert.strictEqual(as.p2f(0.05, 1.0, 1.0, false).toFixed(0), '161')
assert.strictEqual(as.p2f(0.05, 2, 10, false).toFixed(1), '4.1')
assert.strictEqual(as.p2f(0.05, 1.0, 1.0).toFixed(1), '647.8')
assert.strictEqual(as.p2f(0.05, 5, 5).toFixed(2), '7.15')
console.timeEnd('distribution')
