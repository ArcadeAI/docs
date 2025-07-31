<!--
Before submitting a pull request, please read:

For contributing a community toolkit, please use the [Community Contributed Toolkit Pull Request Template](https://github.com/ArcadeAI/docs/blob/main/.github/PULL_REQUEST_TEMPLATE/community_contributed_toolkit.md).

## Additional Guidelines for Arcade Jira Toolkit (v2.2.0) and Related Enhancements

As of July 30, 2025, the Arcade Jira toolkit supports new advanced board and sprint planning tools. When contributing or referencing new Jira-related tools, please:

- Use the updated tool call argument names:
  - Use `board_identifiers_list` instead of legacy names (such as `board_identifiers` or `board_ids`).
  - Use `max_sprints_per_board` for sprint planning limits, not `sprints_per_board`.
  - For sprint state filtering, use the SprintState enum (e.g., `SprintState.ACTIVE`, `SprintState.CLOSED`), not raw string lists.
- When submitting Jira-related tool docs or PRs:
  - Provide examples that include all relevant board IDs/names in a single call to maximize efficiency, as split calls are now considered anti-patterns.
  - Reference the changelog for v2.2.0 if you are submitting a pull request that leverages the new sprint or board features.
  - If your toolkit integrates with the new Jira board/sprint features, ensure your PR description reflects this and requests doc review for argument naming consistency.

-->
