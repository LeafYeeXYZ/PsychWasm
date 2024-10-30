# PsychWasm

PsychLib is a `WebAssembly` library that provides APIs for data analysis, especially for psychological and educational research. For use cases, please refer to my another project [PsychPen](https://github.com/LeafYeeXYZ/PsychPen).

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

### Test

```bash
bun run test
```

### Build

```bash
bun run asbuild
```