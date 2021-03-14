/**
 * 检测对象是否匹配过滤字符串，不区分大小写
 * @param data 用于过滤的对象
 * @param filter 过滤字符串
 * @returns 是否匹配数据
 */
export function ceuiFilterObj<T>(data: T, filter: string): boolean {
  const dataStr = Object.keys(data)
    .reduce((currentTerm: string, key: string) => {
      return currentTerm + (data as { [key: string]: any })[key] + '◬';
    }, '')
    .toLowerCase();

  const transformedFilter = filter.trim().toLowerCase();

  return dataStr.indexOf(transformedFilter) !== -1;
}

/**
 * 过滤对象集合通过过滤字符串
 * @param data 用于过滤的对象集合
 * @param filter 过滤字符串
 * @returns 匹配后的对象集合
 */
export function ceuiFilterDataList<T>(data: T[], filter: string): T[] {
  return data.filter(obj => ceuiFilterObj<T>(obj, filter));
}