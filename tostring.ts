const toString = Object.prototype.toString;

export const detectType = (v: unknown): string => toString.call(v).slice(8, -1);

export const isObject = (v: unknown): v is object => detectType(v) === "Object";

export const isFunction = (v: unknown): v is object =>
  detectType(v) === "Function";

export const isArray = (v: unknown): v is Array<unknown> => Array.isArray(v);

export const isDate = (v: unknown): v is Date => detectType(v) === "Date";

export const isRegExp = (v: unknown): v is RegExp => detectType(v) === "RegExp";

export const isMap = (v: unknown): v is Map<unknown, unknown> =>
  detectType(v) === "Map";

export const isSet = (v: unknown): v is Set<unknown> => detectType(v) === "Set";

export const isWeakMap = (v: unknown): v is WeakMap<any, unknown> =>
  detectType(v) === "WeakMap";

export const isWeakSet = (v: unknown): v is WeakSet<any> =>
  detectType(v) === "WeakSet";

export const isPromise = (v: unknown): v is Promise<unknown> =>
  detectType(v) === "Promise";

export const isGenerator = (
  v: unknown,
): v is Generator<unknown, unknown, unknown> => detectType(v) === "Generator";

export const isGeneratorFunction = (v: unknown): v is GeneratorFunction =>
  detectType(v) === "GeneratorFunction";

export const isArrayBuffer = (v: unknown): v is ArrayBuffer =>
  detectType(v) === "ArrayBuffer";

export const isSharedArrayBuffer = (v: unknown): v is SharedArrayBuffer =>
  detectType(v) === "SharedArrayBuffer";

export const isDataView = (v: unknown): v is DataView =>
  detectType(v) === "DataView";

export const isFloat32Array = (v: unknown): v is Float32Array =>
  detectType(v) === "Float32Array";

export const isFloat64Array = (v: unknown): v is Float64Array =>
  detectType(v) === "Float64Array";

export const isInt8Array = (v: unknown): v is Int8Array =>
  detectType(v) === "Int8Array";

export const isInt16Array = (v: unknown): v is Int16Array =>
  detectType(v) === "Int16Array";

export const isInt32Array = (v: unknown): v is Int32Array =>
  detectType(v) === "Int32Array";

export const isUint8Array = (v: unknown): v is Uint8Array =>
  detectType(v) === "Uint8Array";

export const isUint8ClampedArray = (v: unknown): v is Uint8ClampedArray =>
  detectType(v) === "Uint8ClampedArray";

export const isUint16Array = (v: unknown): v is Uint16Array =>
  detectType(v) === "Uint16Array";

export const isUint32Array = (v: unknown): v is Uint32Array =>
  detectType(v) === "Uint32Array";

export const isError = (v: unknown): v is Error => detectType(v) === "Error";

export const isEvalError = (v: unknown): v is EvalError =>
  detectType(v) === "EvalError";

export const isRangeError = (v: unknown): v is RangeError =>
  detectType(v) === "RangeError";

export const isReferenceError = (v: unknown): v is ReferenceError =>
  detectType(v) === "ReferenceError";

export const isSyntaxError = (v: unknown): v is SyntaxError =>
  detectType(v) === "SyntaxError";

export const isTypeError = (v: unknown): v is TypeError =>
  detectType(v) === "TypeError";

export const isURIError = (v: unknown): v is URIError =>
  detectType(v) === "URIError";

export const isObjectLike = (v: unknown): v is Object =>
  v !== null && typeof v === "object";
