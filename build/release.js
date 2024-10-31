async function instantiate(module, imports = {}) {
  const adaptedImports = {
    env: Object.assign(Object.create(globalThis), imports.env || {}, {
      abort(message, fileName, lineNumber, columnNumber) {
        // ~lib/builtins/abort(~lib/string/String | null?, ~lib/string/String | null?, u32?, u32?) => void
        message = __liftString(message >>> 0);
        fileName = __liftString(fileName >>> 0);
        lineNumber = lineNumber >>> 0;
        columnNumber = columnNumber >>> 0;
        (() => {
          // @external.js
          throw Error(`${message} in ${fileName}:${lineNumber}:${columnNumber}`);
        })();
      },
      seed() {
        // ~lib/builtins/seed() => f64
        return (() => {
          // @external.js
          return Date.now() * Math.random();
        })();
      },
    }),
  };
  const { exports } = await WebAssembly.instantiate(module, adaptedImports);
  const memory = exports.memory || imports.env.memory;
  const adaptedExports = Object.setPrototypeOf({
    sum(data) {
      // assembly/base/sum(~lib/array/Array<f64>) => f64
      data = __lowerArray(__setF64, 4, 3, data) || __notnull();
      return exports.sum(data);
    },
    mean(data) {
      // assembly/base/mean(~lib/array/Array<f64>) => f64
      data = __lowerArray(__setF64, 4, 3, data) || __notnull();
      return exports.mean(data);
    },
    ss(data) {
      // assembly/base/ss(~lib/array/Array<f64>) => f64
      data = __lowerArray(__setF64, 4, 3, data) || __notnull();
      return exports.ss(data);
    },
    _ss(x, y) {
      // assembly/base/_ss(~lib/array/Array<f64>, ~lib/array/Array<f64>) => f64
      x = __retain(__lowerArray(__setF64, 4, 3, x) || __notnull());
      y = __lowerArray(__setF64, 4, 3, y) || __notnull();
      try {
        return exports._ss(x, y);
      } finally {
        __release(x);
      }
    },
    sp(x, y) {
      // assembly/base/sp(~lib/array/Array<f64>, ~lib/array/Array<f64>) => f64
      x = __retain(__lowerArray(__setF64, 4, 3, x) || __notnull());
      y = __lowerArray(__setF64, 4, 3, y) || __notnull();
      try {
        return exports.sp(x, y);
      } finally {
        __release(x);
      }
    },
    vari(data) {
      // assembly/base/vari(~lib/array/Array<f64>) => f64
      data = __lowerArray(__setF64, 4, 3, data) || __notnull();
      return exports.vari(data);
    },
    std(data) {
      // assembly/base/std(~lib/array/Array<f64>) => f64
      data = __lowerArray(__setF64, 4, 3, data) || __notnull();
      return exports.std(data);
    },
    min(data) {
      // assembly/base/min(~lib/array/Array<f64>) => f64
      data = __lowerArray(__setF64, 4, 3, data) || __notnull();
      return exports.min(data);
    },
    max(data) {
      // assembly/base/max(~lib/array/Array<f64>) => f64
      data = __lowerArray(__setF64, 4, 3, data) || __notnull();
      return exports.max(data);
    },
    sort(data, ascending) {
      // assembly/base/sort(~lib/array/Array<f64>, bool?) => ~lib/array/Array<f64>
      data = __lowerArray(__setF64, 4, 3, data) || __notnull();
      ascending = ascending ? 1 : 0;
      exports.__setArgumentsLength(arguments.length);
      return __liftArray(__getF64, 3, exports.sort(data, ascending) >>> 0);
    },
    median(data) {
      // assembly/base/median(~lib/array/Array<f64>) => f64
      data = __lowerArray(__setF64, 4, 3, data) || __notnull();
      return exports.median(data);
    },
    quantile(data, q) {
      // assembly/base/quantile(~lib/array/Array<f64>, f64) => f64
      data = __lowerArray(__setF64, 4, 3, data) || __notnull();
      return exports.quantile(data, q);
    },
    corr(x, y) {
      // assembly/base/corr(~lib/array/Array<f64>, ~lib/array/Array<f64>) => f64
      x = __retain(__lowerArray(__setF64, 4, 3, x) || __notnull());
      y = __lowerArray(__setF64, 4, 3, y) || __notnull();
      try {
        return exports.corr(x, y);
      } finally {
        __release(x);
      }
    },
    cov(x, y) {
      // assembly/base/cov(~lib/array/Array<f64>, ~lib/array/Array<f64>) => f64
      x = __retain(__lowerArray(__setF64, 4, 3, x) || __notnull());
      y = __lowerArray(__setF64, 4, 3, y) || __notnull();
      try {
        return exports.cov(x, y);
      } finally {
        __release(x);
      }
    },
    bootstrapTest(x, m, y, B, a) {
      // assembly/mediation/bootstrap/bootstrapTest(~lib/array/Array<f64>, ~lib/array/Array<f64>, ~lib/array/Array<f64>, i32, f64) => ~lib/array/Array<f64>
      x = __retain(__lowerArray(__setF64, 4, 3, x) || __notnull());
      m = __retain(__lowerArray(__setF64, 4, 3, m) || __notnull());
      y = __lowerArray(__setF64, 4, 3, y) || __notnull();
      try {
        return __liftArray(__getF64, 3, exports.bootstrapTest(x, m, y, B, a) >>> 0);
      } finally {
        __release(x);
        __release(m);
      }
    },
    f2p(f, df1, df2, twoside) {
      // assembly/distribution/f/f2p(f64, f64, f64, bool?) => f64
      twoside = twoside ? 1 : 0;
      exports.__setArgumentsLength(arguments.length);
      return exports.f2p(f, df1, df2, twoside);
    },
    p2f(p, df1, df2, twoside) {
      // assembly/distribution/f/p2f(f64, f64, f64, bool?) => f64
      twoside = twoside ? 1 : 0;
      exports.__setArgumentsLength(arguments.length);
      return exports.p2f(p, df1, df2, twoside);
    },
    t2p(t, df, twoside) {
      // assembly/distribution/t/t2p(f64, f64, bool?) => f64
      twoside = twoside ? 1 : 0;
      exports.__setArgumentsLength(arguments.length);
      return exports.t2p(t, df, twoside);
    },
    p2t(p, df, twoside) {
      // assembly/distribution/t/p2t(f64, f64, bool?) => f64
      twoside = twoside ? 1 : 0;
      exports.__setArgumentsLength(arguments.length);
      return exports.p2t(p, df, twoside);
    },
  }, exports);
  function __liftString(pointer) {
    if (!pointer) return null;
    const
      end = pointer + new Uint32Array(memory.buffer)[pointer - 4 >>> 2] >>> 1,
      memoryU16 = new Uint16Array(memory.buffer);
    let
      start = pointer >>> 1,
      string = "";
    while (end - start > 1024) string += String.fromCharCode(...memoryU16.subarray(start, start += 1024));
    return string + String.fromCharCode(...memoryU16.subarray(start, end));
  }
  function __liftArray(liftElement, align, pointer) {
    if (!pointer) return null;
    const
      dataStart = __getU32(pointer + 4),
      length = __dataview.getUint32(pointer + 12, true),
      values = new Array(length);
    for (let i = 0; i < length; ++i) values[i] = liftElement(dataStart + (i << align >>> 0));
    return values;
  }
  function __lowerArray(lowerElement, id, align, values) {
    if (values == null) return 0;
    const
      length = values.length,
      buffer = exports.__pin(exports.__new(length << align, 1)) >>> 0,
      header = exports.__pin(exports.__new(16, id)) >>> 0;
    __setU32(header + 0, buffer);
    __dataview.setUint32(header + 4, buffer, true);
    __dataview.setUint32(header + 8, length << align, true);
    __dataview.setUint32(header + 12, length, true);
    for (let i = 0; i < length; ++i) lowerElement(buffer + (i << align >>> 0), values[i]);
    exports.__unpin(buffer);
    exports.__unpin(header);
    return header;
  }
  const refcounts = new Map();
  function __retain(pointer) {
    if (pointer) {
      const refcount = refcounts.get(pointer);
      if (refcount) refcounts.set(pointer, refcount + 1);
      else refcounts.set(exports.__pin(pointer), 1);
    }
    return pointer;
  }
  function __release(pointer) {
    if (pointer) {
      const refcount = refcounts.get(pointer);
      if (refcount === 1) exports.__unpin(pointer), refcounts.delete(pointer);
      else if (refcount) refcounts.set(pointer, refcount - 1);
      else throw Error(`invalid refcount '${refcount}' for reference '${pointer}'`);
    }
  }
  function __notnull() {
    throw TypeError("value must not be null");
  }
  let __dataview = new DataView(memory.buffer);
  function __setU32(pointer, value) {
    try {
      __dataview.setUint32(pointer, value, true);
    } catch {
      __dataview = new DataView(memory.buffer);
      __dataview.setUint32(pointer, value, true);
    }
  }
  function __setF64(pointer, value) {
    try {
      __dataview.setFloat64(pointer, value, true);
    } catch {
      __dataview = new DataView(memory.buffer);
      __dataview.setFloat64(pointer, value, true);
    }
  }
  function __getU32(pointer) {
    try {
      return __dataview.getUint32(pointer, true);
    } catch {
      __dataview = new DataView(memory.buffer);
      return __dataview.getUint32(pointer, true);
    }
  }
  function __getF64(pointer) {
    try {
      return __dataview.getFloat64(pointer, true);
    } catch {
      __dataview = new DataView(memory.buffer);
      return __dataview.getFloat64(pointer, true);
    }
  }
  return adaptedExports;
}
export const {
  memory,
  sum,
  mean,
  ss,
  _ss,
  sp,
  vari,
  std,
  min,
  max,
  sort,
  median,
  quantile,
  corr,
  cov,
  fixed,
  bootstrapTest,
  f2p,
  p2f,
  t2p,
  p2t,
  p2z,
  z2p,
} = await (async url => instantiate(
  await (async () => {
    const isNodeOrBun = typeof process != "undefined" && process.versions != null && (process.versions.node != null || process.versions.bun != null);
    if (isNodeOrBun) { return globalThis.WebAssembly.compile(await (await import("node:fs/promises")).readFile(url)); }
    else { return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(url)); }
  })(), {
  }
))(new URL("release.wasm", import.meta.url));
