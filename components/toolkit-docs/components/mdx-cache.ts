export type MdxCache<T> = {
  get: (key: string) => T | undefined;
  set: (key: string, value: T) => void;
  has: (key: string) => boolean;
  size: () => number;
};

export const createMdxCache = <T>(maxSize = 100): MdxCache<T> => {
  const limit = Math.max(1, Math.floor(maxSize));
  const cache = new Map<string, T>();

  const touch = (key: string, value: T): void => {
    cache.delete(key);
    cache.set(key, value);
  };

  return {
    get: (key: string) => {
      if (!cache.has(key)) {
        return;
      }
      const value = cache.get(key) as T;
      touch(key, value);
      return value;
    },
    set: (key: string, value: T) => {
      if (cache.has(key)) {
        cache.delete(key);
      }
      cache.set(key, value);
      if (cache.size > limit) {
        const oldestKey = cache.keys().next().value;
        if (oldestKey) {
          cache.delete(oldestKey);
        }
      }
    },
    has: (key: string) => cache.has(key),
    size: () => cache.size,
  };
};
