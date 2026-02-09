---
title: "Comparative evaluations"
description: "Compare different tool implementations with the same test cases"
---
[Create tools](/en/guides/create-tools/tool-basics.md)
[Evaluate tools](/en/guides/create-tools/evaluate-tools.md)
Comparative evaluations

# Comparative evaluations

Comparative evaluations let you test how well AI models select and use tools from different, isolated  sources. Each “track” represents a separate tool registry, allowing you to compare implementations side-by-side.

## What are tracks?

**Tracks are isolated  registries** within a single evaluation suite. Each track has its own set of tools that are **not shared** with other tracks. This isolation lets you test how models perform when given different tool options for the same task.

**Key concept**: Comparative evaluations test  **selection** across different tool sets. Each track provides a different  (set of tools) to the model.

**Common use cases:**

-   **Compare  providers**: Test Google Weather vs OpenWeather API
-   **Implementation comparison**: Test different  servers offering similar functionality
-   **A/B testing**: Evaluate alternative  designs

### When to use comparative evaluations

Use **comparative evaluations** when:

-   ✅ Testing multiple implementations of the same functionality
-   ✅ Comparing different  providers
-   ✅ Evaluating how models choose between different  sets

Use **regular evaluations** when:

-   ✅ Testing a single  implementation
-   ✅ Testing mixed tools from multiple sources in the same
-   ✅ Regression testing

### Testing mixed tool sources

To test how multiple  servers work **together** in the same  (not isolated), use a regular evaluation and load multiple sources:

```python
@tool_eval()
async def mixed_tools_eval():
    suite = EvalSuite(name="Mixed Tools", system_message="You are helpful.")

    # All tools available to the model in the same context
    await suite.add_mcp_server("http://server1.example")
    await suite.add_mcp_server("http://server2.example")
    suite.add_tool_definitions([{"name": "CustomTool", ...}])

    # Model can use any tool from any source
    suite.add_case(...)
    return suite
```

Alternatively, use an Arcade Gateway which aggregates  from multiple sources.

## Basic comparative evaluation

### Register tools per track

Create a suite and register  for each track:

```python
from arcade_evals import EvalSuite, tool_eval, ExpectedMCPToolCall, BinaryCritic

@tool_eval()
async def weather_comparison():
    suite = EvalSuite(
        name="Weather API Comparison",
        system_message="You are a weather assistant.",
    )

    # Track A: Weather API v1
    await suite.add_mcp_server(
        "http://weather-v1.example/mcp",
        track="Weather v1"
    )

    # Track B: Weather API v2
    await suite.add_mcp_server(
        "http://weather-v2.example/mcp",
        track="Weather v2"
    )

    return suite
```

### Create comparative test case

Add a test case with track-specific expectations:

```python
suite.add_comparative_case(
    name="get_current_weather",
    user_message="What's the weather in Seattle?",
).for_track(
    "Weather v1",
    expected_tool_calls=[
        ExpectedMCPToolCall(
            "GetWeather",
            {"city": "Seattle", "type": "current"}
        )
    ],
    critics=[
        BinaryCritic(critic_field="city", weight=0.7),
        BinaryCritic(critic_field="type", weight=0.3),
    ],
).for_track(
    "Weather v2",
    expected_tool_calls=[
        ExpectedMCPToolCall(
            "Weather_GetCurrent",
            {"location": "Seattle"}
        )
    ],
    critics=[
        BinaryCritic(critic_field="location", weight=1.0),
    ],
)
```

### Run comparative evaluation

```bash
arcade evals .
```

Results show per-track scores:

PLAINTEXT

```
Suite: Weather API Comparison
  Case: get_current_weather
    Track: Weather v1 -- Score: 1.00 -- PASSED
    Track: Weather v2 -- Score: 1.00 -- PASSED
```

## Track registration

### From MCP HTTP server

```python
await suite.add_mcp_server(
    url="http://localhost:8000",
    headers={"Authorization": "Bearer token"},
    track="Production API",
)
```

### From MCP stdio server

```bash
await suite.add_mcp_stdio_server(
    command=["python", "server_v2.py"],
    env={"API_KEY": "secret"},
    track="Version 2",
)
```

### From Arcade Gateway

```python
await suite.add_arcade_gateway(
    gateway_slug="weather-gateway",
    track="Arcade Gateway",
)
```

### Manual tool definitions

```python
suite.add_tool_definitions(
    tools=[
        {
            "name": "GetWeather",
            "description": "Get weather for a location",
            "inputSchema": {...},
        }
    ],
    track="Custom Tools",
)
```

 must be registered before creating comparative cases that reference their tracks.

## Comparative case builder

The `add_comparative_case()` method returns a builder for defining track-specific expectations.

### Basic structure

```python
suite.add_comparative_case(
    name="test_case",
    user_message="Do something",
).for_track(
    "Track A",
    expected_tool_calls=[...],
    critics=[...],
).for_track(
    "Track B",
    expected_tool_calls=[...],
    critics=[...],
)
```

### Optional parameters

Add conversation  to comparative cases:

```python
suite.add_comparative_case(
    name="weather_with_context",
    user_message="What about the weather there?",
    system_message="You are helpful.",  # Optional override
    additional_messages=[
        {"role": "user", "content": "I'm going to Seattle"},
    ],
).for_track("Weather v1", ...).for_track("Weather v2", ...)
```

**Bias-aware message design:**

Design `additional_messages` to avoid leading the model. Keep them neutral so you measure  behavior, not prompt hints:

```python
# ✅ Good - Neutral
additional_messages=[
    {"role": "user", "content": "I need weather information"},
    {"role": "assistant", "content": "I can help with that. Which location?"},
]

# ❌ Avoid - Tells the model which tool to call
additional_messages=[
    {"role": "user", "content": "Use the GetWeather tool for Seattle"},
]
```

Keep messages generic so the model chooses  naturally based on what is available in the track.

### Different expectations per track

Tracks can expose different  and schemas. Because of that, you may need different critics per track:

```python
suite.add_comparative_case(
    name="search_query",
    user_message="Search for Python tutorials",
).for_track(
    "Google Search",
    expected_tool_calls=[
        ExpectedMCPToolCall("Google_Search", {"query": "Python tutorials"})
    ],
    critics=[BinaryCritic(critic_field="query", weight=1.0)],
).for_track(
    "Bing Search",
    expected_tool_calls=[
        ExpectedMCPToolCall("Bing_WebSearch", {"q": "Python tutorials"})
    ],
    # Different schema, so validate the matching field for this track
    critics=[BinaryCritic(critic_field="q", weight=1.0)],
)
```

## Complete example

Here’s a full comparative evaluation:

```python
from arcade_evals import (
    EvalSuite,
    tool_eval,
    ExpectedMCPToolCall,
    BinaryCritic,
    SimilarityCritic,
)

@tool_eval()
async def search_comparison():
    """Compare different search APIs."""
    suite = EvalSuite(
        name="Search API Comparison",
        system_message="You are a search assistant. Use the available tools to search for information.",
    )

    # Register search providers (MCP servers)
    await suite.add_mcp_server(
        "http://google-search.example/mcp",
        track="Google",
    )

    await suite.add_mcp_server(
        "http://bing-search.example/mcp",
        track="Bing",
    )

    # Mix with manual tool definitions
    suite.add_tool_definitions(
        tools=[{
            "name": "DDG_Search",
            "description": "Search using DuckDuckGo",
            "inputSchema": {
                "type": "object",
                "properties": {
                    "query": {"type": "string"}
                },
                "required": ["query"]
            }
        }],
        track="DuckDuckGo",
    )

    # Simple query
    suite.add_comparative_case(
        name="basic_search",
        user_message="Search for Python tutorials",
    ).for_track(
        "Google",
        expected_tool_calls=[
            ExpectedMCPToolCall("Search", {"query": "Python tutorials"})
        ],
        critics=[BinaryCritic(critic_field="query", weight=1.0)],
    ).for_track(
        "Bing",
        expected_tool_calls=[
            ExpectedMCPToolCall("WebSearch", {"q": "Python tutorials"})
        ],
        critics=[BinaryCritic(critic_field="q", weight=1.0)],
    ).for_track(
        "DuckDuckGo",
        expected_tool_calls=[
            ExpectedMCPToolCall("DDG_Search", {"query": "Python tutorials"})
        ],
        critics=[BinaryCritic(critic_field="query", weight=1.0)],
    )

    # Query with filters
    suite.add_comparative_case(
        name="search_with_filters",
        user_message="Search for Python tutorials from the last month",
    ).for_track(
        "Google",
        expected_tool_calls=[
            ExpectedMCPToolCall(
                "Search",
                {"query": "Python tutorials", "time_range": "month"}
            )
        ],
        critics=[
            SimilarityCritic(critic_field="query", weight=0.7),
            BinaryCritic(critic_field="time_range", weight=0.3),
        ],
    ).for_track(
        "Bing",
        expected_tool_calls=[
            ExpectedMCPToolCall(
                "WebSearch",
                {"q": "Python tutorials", "freshness": "Month"}
            )
        ],
        critics=[
            SimilarityCritic(critic_field="q", weight=0.7),
            BinaryCritic(critic_field="freshness", weight=0.3),
        ],
    ).for_track(
        "DuckDuckGo",
        expected_tool_calls=[
            ExpectedMCPToolCall(
                "DDG_Search",
                {"query": "Python tutorials"}
            )
        ],
        critics=[
            SimilarityCritic(critic_field="query", weight=1.0),
        ],
    )

    return suite
```

Run the comparison:

```bash
arcade evals . --details
```

Output shows side-by-side results:

PLAINTEXT

```
Suite: Search API Comparison

Case: basic_search
  Track: Google -- Score: 1.00 -- PASSED
  Track: Bing -- Score: 1.00 -- PASSED
  Track: DuckDuckGo -- Score: 1.00 -- PASSED

Case: search_with_filters
  Track: Google -- Score: 1.00 -- PASSED
  Track: Bing -- Score: 0.85 -- WARNED
  Track: DuckDuckGo -- Score: 0.90 -- WARNED
```

## Result structure

Comparative results are organized by track:

```python
{
    "Google": {
        "model": "gpt-4o",
        "suite_name": "Search API Comparison",
        "track_name": "Google",
        "rubric": {...},
        "cases": [
            {
                "name": "basic_search",
                "track": "Google",
                "input": "Search for Python tutorials",
                "expected_tool_calls": [...],
                "predicted_tool_calls": [...],
                "evaluation": {
                    "score": 1.0,
                    "result": "passed",
                    ...
                }
            }
        ]
    },
    "Bing": {...},
    "DuckDuckGo": {...}
}
```

## Mixing regular and comparative cases

A suite can have both regular and comparative cases:

```python
@tool_eval()
async def mixed_suite():
    suite = EvalSuite(
        name="Mixed Evaluation",
        system_message="You are helpful.",
    )

    # Register default tools
    await suite.add_mcp_stdio_server(["python", "server.py"])

    # Regular case (uses default tools)
    suite.add_case(
        name="regular_test",
        user_message="Do something",
        expected_tool_calls=[...],
    )

    # Register track-specific tools
    await suite.add_mcp_server("http://api-v2.example", track="v2")

    # Comparative case
    suite.add_comparative_case(
        name="compare_versions",
        user_message="Do something else",
    ).for_track(
        "default",  # Uses default tools
        expected_tool_calls=[...],
    ).for_track(
        "v2",  # Uses v2 tools
        expected_tool_calls=[...],
    )

    return suite
```

Use track name `"default"` to reference  registered without a track.

## Capture mode with tracks

Capture  calls from each track separately:

```bash
arcade evals . --capture -o captures/comparison.json
```

Output includes track names:

```json
{
  "captured_cases": [
    {
      "case_name": "get_weather",
      "track_name": "Weather v1",
      "tool_calls": [
        {"name": "GetWeather", "args": {...}}
      ]
    },
    {
      "case_name": "get_weather",
      "track_name": "Weather v2",
      "tool_calls": [
        {"name": "Weather_GetCurrent", "args": {...}}
      ]
    }
  ]
}
```

## Multi-model comparative evaluations

Combine comparative tracks with multiple models:

```bash
arcade evals . -p "openai:gpt-4o,gpt-4o-mini anthropic:claude-sonnet-4-5-20250929"
```

Results show:

-   Per-track scores for each model
-   Cross-track comparisons for each model
-   Cross-model comparisons for each track

Example output:

PLAINTEXT

```
Suite: Weather API Comparison

Model: gpt-4o
  Case: get_weather
    Track: Weather v1 -- Score: 1.00 -- PASSED
    Track: Weather v2 -- Score: 1.00 -- PASSED

Model: gpt-4o-mini
  Case: get_weather
    Track: Weather v1 -- Score: 0.90 -- WARNED
    Track: Weather v2 -- Score: 0.95 -- PASSED

Model: claude-sonnet-4-5-20250929
  Case: get_weather
    Track: Weather v1 -- Score: 1.00 -- PASSED
    Track: Weather v2 -- Score: 0.85 -- WARNED
```

## Best practices

### Use descriptive track names

Choose clear names that indicate what’s being compared:

```python
# ✅ Good
track="Weather API v1"
track="OpenWeather Production"
track="Google Weather (Staging)"

# ❌ Avoid
track="A"
track="Test1"
track="Track2"
```

### Keep test cases consistent

Use the same user message and  across tracks:

```python
suite.add_comparative_case(
    name="get_weather",
    user_message="What's the weather in Seattle?",  # Same for all tracks
).for_track("v1", ...).for_track("v2", ...)
```

### Adjust critics to track differences

Different  may have different parameter names or types:

```python
.for_track(
    "Weather v1",
    expected_tool_calls=[
        ExpectedMCPToolCall("GetWeather", {"city": "Seattle"})
    ],
    critics=[
        BinaryCritic(critic_field="city", weight=1.0),  # v1 uses "city"
    ],
).for_track(
    "Weather v2",
    expected_tool_calls=[
        ExpectedMCPToolCall("GetWeather", {"location": "Seattle"})
    ],
    critics=[
        BinaryCritic(critic_field="location", weight=1.0),  # v2 uses "location"
    ],
)
```

### Start with capture mode

Use capture mode to discover track-specific  signatures:

```bash
arcade evals . --capture
```

Then create expectations based on captured calls.

### Test edge cases per track

Different implementations may handle edge cases differently:

```python
suite.add_comparative_case(
    name="ambiguous_location",
    user_message="What's the weather in Portland?",  # OR or ME?
).for_track(
    "Weather v1",
    # v1 defaults to most populous
    expected_tool_calls=[
        ExpectedMCPToolCall("GetWeather", {"city": "Portland", "state": "OR"})
    ],
).for_track(
    "Weather v2",
    # v2 requires disambiguation
    expected_tool_calls=[
        ExpectedMCPToolCall("DisambiguateLocation", {"city": "Portland"}),
        ExpectedMCPToolCall("GetWeather", {"city": "Portland", "state": "OR"}),
    ],
)
```

## Troubleshooting

### Track not found

**Symptom:** `ValueError: Track 'TrackName' not registered`

**Solution:** Register the track before adding comparative cases:

```python
# ✅ Correct order
await suite.add_mcp_server(url, track="TrackName")
suite.add_comparative_case(...).for_track("TrackName", ...)

# ❌ Wrong order - will fail
suite.add_comparative_case(...).for_track("TrackName", ...)
await suite.add_mcp_server(url, track="TrackName")
```

### Missing track expectations

**Symptom:** Case runs against some tracks but not others

**Explanation:** Comparative cases only run against tracks with `.for_track()` defined.

**Solution:** Add expectations for all registered tracks:

```python
suite.add_comparative_case(
    name="test",
    user_message="...",
).for_track("Track A", ...).for_track("Track B", ...)
```

### Tool name mismatches

**Symptom:** “ not found” errors in specific tracks

**Solution:** Check  names in each track:

```python
# List tools per track
print(suite.list_tool_names(track="Track A"))
print(suite.list_tool_names(track="Track B"))
```

Use the exact  names from the output.

### Inconsistent results across tracks

**Symptom:** Same  message produces different scores across tracks

**Explanation:** This is expected. Different  implementations may work differently.

**Solution:** Adjust expectations and critics per track to  for implementation differences.

## Advanced patterns

### Baseline comparison

Compare new implementations against a baseline:

```python
await suite.add_mcp_server(
    "http://production.example/mcp",
    track="Production (Baseline)"
)

await suite.add_mcp_server(
    "http://staging.example/mcp",
    track="Staging (New)"
)
```

Results show deviations from baseline.

### Progressive feature testing

Test feature support across versions:

```python
suite.add_comparative_case(
    name="advanced_filters",
    user_message="Search with advanced filters",
).for_track(
    "v1",
    expected_tool_calls=[],  # Not supported
).for_track(
    "v2",
    expected_tool_calls=[
        ExpectedMCPToolCall("SearchWithFilters", {...})
    ],
)
```

### Tool catalog comparison

Compare Arcade  catalogs:

```python
from arcade_core import ToolCatalog
from my_tools import weather_v1, weather_v2

catalog_v1 = ToolCatalog()
catalog_v1.add_tool(weather_v1, "Weather")

catalog_v2 = ToolCatalog()
catalog_v2.add_tool(weather_v2, "Weather")

suite.add_tool_catalog(catalog_v1, track="Python v1")
suite.add_tool_catalog(catalog_v2, track="Python v2")
```

## Next steps

-   [Create an evaluation suite](/guides/create-tools/evaluate-tools/create-evaluation-suite.md)
     with tracks
-   Use [capture mode](/guides/create-tools/evaluate-tools/capture-mode.md)
     to discover track-specific  calls
-   [Run evaluations](/guides/create-tools/evaluate-tools/run-evaluations.md)
     with multiple models and tracks

Last updated on February 9, 2026

[Capture mode](/en/guides/create-tools/evaluate-tools/capture-mode.md)
[Types of Tools](/en/guides/create-tools/improve/types-of-tools.md)
