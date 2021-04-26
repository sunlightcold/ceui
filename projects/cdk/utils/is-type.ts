/**
 * 判断值是否为 null 或 undefined
 */
export function isEmpty<T>(value?: T): value is T {
  return value === null || value === undefined;
}

/**
 * 判断值存在，不等于 null，undefined
 */
export function isPresent<T>(value?: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/**
 * 判断值为字符串类型
 */
export function isString(value: any): value is string {
  return typeof value === 'string';
}

/**
 * 判断值不为空数组，length > 0
 */
export function isLenArray<T = any>(value: any): value is T[] {
  return Array.isArray(value) && value.length > 0;
}

export function isEmpArray<T>(value: any): value is T[] {
  return Array.isArray(value) && value.length === 0;
}
