import assert from 'node:assert'
import * as wasm from '../build/debug.js'

const PERCISION = 12

console.time('total')

// Base
console.time('base')
assert.strictEqual(wasm.sum([1, 2, 3]).toFixed(PERCISION), Number(6).toFixed(PERCISION))
assert.strictEqual(wasm.mean([1, 2, 3]).toFixed(PERCISION), Number(2).toFixed(PERCISION))
assert.strictEqual(wasm.ss([1, 2, 3]).toFixed(PERCISION), Number(2).toFixed(PERCISION))
assert.strictEqual(wasm.vari([1, 2, 3]).toFixed(PERCISION), Number(2 / 3).toFixed(PERCISION))
assert.strictEqual(wasm.std([1, 2, 3]).toFixed(PERCISION), Number(Math.sqrt(2 / 3)).toFixed(PERCISION))
assert.strictEqual(wasm.min([1, 2, 3]).toFixed(PERCISION), Number(1).toFixed(PERCISION))
assert.strictEqual(wasm.max([1, 2, 3]).toFixed(PERCISION), Number(3).toFixed(PERCISION))
assert.strictEqual(wasm.median([1.4, 1.1, 2.1, 3.6, 3.4, 3.2]).toFixed(PERCISION), Number(2.65).toFixed(PERCISION))
assert.strictEqual(wasm.quantile([1, 2, 3], 0.5).toFixed(PERCISION), Number(2).toFixed(PERCISION))
assert.strictEqual(wasm.quantile([1, 2, 3, 4], 0.1).toFixed(PERCISION), Number(1.3).toFixed(PERCISION))
assert.strictEqual(wasm.quantile([1, 1, 1, 2], 0.25).toFixed(PERCISION), Number(1).toFixed(PERCISION))
assert.strictEqual(wasm.sp([1, 2, 3], [4, 6, 8]).toFixed(PERCISION), Number(4).toFixed(PERCISION))
assert.strictEqual(wasm.corr([1, 2, 3], [4, 6, 8]).toFixed(PERCISION), Number(1).toFixed(PERCISION))
assert.strictEqual(wasm.cov([1, 2, 3], [4, 6, 8]).toFixed(PERCISION), Number(4 / 3).toFixed(PERCISION))
console.timeEnd('base')

// Bootstrap
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const m = [34, 56, 78, 90, 124, 145, 167, 189, 200, 234]
const y = [2, 6, 31, 66, 100, 134, 167, 200, 234, 267]
const B = 1000
const a = 0.05
console.time('bootstrap')
const bs = wasm.bootstrapTest(x, m, y, B, a)
assert.strictEqual(bs.length, 2)
assert.strictEqual(typeof bs[0], 'number')
assert.strictEqual(typeof bs[1], 'number')
console.timeEnd('bootstrap')

console.timeEnd('total')
