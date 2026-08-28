import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

const PAGE = "app/en/build/eventing/page.mdx";
const RECEIVER = "examples/eventing/receiver.py";
const RECEIVER_BLOCK_RE = /```python filename="receiver\.py"\n([\s\S]*?)\n```/;

describe("eventing receiver example", () => {
  test("the published snippet is the executable example", () => {
    const page = readFileSync(join(process.cwd(), PAGE), "utf8");
    const published = page.match(RECEIVER_BLOCK_RE)?.[1];
    const executable = readFileSync(
      join(process.cwd(), RECEIVER),
      "utf8"
    ).trim();

    expect(published).toBe(executable);
  });

  test("executes signature, rotation, boundary, duplicate, and rollback proofs", () => {
    expect(() =>
      execFileSync("python3", ["tests/eventing_receiver_test.py"], {
        cwd: process.cwd(),
        env: { ...process.env, PYTHONPATH: process.cwd() },
        stdio: "pipe",
      })
    ).not.toThrow();
  });
});
