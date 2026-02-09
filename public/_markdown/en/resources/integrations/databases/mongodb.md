---
title: "MongoDB"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Databases](/en/resources/integrations/databases/postgres.md)
MongoDB

# MongoDB

Community

**Description:** Enable agents to interact with MongoDB databases (read only).

**Author:** Arcade

**Code:** [GitHub](https://github.com/ArcadeAI/arcade-ai/tree/main/resources/integrations/mongodb)

**Auth:** database connection string

[![PyPI Version](https://img.shields.io/pypi/v/arcade_mongodb)](https://pypi.org/project/arcade_mongodb/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_mongodb)](https://pypi.org/project/arcade_mongodb/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_mongodb)](https://pypi.org/project/arcade_mongodb/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_mongodb)](https://pypi.org/project/arcade_mongodb/)

The Arcade MongoDB MCP Server provides a pre-built set of tools for interacting with MongoDB databases in a read-only manner. This MCP Sever enables agents to discover databases and collections, explore document structures, and execute queries safely. This MCP Sever is a companion to the blog post [Designing SQL Tools for AI Agents](https://blog.arcade.dev/sql-tools-ai-agents-security) .

This MCP Sever is meant to be an example of how to build a MCP Sever for a database, and is not intended to be used in production - you won’t find it listed in the Arcade dashboard or APIs. For production use, we recommend forking this repository and building your own MCP Sever with use-case specific tools.

## Key Features

This MCP Sever demonstrates several important concepts for LLM-powered database interactions:

-   **Database Discovery**: Automatically discover available databases in the MongoDB instance
-   **Collection Exploration**: Find all collections within a specific database
-   **Schema Inference**: Sample documents to infer schema structure and data types
-   **Safe Query Execution**: Execute find queries with built-in safety measures
-   **Aggregation Support**: Run complex aggregation pipelines for data analysis
-   **Document Counting**: Count documents matching specific criteria
-   **Connection Pooling**: Reuse database connections efficiently
-   **Read-Only Access**: Enforce read-only access to prevent data modification
-   **Result Limits**: Automatically limit query results to prevent overwhelming responses

## Available Tools

Tool Name

Description

MongoDB.DiscoverDatabases

Discover all databases in the MongoDB instance.

MongoDB.DiscoverCollections

Discover all collections in a specific database.

MongoDB.GetCollectionSchema

Get the schema structure of a collection by sampling documents.

MongoDB.FindDocuments

Find documents in a collection with filtering, projection, and sorting.

MongoDB.CountDocuments

Count documents matching a specific filter.

MongoDB.AggregateDocuments

Execute aggregation pipelines for complex data analysis.

Note that all tools require the `MONGODB_CONNECTION_STRING` secret to be set.

## MongoDB.DiscoverDatabases

Discover all databases in the MongoDB instance. This tool returns a list of all available databases, excluding system databases like `admin`, `config`, and `local` for security.

## MongoDB.DiscoverCollections

Discover all collections in a specific database. This tool should be used before any other tool that requires a collection name.

**Parameters:**

-   `database_name` (str): The database name to discover collections in

## MongoDB.GetCollectionSchema

Get the schema structure of a collection by sampling documents. Since MongoDB is schema-less, this tool samples a configurable number of documents to infer the schema structure and data types. Always use this tool before executing any query.

**Parameters:**

-   `database_name` (str): The database name containing the collection
-   `collection_name` (str): The name of the collection to inspect
-   `sample_size` (int): The number of documents to sample for schema discovery (default: 100)

## MongoDB.FindDocuments

Find documents in a collection with filtering, projection, and sorting. This tool allows you to build complex queries using MongoDB’s query operators while maintaining safety and performance.

**Parameters:**

-   `database_name` (str): The database name to query
-   `collection_name` (str): The collection name to query
-   `filter_dict` (str, optional): MongoDB filter/query as JSON string. Leave None for no filter
-   `projection` (str, optional): Fields to include/exclude as JSON string. Use 1 to include, 0 to exclude
-   `sort` (list\[str\], optional): Sort criteria as list of JSON strings with ‘field’ and ‘direction’ keys
-   `limit` (int): Maximum number of documents to return (default: 100)
-   `skip` (int): Number of documents to skip (default: 0)

**Best Practices:**

-   Always use `discover_collections` and `get_collection_schema` before executing queries
-   Always specify projection to limit fields returned if you don’t need all data
-   Always sort your results by the most important fields first
-   Use appropriate MongoDB query operators for complex filtering ($gte, $lte, $in, $regex, etc.)
-   Be mindful of case sensitivity when querying string fields
-   Use indexes when possible (typically on \_id and commonly queried fields)

## MongoDB.CountDocuments

Count documents in a collection matching the given filter. This tool is useful for getting quick counts without retrieving the actual documents.

**Parameters:**

-   `database_name` (str): The database name to query
-   `collection_name` (str): The collection name to query
-   `filter_dict` (str, optional): MongoDB filter/query as JSON string. Leave None to count all documents

## MongoDB.AggregateDocuments

Execute aggregation pipelines for complex data analysis. This tool allows you to run sophisticated data processing operations including grouping, filtering, and transformations.

**Parameters:**

-   `database_name` (str): The database name to query
-   `collection_name` (str): The collection name to query
-   `pipeline` (list\[str\]): MongoDB aggregation pipeline as a list of JSON strings
-   `limit` (int): Maximum number of results to return (default: 100)

**Common Aggregation Stages:**

-   `$match` - filter documents
-   `$group` - group documents and perform calculations
-   `$project` - reshape documents
-   `$sort` - sort documents
-   `$limit` - limit results
-   `$lookup` - join with other collections

## Usage Workflow

For optimal results, follow this workflow when using the MongoDB MCP Sever:

1.  **Discover Databases**: Use `discover_databases` to see available databases
2.  **Discover Collections**: Use `discover_collections` with your target database
3.  **Get Collection Schema**: Use `get_collection_schema` for each collection you plan to query
4.  **Execute Queries**: Use `find_documents`, `count_documents`, or `aggregate_documents` with the schema information

This workflow ensures your agent has complete information about the database structure before attempting queries, reducing errors and improving query performance.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_mongodb ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[Postgres](/en/resources/integrations/databases/postgres.md)
[ClickHouse](/en/resources/integrations/databases/clickhouse.md)
