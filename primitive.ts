export const isString = (v: unknown): v is string => typeof v === "string";

export const isNumber = (v: unknown): v is number => typeof v === "number";

export const isBoolean = (v: unknown): v is boolean => typeof v === "boolean";

export const isNull = (v: unknown): v is null => v === null;

export const isUndefined = (v: unknown): v is undefined => v === void 0;

export const isSymbol = (v: unknown): v is symbol => typeof v === "symbol";

export const isBigInt = (v: unknown): v is bigint => typeof v === "bigint";
