import { realpath, rm } from "fs/promises";
import { basename, isAbsolute, resolve, sep } from "path";

type ResolveOptions = {
  repoRoot?: string;
  homeDir?: string;
};

export const resolveRepositoryRoot = (cwd: string = process.cwd()): string =>
  basename(cwd) === "toolkit-docs-generator"
    ? resolve(cwd, "..")
    : resolve(cwd);

export const resolveDefaultOutputDir = (
  cwd: string = process.cwd()
): string => {
  const repoRoot = resolveRepositoryRoot(cwd);
  const generatorRoot =
    basename(cwd) === "toolkit-docs-generator"
      ? cwd
      : resolve(repoRoot, "toolkit-docs-generator");
  return resolve(generatorRoot, "data", "toolkits");
};

const isSubpath = (parent: string, child: string): boolean => {
  const normalizedParent = parent.endsWith(sep) ? parent : `${parent}${sep}`;
  return child === parent || child.startsWith(normalizedParent);
};

export const resolveSafeOutputDir = async (
  outputDir: string,
  options: ResolveOptions = {}
): Promise<string> => {
  const resolvedRepoRoot = resolve(
    options.repoRoot ?? resolveRepositoryRoot(process.cwd())
  );
  const repoRoot = await realpath(resolvedRepoRoot).catch(
    () => resolvedRepoRoot
  );
  const resolvedGeneratorRoot = resolve(repoRoot, "toolkit-docs-generator");
  const generatorRoot = await realpath(resolvedGeneratorRoot).catch(
    () => resolvedGeneratorRoot
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

  const containsRepoRoot = isSubpath(realDir, repoRoot);
  const containsGeneratorRoot = isSubpath(realDir, generatorRoot);
  const containsHomeDir = homeDir ? isSubpath(realDir, homeDir) : false;
  if (containsRepoRoot || containsGeneratorRoot || containsHomeDir) {
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

export const clearSafeOutputDir = async (
  outputDir: string,
  options: ResolveOptions = {}
): Promise<string> => {
  const safeDir = await resolveSafeOutputDir(outputDir, options);
  await rm(safeDir, { recursive: true, force: true });
  return safeDir;
};
