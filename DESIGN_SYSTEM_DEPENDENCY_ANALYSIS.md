# Design System Dependency Analysis

**Date**: May 7, 2026  
**Context**: Response to Slack thread in #team-eng regarding design system breaking changes

## Current State

### Version Management

The docs repository currently uses:
- **Current version**: `@arcadeai/design-system@3.39.1`
- **Latest available**: `@arcadeai/design-system@3.39.2`
- **Version pinning**: Exact version (no `^` or `~` range)

```json
"dependencies": {
  "@arcadeai/design-system": "3.39.1",
  ...
}
```

This is **correct practice** - using exact version pinning prevents unexpected breaking changes from being introduced.

### Automated Update Workflow

The repository has an automated workflow for updating the design system:

**File**: `.github/workflows/update-design-system-dependency.yml`

**Trigger**: Manual (`workflow_dispatch`)

**Process**:
1. Installs dependencies with frozen lockfile
2. Updates to `@arcadeai/design-system@latest`
3. Checks for changes in `package.json` and `pnpm-lock.yaml`
4. **Runs compatibility tests** (if changes detected):
   - Runs specific vitest tests
   - Runs full production build (`pnpm run build`)
5. Creates PR only if tests pass
6. Requests review from `@ArcadeAI/engineering-tools-and-dx`

### Test Gate Effectiveness

The workflow **IS working as designed**. On May 6, 2026, the workflow attempted to update to version 3.39.2 but **correctly failed** the build step, preventing a PR from being created.

**Failed run**: `25439865535` (2026-05-06 13:58:17Z)

**Error encountered**:
```
Type error: Property 'asChild' does not exist on type...
./app/_components/challenge-solution.tsx:81:17
```

The breaking change: The `asChild` prop was removed from the Button component in design system version 3.39.2.

## Breaking Change Impact

### Files Affected by `asChild` Removal

If we were to upgrade to 3.39.2, these files would need updates:

1. `./app/not-found.tsx` (1 usage)
2. `./app/en/resources/integrations/components/filters-bar.tsx` (3 usages)
3. `./app/_components/glossary-term.tsx` (1 usage)
4. `./app/_components/challenge-solution.tsx` (1 usage)
5. `./app/en/home/landing-page.tsx` (4 usages)

**Total**: 10 instances across 5 files

### Example of Breaking Pattern

```tsx
// This pattern is now incompatible with DS 3.39.2+
<Button asChild variant="link">
  <Link href="/path">Click me</Link>
</Button>
```

## Workflow History

Recent update attempts:

| Date | Run ID | Status | Version Updated |
|------|--------|--------|-----------------|
| 2026-05-06 | 25439865535 | ❌ **Failed** | 3.39.1 → 3.39.2 (blocked) |
| 2026-04-28 | 25074310423 | ✅ Success | 3.39.0 → 3.39.1 |
| 2026-04-28 | 25064985834 | ✅ Success | N/A |
| 2026-04-27 | 25000252621 | ✅ Success | N/A |
| 2026-03-31 | 23775060047 | ❌ Failed | N/A |

## Addressing Slack Discussion Points

### 1. "Should we add checks when updating DS that builds other projects that depend on it?"

**Already implemented**: The workflow includes a full production build as a gate before creating PRs.

### 2. "Minor/patch versions have broken docs"

**Analysis**: The current failure is **semantically a breaking change** but may have been released as a minor/patch version. This is a semver adherence issue in the design system repo, not a docs repo issue.

**The docs repo cannot prevent breaking changes from being published**. It can only:
- ✅ Catch them before merging (currently working)
- ✅ Use exact version pinning (currently implemented)
- ❌ Prevent them from being published upstream

### 3. "Are we not pinning the version of DS used in docs?" (Teal's question)

**Answer**: Yes, we ARE pinning to an exact version (`3.39.1`). This is correct and working as expected.

### 4. "+1 that this should be signaled by semver" (Teal's comment)

**Agreed**: The `asChild` removal is a breaking change and should have been released as a major version bump (4.0.0), not 3.39.2.

## Recommendations

### For Docs Repo (This Repo)

1. **Keep current approach** - Version pinning + automated workflow with build gate is working correctly
2. **No changes needed** - The system caught the breaking change as designed
3. **Optional enhancement**: Add a comment in the workflow explaining that failed runs are expected and indicate breaking changes were caught

### For Design System Repo (Upstream)

1. **Follow semver strictly**:
   - Major version (X.0.0) for breaking changes (removing props, changing APIs)
   - Minor version (x.Y.0) for new features (backward compatible)
   - Patch version (x.y.Z) for bug fixes

2. **Consider tooling**:
   - Use API Extractor or similar tools to detect breaking changes
   - Add pre-publish checks that fail if breaking changes detected in non-major releases
   - Document breaking changes in CHANGELOG.md

3. **For this specific case**: Version 3.39.2 should be deprecated and the changes should be released as 4.0.0

### For Process

1. **When automated workflow fails**:
   - Check the failed run logs
   - Determine if it's a breaking change
   - If breaking: File an issue with design system team to address semver
   - If not breaking: Fix compatibility in docs repo and re-run workflow

2. **Communication**:
   - Failed workflow runs are visible in GitHub Actions
   - Consider adding a notification to Slack when workflow fails
   - Document that failed runs are expected behavior (not bugs)

## Conclusion

**The current dependency management approach is working correctly**. The design system is properly pinned to an exact version, and the automated update workflow successfully caught a breaking change before it could be merged.

The issue raised in Slack was already prevented by the existing safeguards. No action is required on the docs repo side beyond potentially improving communication about failed workflow runs.

The root issue is upstream: The design system repo needs to follow semantic versioning more strictly to signal breaking changes with major version bumps.
