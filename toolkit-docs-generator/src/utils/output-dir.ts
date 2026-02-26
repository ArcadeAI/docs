import { realpath } from "fs/promises";
import { isAbsolute, resolve, sep } from "path";

type ResolveOptions = {
  repoRoot?: string;
  homeDir?: string;
};

const isSubpath = (parent: string, child: string): boolean => {
  const normalizedParent = parent.endsWith(sep) ? parent : `${parent}${sep}`;
  return child === parent || child.startsWith(normalizedParent);
};

export const resolveSafeOutputDir = async (
  outputDir: string,
  options: ResolveOptions = {}
): Promise<string> => {
  const resolvedRepoRoot = resolve(options.repoRoot ?? process.cwd());
  const repoRoot = await realpath(resolvedRepoRoot).catch(
    () => resolvedRepoRoot
  );
  const resolvedHomeDir = options.homeDir
    ? resolve(options.homeDir)
    : process.env.HOME
      ? resolve(process.env.HOME)
      : null;
  const homeDir = resolvedHomeDir
    ? await realpath(resolvedHomeDir).catch(() => resolvedHomeDir)
    : null;
  const resolvedDir = resolve(outputDir);
  const realDir = await realpath(resolvedDir).catch(() => resolvedDir);

  const forbidden = new Set<string>(["/", repoRoot]);
  if (homeDir) {
    forbidden.add(homeDir);
  }

  if (forbidden.has(realDir)) {
    throw new Error(`Refusing to delete unsafe output directory: ${realDir}`);
  }

  // If the output dir was provided as a relative path, keep it inside repo root.
  if (!(isAbsolute(outputDir) || isSubpath(repoRoot, realDir))) {
    throw new Error(
      `Refusing to delete output directory outside repo root: ${realDir}`
    );
  }

  return realDir;
};
