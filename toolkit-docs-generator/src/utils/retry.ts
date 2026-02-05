/**
 * Retry utility with exponential backoff
 */

export interface RetryOptions {
  /** Maximum number of retry attempts (default: 3) */
  readonly maxRetries?: number | undefined;
  /** Initial delay in milliseconds (default: 1000) */
  readonly initialDelayMs?: number | undefined;
  /** Maximum delay in milliseconds (default: 30000) */
  readonly maxDelayMs?: number | undefined;
  /** Multiplier for exponential backoff (default: 2) */
  readonly backoffMultiplier?: number | undefined;
  /** Whether to add jitter to delays (default: true) */
  readonly jitter?: boolean | undefined;
  /** Optional callback for logging retry attempts */
  readonly onRetry?:
    | ((attempt: number, error: Error, delayMs: number) => void)
    | undefined;
  /** Predicate to determine if an error should trigger a retry */
  readonly shouldRetry?: ((error: Error) => boolean) | undefined;
}

interface ResolvedRetryOptions {
  maxRetries: number;
  initialDelayMs: number;
  maxDelayMs: number;
  backoffMultiplier: number;
  jitter: boolean;
}

const DEFAULT_OPTIONS: ResolvedRetryOptions = {
  maxRetries: 3,
  initialDelayMs: 1000,
  maxDelayMs: 30_000,
  backoffMultiplier: 2,
  jitter: true,
};

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const resolveOptions = (options?: RetryOptions): ResolvedRetryOptions => ({
  maxRetries: options?.maxRetries ?? DEFAULT_OPTIONS.maxRetries,
  initialDelayMs: options?.initialDelayMs ?? DEFAULT_OPTIONS.initialDelayMs,
  maxDelayMs: options?.maxDelayMs ?? DEFAULT_OPTIONS.maxDelayMs,
  backoffMultiplier:
    options?.backoffMultiplier ?? DEFAULT_OPTIONS.backoffMultiplier,
  jitter: options?.jitter ?? DEFAULT_OPTIONS.jitter,
});

const calculateDelay = (
  attempt: number,
  options: ResolvedRetryOptions
): number => {
  const baseDelay =
    options.initialDelayMs * options.backoffMultiplier ** (attempt - 1);
  const cappedDelay = Math.min(baseDelay, options.maxDelayMs);

  if (options.jitter) {
    // Add random jitter between 0-25% of the delay
    const jitterAmount = cappedDelay * 0.25 * Math.random();
    return Math.floor(cappedDelay + jitterAmount);
  }

  return cappedDelay;
};

/**
 * Check if an error is likely transient and should be retried
 */
const isTransientError = (error: Error): boolean => {
  const message = error.message.toLowerCase();

  // Common transient error patterns
  const transientPatterns = [
    "timeout",
    "econnreset",
    "econnrefused",
    "enotfound",
    "socket hang up",
    "network",
    "rate limit",
    "too many requests",
    "429",
    "500",
    "502",
    "503",
    "504",
    "overloaded",
    "temporarily unavailable",
    "service unavailable",
  ];

  return transientPatterns.some((pattern) => message.includes(pattern));
};

/**
 * Execute a function with retry logic
 */
export const withRetry = async <T>(
  fn: () => Promise<T>,
  options?: RetryOptions
): Promise<T> => {
  const opts = resolveOptions(options);
  const shouldRetryFn = options?.shouldRetry ?? isTransientError;

  let lastError: Error | undefined;

  for (let attempt = 1; attempt <= opts.maxRetries + 1; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      // Check if we should retry
      const isLastAttempt = attempt > opts.maxRetries;
      const canRetry = !isLastAttempt && shouldRetryFn(lastError);

      if (!canRetry) {
        throw lastError;
      }

      const delayMs = calculateDelay(attempt, opts);
      options?.onRetry?.(attempt, lastError, delayMs);

      await sleep(delayMs);
    }
  }

  // This should never be reached, but TypeScript needs it
  throw lastError ?? new Error("Retry failed");
};

/**
 * Create a retry wrapper for a specific function
 */
export const createRetryWrapper =
  <TArgs extends unknown[], TResult>(
    fn: (...args: TArgs) => Promise<TResult>,
    options?: RetryOptions
  ): ((...args: TArgs) => Promise<TResult>) =>
  (...args: TArgs) =>
    withRetry(() => fn(...args), options);
