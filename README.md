# Arcade Documentation

Documentation for Arcade

## Local Development

See the `package.json` for the dependencies required.

First, run `pnpm install` to install the dependencies.

Then, run `pnpm dev` to start the development server and visit localhost:3000.

## Major Changes as of July 30, 2025

### Jira Toolkit Sprint and Board Improvements

Arcade's Jira toolkit now includes major enhancements for working with Jira boards and sprints:

- **New tools:**
    - `get_boards`: Retrieve Jira boards by name, ID, or fetch all boards with pagination. Always include all board identifiers in a single call for optimal performance.
    - `list_sprints_for_boards`: Fetch sprints from multiple boards at once, with support for filtering by lifecycle state (future, active, closed), date ranges, and pagination. Now accepts `SprintState` enums in the state filter.
- **Board/Sprint deduplication and error reporting:** Automatically deduplicate requests by ID and name, and clearly report any errors for unfound boards.
- **Performance warning:** Always combine all board/sprint queries into a single call to avoid major performance penalties.
- **Enhanced URLs:** Nearly all Jira tool responses now include GUI URLs (`jira_gui_url`, etc.) for quick access to issues, projects, and users in the web interface.
- **Cloud awareness:** Many operations now accept or output both Atlassian Cloud IDs and names, making multi-cloud workflows easier and error reporting clearer.

### Tool Usage Recommendations

- **When querying multiple Jira boards or sprints, always use a single API call with a list of all board identifiers.** Splitting your request into multiple separate tool calls leads to major performance penalties and slower automation.
- **Date Filtering:** When using sprint filters, supply `start_date`, `end_date`, or `specific_date` in the `YYYY-MM-DD` format.
- **Sprint state:** When filtering sprints, you can now use the `SprintState` enum for combinations like `FUTURE_AND_ACTIVE`, `ACTIVE_AND_CLOSED`, or `ALL` for maximum flexibility.
- **Error handling:** If an error occurs due to an unavailable or ambiguous Atlassian Cloud, error messages will now provide additional context and lists of available clouds.

### Upgrading Toolkits

Several toolkits have new major versions. See the toolkit's changelog or PyPI for details. If you use Jira toolkit functionality, review your tool call usage and update any board or sprint queries according to the recommendations above.

### Removed Postgres Toolkit

As of July 30, 2025, the Arcade Postgres toolkit has been removed from the repository. Please use other database toolkits or consult Arcade documentation for supported integrations.

---

For more details on these changes and how to migrate existing workflows, see the Arcade Jira Toolkit documentation and your toolkit's changelog.

