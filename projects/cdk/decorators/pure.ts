/**
 * 为 getter 或函数调用实现缓存功能
 * 在第一次调用时用它的计算值替换 getter 或跟踪最后一次调用参数并返回
 * 函数值，当参数严格相同时跳过计算。
 * @throws 错误，如果不是在 getter 或函数上使用
 * 注意：`this` 在此类函数/getter 中不可用，它们必须是纯的
 */
export function ceuiPure<T>(
  target: Object,
  methodName: string,
  { get, value }: TypedPropertyDescriptor<T>,
): TypedPropertyDescriptor<T> {
  if (get) {
    return {
      get(): T {
        value = get.call(this);
        Object.defineProperty(target, methodName, {
          value,
        });
        return value as any;
      },
    };
  }

  if (typeof value !== 'function') {
    throw new Error('ceuiPure can only be used with functions or getters');
  }

  const originalMethod = value;

  return {
    get(): T {
      let previousArgs: ReadonlyArray<unknown> = [];
      let previousResult: any;

      const patched = (...args: Array<unknown>) => {
        if (
          previousArgs.length === args.length &&
          args.every((arg, index) => arg === previousArgs[index])
        ) {
          return previousResult;
        }

        previousArgs = args;
        previousResult = originalMethod.apply(this, args);

        return previousResult;
      };

      Object.defineProperty(this, methodName, {
        value: patched,
      });

      return patched as any;
    },
  };
}
