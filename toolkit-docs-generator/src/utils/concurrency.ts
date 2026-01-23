/**
 * Concurrency utilities for parallel processing with rate limiting
 */

/**
 * A simple concurrency limiter that allows running async tasks with a maximum
 * number of concurrent executions.
 */
export class ConcurrencyLimiter {
  private readonly maxConcurrency: number;
  private running = 0;
  private queue: Array<() => void> = [];

  constructor(maxConcurrency: number) {
    this.maxConcurrency = Math.max(1, maxConcurrency);
  }

  /**
   * Run a task with concurrency limiting
   */
  async run<T>(task: () => Promise<T>): Promise<T> {
    await this.acquire();
    try {
      return await task();
    } finally {
      this.release();
    }
  }

  private async acquire(): Promise<void> {
    if (this.running < this.maxConcurrency) {
      this.running++;
      return;
    }

    return new Promise<void>((resolve) => {
      this.queue.push(resolve);
    });
  }

  private release(): void {
    this.running--;
    const next = this.queue.shift();
    if (next) {
      this.running++;
      next();
    }
  }
}

/**
 * Run tasks in parallel with a concurrency limit
 *
 * @param items - Items to process
 * @param fn - Async function to apply to each item
 * @param concurrency - Maximum concurrent executions (default: 5)
 * @returns Array of results in the same order as input
 */
export const mapWithConcurrency = async <T, R>(
  items: readonly T[],
  fn: (item: T, index: number) => Promise<R>,
  concurrency = 5
): Promise<R[]> => {
  const limiter = new ConcurrencyLimiter(concurrency);
  return Promise.all(
    items.map((item, index) => limiter.run(() => fn(item, index)))
  );
};

/**
 * Create a concurrency limiter
 */
export const createConcurrencyLimiter = (
  maxConcurrency: number
): ConcurrencyLimiter => new ConcurrencyLimiter(maxConcurrency);
