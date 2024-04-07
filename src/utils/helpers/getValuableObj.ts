type Valuable<T> = {
  [K in keyof T as T[K] extends null | undefined ? never : K]: T[K];
};
const getValuableObj = <T extends object, V = Valuable<T>>(obj: T): V => {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([, v]) =>
        !(
          (typeof v === 'string' && !v.length) ||
          v === null ||
          typeof v === 'undefined'
        ),
    ),
  ) as V;
};

export { getValuableObj };
