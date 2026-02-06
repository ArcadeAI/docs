---
title: "Capture mode"
description: "Record tool calls without scoring to bootstrap test expectations"
---
[Create tools](/en/guides/create-tools/tool-basics.md)
[Evaluate tools](/en/guides/create-tools/evaluate-tools.md)
Capture mode

# Capture mode

Capture mode records  calls without evaluating them. Use it to bootstrap test expectations or debug model behavior.

**Backward compatibility**: Capture mode works with existing evaluation suites. Simply add the `--capture` flag to any `arcade evals` command. No code changes needed.

## When to use capture mode

**Bootstrapping test expectations**: When you don’t know what  calls to expect, run capture mode to see what the model actually calls.

**Debugging model behavior**: When evaluations fail unexpectedly, capture mode shows exactly what the model is doing.

**Exploring new **: When adding new tools, capture mode helps you understand how models interpret them.

**Documenting  usage**: Create examples of how models use your tools in different scenarios.

### Typical workflow

PLAINTEXT

```
1. Create suite with empty expected_tool_calls
   ↓
2. Run: arcade evals . --capture --format json
   ↓
3. Review captured tool calls in output file
   ↓
4. Copy tool calls into expected_tool_calls
   ↓
5. Add critics for validation
   ↓
6. Run: arcade evals . --details
```

## Basic usage

### Create an evaluation suite without expectations

Create a suite with test cases but empty `expected_tool_calls`:

```python
from arcade_evals import EvalSuite, tool_eval

@tool_eval()
async def capture_weather_suite():
    suite = EvalSuite(
        name="Weather Capture",
        system_message="You are a weather assistant.",
    )

    await suite.add_mcp_stdio_server(["python", "weather_server.py"])

    # Add cases without expected tool calls
    suite.add_case(
        name="Simple weather query",
        user_message="What's the weather in Seattle?",
        expected_tool_calls=[],  # Empty for capture
    )

    suite.add_case(
        name="Multi-city comparison",
        user_message="Compare the weather in Seattle and Portland",
        expected_tool_calls=[],
    )

    return suite
```

### Run in capture mode

Run evaluations with the `--capture` flag:

```json
arcade evals . --capture --file captures/weather --format json
```

This creates `captures/weather.json` with all  calls.

### Review captured output

Open the JSON file to see what the model called:

```json
{
  "suite_name": "Weather Capture",
  "model": "gpt-4o",
  "provider": "openai",
  "captured_cases": [
    {
      "case_name": "Simple weather query",
      "user_message": "What's the weather in Seattle?",
      "tool_calls": [
        {
          "name": "Weather_GetCurrent",
          "args": {
            "location": "Seattle",
            "units": "fahrenheit"
          }
        }
      ]
    }
  ]
}
```

### Convert to test expectations

Copy the captured calls into your evaluation suite:

```python
from arcade_evals import ExpectedMCPToolCall, BinaryCritic

suite.add_case(
    name="Simple weather query",
    user_message="What's the weather in Seattle?",
    expected_tool_calls=[
        ExpectedMCPToolCall(
            "Weather_GetCurrent",
            {"location": "Seattle", "units": "fahrenheit"}
        )
    ],
    critics=[
        BinaryCritic(critic_field="location", weight=0.7),
        BinaryCritic(critic_field="units", weight=0.3),
    ],
)
```

## CLI options

### Basic capture

Record  calls to JSON:

```json
arcade evals . --capture --file captures/baseline --format json
```

### Include conversation context

Capture system messages and conversation history:

```json
arcade evals . --capture --include-context --file captures/detailed --format json
```

Output includes:

```json
{
  "case_name": "Weather with context",
  "user_message": "What about the weather there?",
  "system_message": "You are a weather assistant.",
  "additional_messages": [
    {"role": "user", "content": "I'm traveling to Tokyo"},
    {"role": "assistant", "content": "Tokyo is a great city!"}
  ],
  "tool_calls": [...]
}
```

### Multiple formats

Save captures in multiple formats:

```bash
arcade evals . --capture --file captures/out --format json,md
```

Markdown format is more readable for quick review:

```markdown
## Weather Capture

### Model: gpt-4o

#### Case: Simple weather query

**Input:** What's the weather in Seattle?

**Tool Calls:**

- `Weather_GetCurrent`
  - location: Seattle
  - units: fahrenheit
```

### Multiple providers

Capture from multiple providers to compare behavior:

```json
arcade evals . --capture \
  --use-provider openai:gpt-4o \
  --use-provider anthropic:claude-sonnet-4-5-20250929 \
  --file captures/comparison --format json
```

## Capture with comparative tracks

Capture from multiple  sources to see how different implementations behave:

```python
@tool_eval()
async def capture_comparative():
    suite = EvalSuite(
        name="Weather Comparison",
        system_message="You are a weather assistant.",
    )

    # Register different tool sources
    await suite.add_mcp_server(
        "http://weather-api-1.example/mcp",
        track="Weather API v1"
    )

    await suite.add_mcp_server(
        "http://weather-api-2.example/mcp",
        track="Weather API v2"
    )

    # Capture will run against each track
    suite.add_case(
        name="get_weather",
        user_message="What's the weather in Seattle?",
        expected_tool_calls=[],
    )

    return suite
```

Run capture:

```json
arcade evals . --capture --file captures/apis --format json
```

Output shows captures per track:

```json
{
  "captured_cases": [
    {
      "case_name": "get_weather",
      "track_name": "Weather API v1",
      "tool_calls": [
        {"name": "GetCurrentWeather", "args": {...}}
      ]
    },
    {
      "case_name": "get_weather",
      "track_name": "Weather API v2",
      "tool_calls": [
        {"name": "Weather_Current", "args": {...}}
      ]
    }
  ]
}
```

## Best practices

### Start with broad queries

Begin with open-ended prompts to see natural model behavior:

```python
suite.add_case(
    name="explore_weather_tools",
    user_message="Show me everything you can do with weather",
    expected_tool_calls=[],
)
```

### Capture edge cases

Record model behavior on unusual inputs:

```python
suite.add_case(
    name="ambiguous_location",
    user_message="What's the weather in Portland?",  # OR or ME?
    expected_tool_calls=[],
)
```

### Include context variations

Capture with different conversation :

```python
suite.add_case(
    name="weather_from_context",
    user_message="How about the weather there?",
    additional_messages=[
        {"role": "user", "content": "I'm going to Seattle"},
    ],
    expected_tool_calls=[],
)
```

### Capture multiple providers

Compare how different models interpret your :

```bash
arcade evals . --capture \
  --use-provider openai:gpt-4o,gpt-4o-mini \
  --use-provider anthropic:claude-sonnet-4-5-20250929 \
  --file captures/models --format json,md
```

## Converting captures to tests

### Step 1: Identify patterns

Review captured  calls to find patterns:

```json
// Most queries use "fahrenheit"
{"location": "Seattle", "units": "fahrenheit"}
{"location": "Portland", "units": "fahrenheit"}

// Some use "celsius"
{"location": "Tokyo", "units": "celsius"}
```

### Step 2: Create base expectations

Create expected  calls based on patterns:

```python
# Default to fahrenheit for US cities
ExpectedMCPToolCall("GetWeather", {"location": "Seattle", "units": "fahrenheit"})

# Use celsius for international cities
ExpectedMCPToolCall("GetWeather", {"location": "Tokyo", "units": "celsius"})
```

### Step 3: Add critics

Add critics to validate parameters. See [Critics](/guides/create-tools/evaluate-tools/create-evaluation-suite.md#critics) for options.

### Step 4: Run evaluations

Test with real evaluations:

```bash
arcade evals . --details
```

### Step 5: Iterate

Use failures to refine:

-   Adjust expected values
-   Change critic weights
-   Modify  descriptions
-   Add more test cases

## Troubleshooting

### No tool calls captured

**Symptom:** Empty `tool_calls` arrays

**Possible causes:**

1.  Model didn’t call any
2.   not properly registered
3.  System message doesn’t encourage  use

**Solution:**

```python
suite = EvalSuite(
    name="Weather",
    system_message="You are a weather assistant. Use the available weather tools to answer questions.",
)
```

### Missing parameters

**Symptom:** Some parameters are missing from captured calls

**Explanation:** Models may omit optional parameters.

**Solution:** Check if parameters have defaults in your schema. The evaluation framework applies defaults automatically.

### Different results per provider

**Symptom:** OpenAI and Anthropic capture different  calls

**Explanation:** Providers interpret  descriptions differently.

**Solution:** This is expected. Use captures to understand provider-specific behavior, then create provider-agnostic tests.

## Next steps

-   Learn about [comparative evaluations](/guides/create-tools/evaluate-tools/comparative-evaluations.md)
     to compare  sources
-   [Create evaluation suites](/guides/create-tools/evaluate-tools/create-evaluation-suite.md)
     with expectations

Last updated on January 5, 2026

[Run evaluations](/en/guides/create-tools/evaluate-tools/run-evaluations.md)
[Comparative evaluations](/en/guides/create-tools/evaluate-tools/comparative-evaluations.md)
