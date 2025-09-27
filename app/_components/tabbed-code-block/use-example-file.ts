import { useCallback, useEffect, useState } from "react";

// Simple cache for file content scoped to this module
const fileCache = new Map<string, string>();

export function useExampleFile(
  isExpanded: boolean,
  filePath: string,
  fileName: string
) {
  const [fileContent, setFileContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!(isExpanded && filePath)) {
      setError(null);
      return;
    }

    const cached = fileCache.get(filePath);
    if (cached) {
      setFileContent(cached);
      setError(null);
      return;
    }

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(filePath, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load example (${res.status})`);
        }
        return res.text();
      })
      .then((content) => {
        fileCache.set(filePath, content);
        setFileContent(content);
        setError(null);
      })
      .catch((err) => {
        if ((err as Error).name !== "AbortError") {
          setError(`Could not load ${fileName}`);
          setFileContent("🔜 Coming soon");
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [isExpanded, filePath, fileName]);

  const retry = useCallback(() => {
    if (filePath) {
      fileCache.delete(filePath);
      setError(null);
      setFileContent("");
    }
  }, [filePath]);

  return { fileContent, loading, error, retry };
}
