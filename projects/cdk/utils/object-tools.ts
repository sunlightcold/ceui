import { fallbackValue } from './fallback-value';

/**
 * 安全的提取对象的值
 * @param target 目标对象
 * @param extractor 提取器
 * @param defaultFieldValue 备用值
 */
export function getSafeObjProp<T, U = any>(
  target: U,
  extractor: (obj: U) => T | undefined | null,
  defaultFieldValue: T
) {
  return fallbackValue(extractor(target || {} as U), defaultFieldValue);
}
