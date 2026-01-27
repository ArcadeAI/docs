# Verification cases

This page explains what should happen in each scenario and how to verify it.

## 1. New toolkit is added ✓

**Expected behavior**

- A new toolkit JSON file is created.
- `index.json` includes the new toolkit entry so it appears in the UI.
- Missing metadata produces a warning and defaults are used.

**How to verify**

- Run `generate --all` with a mock toolkit added to the mock data.
- Run `verify-output` to confirm the index matches the toolkit file.

**Test coverage**: 3 tests in `tests/scenarios/new-toolkit.test.ts`

**Status**: ✓ Verified with unit tests and mock runs

## 2. Toolkit is updated but tools do not change ✓

**Expected behavior**

- Documentation content stays the same.
- The toolkit version updates if the version changed upstream.
- Marked as "version-only" in change detection.

**How to verify**

- Use `check-changes` and confirm it marks a version-only update.
- Run `generate --all --skip-unchanged` and confirm only the version changes.

**Test coverage**: 2 tests in `tests/diff/toolkit-diff.test.ts`, 1 test in `tests/scenarios/skip-unchanged.test.ts`

**Status**: ✓ Verified with unit tests and mock runs

## 3. Toolkit updates and only a few tools change ✓

**Expected behavior**

- Only changed tools trigger regeneration (LLM calls).
- Unchanged tools reuse previous examples.
- Resources saved by avoiding unnecessary LLM calls.

**How to verify**

- Use the diff tests in `tests/diff/toolkit-diff.test.ts`.
- Check the log for `versionOnly` and tool-level changes.

**Test coverage**: 3 tests in `tests/merger/data-merger.test.ts` verify example reuse logic

**Status**: ✓ Verified with unit tests

## 4. Toolkit is missing from API but exists in docs ✓

**Expected behavior**

- The toolkit is not deleted from output.
- The toolkit is logged as removed.
- Message: "not returned by API; existing docs retained"

**How to verify**

- Run `check-changes` against previous output with a missing toolkit.
- Confirm it reports the toolkit as removed and logs it.

**Test coverage**: 4 tests in `tests/scenarios/removed-toolkit.test.ts`

**Status**: ✓ Verified with unit tests and mock runs (Jira, Slack files retained)

## 5. Change checks return valid data ✓

**Expected behavior**

- `check-changes` returns a summary with changed, removed, and version-only toolkits.
- `check-changes --json` returns structured output.
- All change types detected correctly.

**How to verify**

- Run `check-changes` with mock data and inspect output.
- Confirm tests in `tests/diff/toolkit-diff.test.ts` pass.

**Test coverage**: 28 tests in `tests/diff/toolkit-diff.test.ts`

**Status**: ✓ All change detection tests pass, mock runs verified

## 6. Toolkit update fails due to API or LLM errors ✓

**Expected behavior**

- Failed tools are recorded in the MergeResult.
- Warnings logged for each failure.
- Toolkit continues processing other tools.
- `failed-tools.json` created with structured data.
- Can rerun with `--failed-tools-file`.

**How to verify**

- Run tests in `tests/scenarios/failed-tools.test.ts`.
- Check that failed tools have no codeExample.
- Verify `failed-tools.json` is created.

**Test coverage**: 1 test in `tests/merger/data-merger.test.ts`, 2 tests in `tests/scenarios/failed-tools.test.ts`

**Status**: ✓ Implemented, tested, and verified

## 7. Logging and change history ✓

**Expected behavior**

- Every run writes to `logs/runs.log`.
- Changes append a summary entry to `logs/changes.log`.
- `failed-tools.json` overwritten each run.
- All logs use minimal, useful information.

**How to verify**

- Run `check-changes` and `generate --all --skip-unchanged`.
- Confirm new entries appear in both logs.
- If there are failures, confirm `logs/failed-tools.json` is updated.
- Rerun with `generate --failed-tools-file <path>`.

**Test coverage**: 1 test in `tests/utils/run-logs.test.ts`

**Status**: ✓ All log files working and verified with mock runs
