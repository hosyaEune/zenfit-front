import { isObject } from "../is-object";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type anyObj = Record<string, any>;

function mergeValues(a: unknown, b: unknown) {
  if (isObject(a) && isObject(b)) {
    return deepMerge(a as anyObj, b as anyObj);
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b];
  }

  if (!!a && !Array.isArray(a) && Array.isArray(b)) {
    return [a, ...b];
  }

  if (Array.isArray(a) && !Array.isArray(b) && !b) {
    return [...a, b];
  }

  return a ?? b;
}

export function deepMerge(source: anyObj, target: anyObj): anyObj {
  const result: anyObj = {};
  const objectKeys = new Set();
  Object.keys(source).forEach(objectKeys.add, objectKeys);
  Object.keys(target).forEach(objectKeys.add, objectKeys);

  objectKeys.forEach((key) => {
    const objectKey: string = key as string;
    result[objectKey] = mergeValues(source[objectKey], target[objectKey]);
  });

  return result;
}
