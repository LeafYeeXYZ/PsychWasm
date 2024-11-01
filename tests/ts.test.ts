import assert from 'node:assert'
import * as ts from '../lib/index.ts'

const PERCISION = 12

// Base
console.time('base')
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const m = [34, 56, 78, 90, 124, 145, 167, 189, 200, 234]
const y = [2, 6, 31, 66, 100, 134, 167, 200, 234, 267]
const kurtosis = ts.kurtosisTest(x)
const skewness = ts.skewnessTest(x)
assert.strictEqual(skewness.skewness.toFixed(PERCISION), Number(0).toFixed(PERCISION))
assert.strictEqual(skewness.z.toFixed(PERCISION), Number(0).toFixed(PERCISION))
assert.strictEqual(skewness.p.toFixed(3), '1.000')
assert.strictEqual(typeof kurtosis.kurtosis, 'number')
assert.strictEqual(typeof kurtosis.z, 'number')
assert.strictEqual(typeof kurtosis.p, 'number')
assert.strictEqual(ts.mode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toFixed(PERCISION), Number(5.5).toFixed(PERCISION))
assert.strictEqual(ts.mode([1, 1, 1, 2, 2, 2, 3, 3, 3, 3]).toFixed(PERCISION), Number(3).toFixed(PERCISION))
console.timeEnd('base')

// LinearRegression
console.time('linearRegression')
const lr1 = new ts.LinearRegressionOne(x, y)
const lr2 = new ts.LinearRegressionTwo(x, m, y)
const lr3 = new ts.LinearRegressionTwo(x, m, y, 'sequential')
assert.strictEqual(typeof lr1.b0, 'number')
assert.strictEqual(typeof lr1.b1, 'number')
assert.strictEqual(typeof lr1.p, 'number')
assert.strictEqual(lr2.b2 === lr3.b2, true)
assert.strictEqual(lr2.b1 < lr3.b1, true)
assert.strictEqual(typeof lr2.p, 'number')
assert.strictEqual(typeof lr3.p, 'number')
assert.strictEqual(typeof lr2.b1p, 'number')
assert.strictEqual(typeof lr3.b1p, 'number')
assert.strictEqual(typeof lr2.b2p, 'number')
assert.strictEqual(typeof lr3.b2p, 'number')
console.timeEnd('linearRegression')
