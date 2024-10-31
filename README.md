# PsychWasm

PsychLib is a `WebAssembly` library that provides APIs for data analysis, especially for psychological and educational research. For use cases, please refer to my another project [PsychPen](https://github.com/LeafYeeXYZ/PsychPen).

The speed for `bootstrapTest` is 2-4x faster than the `TypeScript` version [PsychLib](https://github.com/LeafYeeXYZ/PsychLib) in [PsychPen](https://github.com/LeafYeeXYZ/PsychPen), as well as other basic math functions.

## Usage

### Installation

```bash
bun add psych-wasm
```

> Note: if you are using `vite`, it is recommended to add `psych-wasm` (as well as other `WebAssembly` packages) to `optimizeDeps.exclude` in `vite.config.ts` to avoid some issues.

### Import

```typescript
import { corr, mean, bootstrapTest, z2p, p2f } from 'psych-wasm'

console.log(mean([1, 2, 3, 4, 5])) // 3
console.log(corr([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])) // -1
console.log(bootstrapTest(
  [1, 2, 3, 4, 5],
  [123, 44, 765, 23, 1],
  [43, 23, 12, 4, 5],
  1000,
  0.05
)) // [xxx, xxx] (95% confidence interval of ab (mediation effect))
console.log(z2p(1.96).toFixed(3)) // 0.975
console.log(z2p(-2.58).toFixed(3)) // 0.005
console.log(p2f(0.05, 5, 5).toFixed(2)) // 7.15
```

## Development

### Install Dependencies

If you haven't installed `bun` yet, please install it from <https://bun.sh>.

```bash
bun i
```

### Write Code

Write code in `assembly/*.ts` and export functions in `assembly/index.ts`. Remember to add test cases in `tests/index.test.ts`.

### Test

```bash
bun t
```

### Build

```bash
bun b:d # debug
bun b:r # release
bun b # both
```

### Publish

Before publishing, remember to update the version in `package.json`.

```bash
bun publish
```
