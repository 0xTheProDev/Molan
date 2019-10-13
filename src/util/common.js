// @flow
export function isUndefined(d: any): boolean {
  return typeof d === 'undefined';
}

export function isObject(d: any): boolean {
  return typeof d === 'object';
}

export function isNull(d: any): boolean {
  return isObject(d) && null === d;
}

export function isNotNull(d: any): boolean {
  return isObject(d) && null !== d;
}

export function isEmpty(d: any): boolean {
  return isUndefined(d) || isNull(d);
}

export function isString(d: any): boolean {
  return typeof d === 'string';
}

export function isArray(d: any): boolean {
  return !isUndefined(d) && Array.isArray(d);
}

export function isNumber(d: any): boolean {
  return typeof d === 'number';
}

export function isNaN(d: any): boolean {
  return isNumber(d) && Number.isNaN(d);
}

export function isBoolean(d: any): boolean {
  return typeof d === 'boolean';
}

export function isPrimitive(d: any): boolean {
  return isBoolean(d) || isString(d) || isNumber(d);
}

export function noop() {}
