---
title: "Clickup Reference"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
[ClickUp](/en/resources/integrations/productivity/clickup.md)
Reference

# Clickup Reference

Below is a reference of enumerations used by some tools in the Clickup MCP Server:

## TaskPriority

Task priority values are used in the `Clickup.CreateTask` tool to set the priority of a new task. Those are default values and cannot be changed by the user.

-   **URGENT**: `URGENT`
-   **HIGH**: `HIGH`
-   **NORMAL**: `NORMAL`
-   **LOW**: `LOW`

## FilterScope

Filter scope values are used in the `Clickup.GetTasksByScope` tool to filter tasks by scope. The following enumeration values represent the possible scopes supported by the Clickup API:

-   **ALL**: `all`
-   **SPACES**: `spaces`
-   **FOLDERS**: `folders`
-   **LISTS**: `lists`

## TaskOrderBy

Task order by values are used in the `Clickup.GetTasksByScope` tool to order tasks by a specific field. The following enumeration values represent the possible order by fields supported by the Clickup API:

-   **CREATED**: `created`
-   **UPDATED**: `updated`
-   **DUE\_DATE**: `due_date`

## CommentResolution

Comment resolution values are used in the comment tools to set the resolution of a comment. The following enumeration values represent the possible resolutions supported by the Clickup API:

-   **SET\_AS\_RESOLVED**: `resolved`
-   **SET\_AS\_UNRESOLVED**: `unresolved`

Last updated on February 7, 2026

[ClickUp](/en/resources/integrations/productivity/clickup.md)
[Close.io](/en/resources/integrations/productivity/closeio.md)
