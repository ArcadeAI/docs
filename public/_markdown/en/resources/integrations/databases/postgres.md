---
title: "Postgres"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
DatabasesPostgres

# Postgres

Community

**Description:** Enable agents to interact with PostgreSQL databases (read only).

**Author:** Arcade

**Code:** [GitHub](https://github.com/ArcadeAI/arcade-ai/tree/main/resources/integrations/postgres)

**Auth:** database connection string

[![PyPI Version](https://img.shields.io/pypi/v/arcade_postgres)](https://pypi.org/project/arcade_postgres/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_postgres)](https://pypi.org/project/arcade_postgres/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_postgres)](https://pypi.org/project/arcade_postgres/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_postgres)](https://pypi.org/project/arcade_postgres/)

The Arcade Postgres MCP Server provides a pre-built set of tools for interacting with PostgreSQL databases in a read-only manner. This MCP Sever enables agents to discover database schemas, explore table structures, and execute SELECT queries safely. This MCP Sever is a companion to the blog post [Designing SQL Tools for AI Agents](https://blog.arcade.dev/sql-tools-ai-agents-security) .

This MCP Sever is meant to be an example of how to build a MCP Sever for a database, and is not intended to be used in production - you won’t find it listed in the Arcade dashboard or APIs. For production use, we recommend forking this repository and building your own MCP Sever with use-case specific tools.

## Key Features

This MCP Sever demonstrates several important concepts for LLM-powered database interactions:

-   **Schema Discovery**: Automatically discover available database schemas
-   **Table Exploration**: Find all tables within a specific schema
-   **Schema Inspection**: Get detailed column information including data types, primary keys, and indexes
-   **Safe Query Execution**: Execute SELECT queries with built-in safety measures
-   **Connection Pooling**: Reuse database connections efficiently
-   **Read-Only Access**: Enforce read-only access to prevent data modification
-   **Row Limits**: Automatically limit query results to prevent overwhelming responses

## Available Tools

Tool Name

Description

Postgres.DiscoverSchemas

Discover all schemas in a PostgreSQL database.

Postgres.DiscoverTables

Discover all tables in a specific schema.

Postgres.GetTableSchema

Get the detailed schema of a specific table.

Postgres.ExecuteSelectQuery

Execute a SELECT query with comprehensive clause support.

Note that all tools require the `POSTGRES_DATABASE_CONNECTION_STRING` secret to be set.

## Postgres.DiscoverSchemas

Discover all schemas in a PostgreSQL database. This tool returns a list of all available schemas, excluding the `information_schema` for security.

## Postgres.DiscoverTables

Discover all tables in a specific schema. This tool should be used before any other tool that requires a table name.

**Parameters:**

-   `schema_name` (str): The database schema to discover tables in (default: “public”)

## Postgres.GetTableSchema

Get the detailed schema of a specific table. This tool provides column information including data types, primary key indicators, and index information. Always use this tool before executing any query.

**Parameters:**

-   `schema_name` (str): The database schema containing the table
-   `table_name` (str): The name of the table to inspect

## Postgres.ExecuteSelectQuery

Execute a SELECT query with comprehensive clause support. This tool allows you to build complex queries using individual clauses while maintaining safety and performance.

**Parameters:**

-   `select_clause` (str): Columns to select (without SELECT keyword)
-   `from_clause` (str): Table(s) to query from (without FROM keyword)
-   `limit` (int): Maximum rows to return (default: 100)
-   `offset` (int): Number of rows to skip (default: 0)
-   `join_clause` (str, optional): JOIN conditions (without JOIN keyword)
-   `where_clause` (str, optional): WHERE conditions (without WHERE keyword)
-   `having_clause` (str, optional): HAVING conditions (without HAVING keyword)
-   `group_by_clause` (str, optional): GROUP BY columns (without GROUP BY keyword)
-   `order_by_clause` (str, optional): ORDER BY columns (without ORDER BY keyword)
-   `with_clause` (str, optional): WITH clause for CTEs (without WITH keyword)

**Query Construction:** The final query is constructed as:

```sql
SELECT {select_clause} FROM {from_clause}
JOIN {join_clause}
WHERE {where_clause}
HAVING {having_clause}
GROUP BY {group_by_clause}
ORDER BY {order_by_clause}
LIMIT {limit} OFFSET {offset}
```

**Best Practices:**

-   Always use `discover_tables` and `get_table_schema` before executing queries
-   Never use “SELECT \*” - always specify the columns you need
-   Order results by primary keys or important columns
-   Use case-insensitive string matching
-   Trim strings in queries
-   Prefer LIKE queries over exact matches or regex
-   Only join on indexed columns or primary keys

## Usage Workflow

For optimal results, follow this workflow when using the Postgres MCP Sever:

1.  **Discover Schemas**: Use `discover_schemas` to see available schemas
2.  **Discover Tables**: Use `discover_tables` with your target schema
3.  **Get Table Schema**: Use `get_table_schema` for each table you plan to query
4.  **Execute Query**: Use `execute_select_query` with the schema information

This workflow ensures your agent has complete information about the database structure before attempting queries, reducing errors and improving query performance.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_postgres ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[HubspotUsersApi](/en/resources/integrations/sales/hubspot-users-api.md)
[MongoDB](/en/resources/integrations/databases/mongodb.md)
