/**
 * Paginated reads for Engine public catalog endpoints.
 *
 * Upstream defaults `limit` to 100, which silently truncates large catalogs.
 * Loop on `total_count` and refuse short reads so a partial fetch cannot look
 * like "toolkits were deleted".
 */
export const fetchAllPages = async <T>(
  url: string,
  fetchFn: typeof fetch = fetch,
  pageSize = 100
): Promise<T[]> => {
  const items: T[] = [];
  let total = Number.POSITIVE_INFINITY;

  while (items.length < total) {
    const separator = url.includes("?") ? "&" : "?";
    const paged = `${url}${separator}limit=${pageSize}&offset=${items.length}`;
    const response = await fetchFn(paged);

    if (!response.ok) {
      throw new Error(
        `Public catalog API error ${response.status} from ${paged}`
      );
    }

    const body = (await response.json()) as {
      items?: T[];
      total_count?: number;
    };
    const page = body.items ?? [];
    total = body.total_count ?? page.length;

    if (page.length === 0) {
      break;
    }

    items.push(...page);
  }

  if (items.length < total) {
    throw new Error(
      `Public catalog read ${items.length} of ${total} from ${url} — refusing a partial catalog`
    );
  }

  return items;
};
