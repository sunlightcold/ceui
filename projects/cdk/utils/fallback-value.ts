import { isPresent } from './is-type';

/**
 * 当值等于 null 或 undefined 时，返回默认值
 * @param value 判断的值
 * @param fallback 备用的值
 */
export function fallbackValue<T>(value: T | null | undefined, fallback: T): T {
  return isPresent(value) ? value : fallback;
}
