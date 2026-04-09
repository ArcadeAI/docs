# Handoff: majority-version coherence filter

## Problem

The Engine `/v1/tool_metadata` endpoint returns tools at **mixed versions** for the same toolkit. For example, the Github toolkit currently ships 35+ tools at `@3.1.3` alongside two notification tools (`GetNotificationSummary`, `ListNotifications`) at `@2.0.1`. Those older-version tools were removed from the latest toolkit release but Engine still serves them under the older version tag.

The docs generator trusts the API response as-is. It groups tools by toolkit ID with no version filtering, so the stale tools survive through the entire pipeline: diff, merge, JSON output, sidebar nav, and rendered pages.

The `--skip-unchanged` flow compounds this: it compares the current API response against the previous output and (correctly) sees no change — because the API keeps returning those same stale tools run after run. The toolkit is classified as "unchanged" and skipped, preserving the old output indefinitely.

## Root cause trace

```
Engine API (/v1/tool_metadata)
  └── Returns Github.GetNotificationSummary@2.0.1 + Github.CreateIssue@3.1.3 + ...
       │
       ▼
CombinedToolkitDataSource.fetchAllToolkitsData()   ← toolkit-data-source.ts:147
  └── Groups by qualifiedName.split(".")[0]
  └── NO version filter
       │
       ▼
detectChanges()   ← toolkit-diff.ts:385
  └── Sees stale tools as "still present" (they ARE in the API response)
  └── Toolkit classified as "unchanged"
       │
       ▼
mergeToolkit()   ← data-merger.ts:728
  └── Writes ALL tools from the tools array (including stale @2.0.1 ones)
       │
       ▼
github.json   ← data/toolkits/github.json
  └── Contains mixed-version tools
       │
       ▼
Docs site renders them all
```

## Solution: majority-version coherence filter

After grouping tools by toolkit ID in `fetchAllToolkitsData()`, compute the **majority version** for each toolkit (the version shared by the most tools), then keep only tools at that version. This drops stale tools from older versions before they reach the diff or merger.

Apply the same filter in `fetchToolkitData()` when no explicit `version` is passed, so both single-toolkit and all-toolkits paths behave consistently.

## Implementation plan

### Step 1: Add `filterToolsByMajorityVersion` utility

**New file:** `toolkit-docs-generator/src/utils/version-coherence.ts`

```typescript
import type { ToolDefinition } from "../types/index.js";

/**
 * Extract version from a fully qualified tool name.
 * "Github.CreateIssue@3.1.3" → "3.1.3"
 */
const extractVersion = (fullyQualifiedName: string): string => {
  const parts = fullyQualifiedName.split("@");
  return parts[1] ?? "0.0.0";
};

/**
 * Compute the version shared by the most tools in a toolkit.
 * Ties are broken by lexicographic comparison (highest version wins).
 */
export const getMajorityVersion = (
  tools: readonly ToolDefinition[]
): string | null => {
  if (tools.length === 0) {
    return null;
  }

  const counts = new Map<string, number>();
  for (const tool of tools) {
    const version = extractVersion(tool.fullyQualifiedName);
    counts.set(version, (counts.get(version) ?? 0) + 1);
  }

  let bestVersion = "";
  let bestCount = 0;
  for (const [version, count] of counts) {
    if (count > bestCount || (count === bestCount && version > bestVersion)) {
      bestVersion = version;
      bestCount = count;
    }
  }

  return bestVersion || null;
};

/**
 * Keep only tools whose @version matches the majority version for
 * their toolkit.  If all tools share the same version (the common
 * case), returns the original array unchanged.
 */
export const filterToolsByMajorityVersion = (
  tools: readonly ToolDefinition[]
): readonly ToolDefinition[] => {
  const majorityVersion = getMajorityVersion(tools);
  if (majorityVersion === null) {
    return tools;
  }

  // Fast path: if every tool is already at the majority version, skip filtering
  const allSame = tools.every(
    (t) => extractVersion(t.fullyQualifiedName) === majorityVersion
  );
  if (allSame) {
    return tools;
  }

  return tools.filter(
    (t) => extractVersion(t.fullyQualifiedName) === majorityVersion
  );
};
```

### Step 2: Apply filter in `CombinedToolkitDataSource.fetchAllToolkitsData()`

**File:** `toolkit-docs-generator/src/sources/toolkit-data-source.ts`

**Location:** Inside `fetchAllToolkitsData()`, after the grouping loop (line ~162), before the metadata-combination loop (line ~174).

**Change:** After `toolkitGroups` is populated, apply the filter to each group:

```typescript
// After line 162 (end of grouping loop)
import { filterToolsByMajorityVersion } from "../utils/version-coherence.js";

// Filter each toolkit to its majority version to drop stale
// tools from older releases that Engine still serves.
for (const [toolkitId, tools] of toolkitGroups) {
  const filtered = filterToolsByMajorityVersion(tools);
  if (filtered !== tools) {
    toolkitGroups.set(toolkitId, [...filtered]);
  }
}
```

### Step 3: Apply filter in `CombinedToolkitDataSource.fetchToolkitData()`

**File:** `toolkit-docs-generator/src/sources/toolkit-data-source.ts`

**Location:** Inside `fetchToolkitData()`, around line 133, where `filteredTools` is computed.

**Change:** When no explicit `version` is passed, apply majority-version filtering instead of returning all tools:

```typescript
// Replace lines 133-139
const filteredTools = version
  ? tools.filter((tool) => {
      const toolVersion = tool.fullyQualifiedName.split("@")[1];
      return toolVersion === version;
    })
  : filterToolsByMajorityVersion(tools);
```

### Step 4: Export from utils index

**File:** `toolkit-docs-generator/src/utils/index.ts`

Add the export:

```typescript
export {
  filterToolsByMajorityVersion,
  getMajorityVersion,
} from "./version-coherence.js";
```

### Step 5: Add unit tests for the filter

**New file:** `toolkit-docs-generator/tests/utils/version-coherence.test.ts`

Test cases to write:

| Test case | Input | Expected |
|-----------|-------|----------|
| All same version | 3 tools `@3.1.3` | Returns all 3 (same array ref) |
| Mixed versions, clear majority | 5 tools `@3.1.3` + 2 tools `@2.0.1` | Returns only the 5 `@3.1.3` tools |
| Empty array | `[]` | Returns `[]` |
| Single tool | 1 tool `@1.0.0` | Returns that tool |
| Tie broken by higher version | 2 tools `@1.0.0` + 2 tools `@2.0.0` | Returns the 2 `@2.0.0` tools |
| `getMajorityVersion` alone | Mixed array | Returns the majority version string |

### Step 6: Add integration test for `CombinedToolkitDataSource`

**File:** `toolkit-docs-generator/tests/sources/toolkit-data-source.test.ts`

Add a test case like:

```typescript
it("should filter out stale tools at non-majority versions in fetchAllToolkitsData", async () => {
  const toolSource = new InMemoryToolDataSource([
    createTool({
      name: "CreateIssue",
      qualifiedName: "Github.CreateIssue",
      fullyQualifiedName: "Github.CreateIssue@3.1.3",
    }),
    createTool({
      name: "ListPullRequests",
      qualifiedName: "Github.ListPullRequests",
      fullyQualifiedName: "Github.ListPullRequests@3.1.3",
    }),
    createTool({
      name: "GetNotificationSummary",
      qualifiedName: "Github.GetNotificationSummary",
      fullyQualifiedName: "Github.GetNotificationSummary@2.0.1",
    }),
  ]);
  const metadataSource = new InMemoryMetadataSource([createMetadata()]);
  const dataSource = createCombinedToolkitDataSource({
    toolSource,
    metadataSource,
  });

  const result = await dataSource.fetchAllToolkitsData();
  const github = result.get("Github");

  expect(github?.tools).toHaveLength(2);
  expect(github?.tools.every(
    (t) => t.fullyQualifiedName.endsWith("@3.1.3")
  )).toBe(true);
});
```

And a similar test for `fetchToolkitData` without an explicit version.

### Step 7: Add scenario test

**New file:** `toolkit-docs-generator/tests/scenarios/stale-version-tools.test.ts`

End-to-end scenario: verify that when `detectChanges` receives data from the filtered source, stale tools are absent, and the diff correctly reflects the removal (or classifies the toolkit as "modified" if previous output had those tools).

## Files to create

| File | Purpose |
|------|---------|
| `src/utils/version-coherence.ts` | `getMajorityVersion` + `filterToolsByMajorityVersion` |
| `tests/utils/version-coherence.test.ts` | Unit tests for the filter |
| `tests/scenarios/stale-version-tools.test.ts` | Scenario test: mixed versions → filter → clean diff |

## Files to modify

| File | Change |
|------|--------|
| `src/sources/toolkit-data-source.ts` | Import filter; apply in `fetchAllToolkitsData()` and `fetchToolkitData()` |
| `src/utils/index.ts` | Re-export new utilities |
| `tests/sources/toolkit-data-source.test.ts` | Add integration tests for version filtering |

## Files NOT modified (and why)

| File | Reason |
|------|--------|
| `src/merger/data-merger.ts` | No changes needed — the merger already writes only tools it receives; filtering upstream is sufficient |
| `src/diff/toolkit-diff.ts` | No changes needed — diff compares what it receives; clean input → correct diff |
| `src/cli/index.ts` | No changes needed — the filter is applied at the data-source layer, transparent to CLI |
| `src/sources/engine-api.ts` | No changes needed — the Engine client returns what the API sends; filtering is a data-source concern |
| `.github/workflows/generate-toolkit-docs.yml` | No changes needed — no new CLI flags required |

## Edge cases and risks

| Risk | Mitigation |
|------|------------|
| Toolkit intentionally has multi-version tools | Majority-version filter drops minority tools. If this is intentional, the explicit `version` parameter on `fetchToolkitData(id, version)` bypasses the filter. Document this. |
| Tie: equal tool counts at two versions | Tie-breaking picks the lexicographically higher version (typically newer). This is a safe default. |
| Toolkit with one tool at a different version | That tool is dropped. The "1 vs N" ratio makes this unambiguous. |
| All tools at different versions (every tool unique) | Extremely unlikely in practice. Filter picks the "highest" version. Could add a warning log. |
| Performance | Fast path (`allSame` check) avoids allocations. The filter is O(n) per toolkit, negligible. |

## Verification

After implementation, run:

```bash
# Unit + integration tests
pnpm vitest run tests/utils/version-coherence.test.ts
pnpm vitest run tests/sources/toolkit-data-source.test.ts
pnpm vitest run tests/scenarios/stale-version-tools.test.ts

# Full test suite
pnpm test

# Lint
pnpm lint

# Manual: inspect github.json after a local generate
pnpm dlx tsx src/cli/index.ts generate \
  --providers "Github" \
  --api-source tool-metadata \
  --tool-metadata-url "$ENGINE_API_URL" \
  --tool-metadata-key "$ENGINE_API_KEY" \
  --skip-examples --skip-summary \
  --output data/toolkits

# Confirm: no @2.0.1 tools in github.json
grep "2.0.1" data/toolkits/github.json  # should return nothing
```

## Diagram

```
Before (current):
  Engine API → [Tool@3.1.3, Tool@3.1.3, ..., Tool@2.0.1, Tool@2.0.1]
                                    ↓
              fetchAllToolkitsData() groups by toolkit ID
                                    ↓
              All tools passed to diff + merge (stale tools included)

After (with filter):
  Engine API → [Tool@3.1.3, Tool@3.1.3, ..., Tool@2.0.1, Tool@2.0.1]
                                    ↓
              fetchAllToolkitsData() groups by toolkit ID
                                    ↓
              filterToolsByMajorityVersion() per toolkit   ← NEW
                                    ↓
              [Tool@3.1.3, Tool@3.1.3, ...]  (stale tools dropped)
                                    ↓
              diff + merge see clean tool list
```
