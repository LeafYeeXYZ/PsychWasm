# Introduction

**PsychWasm** is a JavaScript/TypeScript library that provides APIs for mathematical and statistical calculations, especially for psychological and educational research. For use cases, please refer to my another project [PsychPen](https://github.com/LeafYeeXYZ/PsychPen).

`psych-wasm/as` provides basic functions directly using WebAssembly, while `psych-wasm/ts` provides advanced functions using WebAssembly and TypeScript.

**For full documentation, see [here](https://psych-wasm.pages.dev/).**

- [Introduction](#introduction)
- [Usage](#usage)
- [Development](#development)

# Usage

Firstly, install `psych-wasm` via `npm`、`yarn`、`pnpm`、`deno` or `bun`.

```bash
bun add psych-wasm
```

Note that if you are using `vite`, it is recommended to add `psych-wasm` (as well as other `WebAssembly` packages) to `optimizeDeps.exclude` in `vite.config.ts` to avoid some issues.

Then, you can import functions from `psych-wasm/as` (for basic functions directly using WebAssembly) or `psych-wasm/ts` (for advanced functions using TypeScript backed by WebAssembly). All functions can also be imported from `psych-wasm` directly.

```typescript
// Basic functions directly using WebAssembly
import { mean, bootstrapTest, z2p, p2f } from 'psych-wasm/as'

console.log(mean([1, 2, 3, 4, 5])) // 3
console.log(bootstrapTest(
  [1, 2, 3, 4, 5],
  [123, 44, 765, 23, 1],
  [43, 23, 12, 4, 5],
  1000,
  0.05
)) // [xxx, xxx]: 95% confidence interval of ab (mediation effect)
console.log(z2p(1.96).toFixed(3)) // 0.975
console.log(z2p(-2.58).toFixed(3)) // 0.005
console.log(p2f(0.05, 5, 5).toFixed(2)) // 7.15
```

```typescript
// Advanced functions using WebAssembly and TypeScript
import { LinearRegressionOne } from 'psych-wasm/ts'

const lr = new LinearRegressionOne([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])
console.log(lr.b1, lr.F, lr.p) // -1, Infinity, 0
```

# Development

If you haven't installed `bun` yet, please install it from <https://bun.sh> or simply run `npm i -g bun`.

Then, clone this repository and install dependencies.

```bash
git clone https://github.com/LeafYeeXYZ/PsychWasm.git
cd PsychWasm
bun i
```

Now you can write `AssemblyScript` code in `assembly/*.ts` and export functions in `assembly/index.ts`, and write `TypeScript` code in `lib/*.ts` and export functions in `lib/index.ts`. 

After writing the code, remember to add test cases in `tests/index.test.ts`. You can run the test cases using the following command.

```bash
bun t
```

Run `bun t` will also generate the release build of the AssemblyScript code. You can also use the following commands to build the AssemblyScript code.

```bash
bun b:d # debug
bun b:r # release
bun b # both
```

PsychWasm does not compile TypeScript code into JavaScript, which means you need to use bundlers like `vite` or runtimes like `deno` to run the TypeScript code.

Now you can publish the package by the following command. Before publishing, remember to update the version in `package.json`.

```bash
bun p
```
