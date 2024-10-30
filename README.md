# PsychWasm

PsychLib is a `WebAssembly` library that provides APIs for data analysis, especially for psychological and educational research. For use cases, please refer to my another project [PsychPen](https://github.com/LeafYeeXYZ/PsychPen).

The speed for `bootstrapTest` is 2-2.5x faster than the `TypeScript` version `PsychLib` in [PsychPen](https://github.com/LeafYeeXYZ/PsychPen), as well as other basic math functions.

## Usage

### Installation

```bash
bun add psych-wasm
```

### Import

```typescript
import { corr, mean } from 'psych-wasm'

console.log(mean([1, 2, 3, 4, 5])) // 3
console.log(corr([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])) // -1
```

## Development

### Install Dependencies

If you haven't installed `bun` yet, please install it from <https://bun.sh>.

```bash
bun install
```

### Write Code

Write code in `assembly/*.ts` and export functions in `assembly/index.ts`. Remember to add test cases in `tests/index.ts`.

### Test

```bash
bun run test
```

### Build

```bash
bun run asbuild
```

### Publish

Before publishing, remember to update the version in `package.json`.

```bash
bun publish
```