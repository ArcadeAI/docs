/**
 * Functional programming utilities
 */

/**
 * Pipe a value through a series of functions
 * @example
 * pipe(5, double, addOne) // 11
 */
export const pipe = <T>(value: T, ...fns: Array<(arg: T) => T>): T =>
  fns.reduce((acc, fn) => fn(acc), value);

/**
 * Compose functions from right to left
 * @example
 * const doubleAndAddOne = compose(addOne, double);
 * doubleAndAddOne(5) // 11
 */
export const compose =
  <T>(...fns: Array<(arg: T) => T>) =>
  (value: T): T =>
    fns.reduceRight((acc, fn) => fn(acc), value);

/**
 * Create a function that always returns the same value
 */
export const constant =
  <T>(value: T) =>
  (): T =>
    value;

/**
 * Identity function - returns its argument unchanged
 */
export const identity = <T>(value: T): T => value;

/**
 * Safely get a property from an object
 */
export const prop =
  <T, K extends keyof T>(key: K) =>
  (obj: T): T[K] =>
    obj[key];

/**
 * Check if a value is not null or undefined
 */
export const isNotNullish = <T>(value: T | null | undefined): value is T =>
  value !== null && value !== undefined;

/**
 * Filter out null and undefined values from an array
 */
export const filterNullish = <T>(arr: readonly (T | null | undefined)[]): T[] =>
  arr.filter(isNotNullish);

/**
 * Group array items by a key function
 */
export const groupBy = <T, K extends string | number | symbol>(
  arr: readonly T[],
  keyFn: (item: T) => K
): Record<K, T[]> =>
  arr.reduce(
    (acc, item) => {
      const key = keyFn(item);
      const existing = acc[key] ?? [];
      return { ...acc, [key]: [...existing, item] };
    },
    {} as Record<K, T[]>
  );

/**
 * Create a unique array by a key function
 */
export const uniqueBy = <T, K>(
  arr: readonly T[],
  keyFn: (item: T) => K
): T[] => {
  const seen = new Set<K>();
  return arr.filter((item) => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

/**
 * Flatten an array of arrays
 */
export const flatten = <T>(arr: readonly (readonly T[])[]): T[] =>
  arr.flatMap(identity);

/**
 * Map over an object's values
 */
export const mapValues = <T, U>(
  obj: Readonly<Record<string, T>>,
  fn: (value: T, key: string) => U
): Record<string, U> =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, fn(value, key)])
  );

/**
 * Pick specified keys from an object
 */
export const pick = <T extends object, K extends keyof T>(
  obj: T,
  keys: readonly K[]
): Pick<T, K> =>
  keys.reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {} as Pick<T, K>);

/**
 * Omit specified keys from an object
 */
export const omit = <T extends object, K extends keyof T>(
  obj: T,
  keys: readonly K[]
): Omit<T, K> => {
  const keysSet = new Set<keyof T>(keys);
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keysSet.has(key as keyof T))
  ) as Omit<T, K>;
};

/**
 * Deep merge two objects
 */
export const deepMerge = <T extends object>(
  target: T,
  source: Partial<T>
): T => {
  const result = { ...target };

  for (const key in source) {
    const sourceValue = source[key];
    const targetValue = result[key];

    if (
      sourceValue !== undefined &&
      typeof sourceValue === "object" &&
      sourceValue !== null &&
      !Array.isArray(sourceValue) &&
      typeof targetValue === "object" &&
      targetValue !== null &&
      !Array.isArray(targetValue)
    ) {
      (result as Record<string, unknown>)[key] = deepMerge(
        targetValue as object,
        sourceValue as object
      );
    } else if (sourceValue !== undefined) {
      (result as Record<string, unknown>)[key] = sourceValue;
    }
  }

  return result;
};

/**
 * Normalize a string for comparison (lowercase, remove hyphens/underscores)
 */
export const normalizeId = (id: string): string =>
  id.toLowerCase().replace(/[-_]/g, "");

/**
 * Convert PascalCase to snake_case
 */
export const pascalToSnakeCase = (str: string): string =>
  str
    .replace(/([A-Z])/g, "_$1")
    .toLowerCase()
    .replace(/^_/, "");

/**
 * Convert snake_case to PascalCase
 */
export const snakeToPascalCase = (str: string): string =>
  str
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
