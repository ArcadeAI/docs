import fg from 'fast-glob';
import { scanURLs, validateFiles } from 'next-validate-link';
import { expect, test } from 'vitest';

test('check for broken links', async () => {
  const scanned = await scanURLs({
    preset: 'next',
  });

  const found = await validateFiles(await fg('app/**/*.{md,mdx}'), {
    scanned,
  });

  for (const error of found) {
    // biome-ignore lint/suspicious/noConsole: keep error visibility in test output
    console.error(`Broken link: ${JSON.stringify(error)}`);
  }

  expect(found.length).toBe(0);
}, 30_000);
