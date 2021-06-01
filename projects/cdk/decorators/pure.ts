export function ceuiPure<T>(
  _target: Object,
  propertyKey: string,
  {get, enumerable, value}: TypedPropertyDescriptor<T>,
): TypedPropertyDescriptor<T> {
  if (get) {
      return {
          enumerable,
          get(): T {
              value = get.call(this);

              Object.defineProperty(this, propertyKey, {enumerable, value});

              return value;
          },
      };
  }

  if (typeof value !== 'function') {
      throw new Error('tuiPure can only be used with functions or getters');
  }

  const original = value;

  return {
      enumerable,
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
              previousResult = original.apply(this, args);

              return previousResult;
          };

          Object.defineProperty(this, propertyKey, {
              value: patched,
          });

          return patched as any;
      },
  };
}
