import { describe, expect, it, vi } from "vitest";
import { createRetryWrapper, withRetry } from "../../src/utils/retry.js";

describe("withRetry", () => {
  it("should succeed on first attempt if no error", async () => {
    const fn = vi.fn().mockResolvedValue("success");

    const result = await withRetry(fn);

    expect(result).toBe("success");
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should retry on transient error and succeed", async () => {
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new Error("timeout"))
      .mockResolvedValue("success");

    const result = await withRetry(fn, { maxRetries: 3, initialDelayMs: 10 });

    expect(result).toBe("success");
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it("should exhaust retries and throw last error", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("timeout"));

    await expect(
      withRetry(fn, { maxRetries: 2, initialDelayMs: 10 })
    ).rejects.toThrow("timeout");

    expect(fn).toHaveBeenCalledTimes(3); // Initial + 2 retries
  });

  it("should not retry non-transient errors", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("invalid input"));

    await expect(
      withRetry(fn, { maxRetries: 3, initialDelayMs: 10 })
    ).rejects.toThrow("invalid input");

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should call onRetry callback on each retry", async () => {
    const onRetry = vi.fn();
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new Error("timeout"))
      .mockRejectedValueOnce(new Error("timeout 2"))
      .mockResolvedValue("success");

    await withRetry(fn, { maxRetries: 3, initialDelayMs: 10, onRetry });

    expect(onRetry).toHaveBeenCalledTimes(2);
    expect(onRetry).toHaveBeenNthCalledWith(
      1,
      1,
      expect.any(Error),
      expect.any(Number)
    );
    expect(onRetry).toHaveBeenNthCalledWith(
      2,
      2,
      expect.any(Error),
      expect.any(Number)
    );
  });

  it("should use custom shouldRetry predicate", async () => {
    const shouldRetry = (error: Error) => error.message === "retry-me";
    const fn = vi.fn().mockRejectedValue(new Error("dont-retry"));

    await expect(
      withRetry(fn, { maxRetries: 3, initialDelayMs: 10, shouldRetry })
    ).rejects.toThrow("dont-retry");

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should respect maxDelayMs cap", async () => {
    const onRetry = vi.fn();
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new Error("rate limit"))
      .mockResolvedValue("success");

    await withRetry(fn, {
      maxRetries: 3,
      initialDelayMs: 100,
      maxDelayMs: 50, // Cap at 50ms
      backoffMultiplier: 10,
      jitter: false,
      onRetry,
    });

    expect(onRetry).toHaveBeenCalledWith(1, expect.any(Error), 50);
  });

  it("should detect common transient error patterns", async () => {
    const transientErrors = [
      "timeout occurred",
      "ECONNRESET error",
      "429 rate limit exceeded",
      "503 service unavailable",
      "network error",
    ];

    for (const errorMsg of transientErrors) {
      const fn = vi
        .fn()
        .mockRejectedValueOnce(new Error(errorMsg))
        .mockResolvedValue("success");

      const result = await withRetry(fn, { maxRetries: 1, initialDelayMs: 10 });
      expect(result).toBe("success");
      expect(fn).toHaveBeenCalledTimes(2);
    }
  });
});

describe("createRetryWrapper", () => {
  it("should create a wrapped function with retry logic", async () => {
    const fn = vi.fn().mockResolvedValue("wrapped result");
    const wrapped = createRetryWrapper(fn, { maxRetries: 2 });

    const result = await wrapped();

    expect(result).toBe("wrapped result");
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should pass arguments through to wrapped function", async () => {
    const fn = vi.fn().mockResolvedValue("result");
    const wrapped = createRetryWrapper(fn, { maxRetries: 2 });

    await wrapped("arg1", 123);

    expect(fn).toHaveBeenCalledWith("arg1", 123);
  });

  it("should retry wrapped function on transient errors", async () => {
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new Error("timeout"))
      .mockResolvedValue("success");
    const wrapped = createRetryWrapper(fn, {
      maxRetries: 2,
      initialDelayMs: 10,
    });

    const result = await wrapped();

    expect(result).toBe("success");
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
