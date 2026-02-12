---
title: "Why evaluate tools?"
description: "Learn why evaluating your tools is important"
---
[Create tools](/en/guides/create-tools/tool-basics.md)
[Evaluate tools](/en/guides/create-tools/evaluate-tools.md)
Why evaluate tools?

# Why evaluate tools?

 evaluations ensure AI models use your tools correctly in production. Unlike traditional testing, evaluations measure two key aspects:

1.  ** selection**: Does the model choose the right tools for the task?
2.  **Parameter accuracy**: Does the model provide correct arguments?

Arcade’s evaluation framework helps you validate tool-calling capabilities before deployment, ensuring reliability in real-world applications. You can evaluate tools from  servers, Arcade Gateways, or custom implementations.

## What can go wrong?

Without proper evaluation, AI models might:

-   **Misinterpret  intents**, selecting the wrong
-   **Provide incorrect arguments**, causing failures or unexpected behavior
-   **Skip necessary  calls**, missing steps in multi-step tasks
-   **Make incorrect assumptions** about parameter defaults or formats

## How evaluation works

Evaluations compare the model’s actual  calls with expected tool calls for each test case.

### Scoring components

1.  ** selection**: Did the model choose the correct tool?
2.  **Parameter evaluation**: Are the arguments correct? (evaluated by critics)
3.  **Weighted scoring**: Each aspect has a weight that affects the final score

### Evaluation results

Each test case receives:

-   **Score**: Calculated from weighted critic scores, normalized proportionally (weights can be any positive value)
-   **Status**:
    -   **Passed**: Score meets or exceeds fail threshold (default: 0.8)
    -   **Failed**: Score falls below fail threshold
    -   **Warned**: Score is between warn and fail thresholds (default: 0.9)

Example output:

PLAINTEXT

```
PASSED Get weather for city -- Score: 100.00%
WARNED Send message with typo -- Score: 85.00%
FAILED Wrong tool selected -- Score: 50.00%
```

## Next steps

-   [Create an evaluation suite](/guides/create-tools/evaluate-tools/create-evaluation-suite.md)
     to start testing your
-   [Run evaluations](/guides/create-tools/evaluate-tools/run-evaluations.md)
     with multiple providers
-   Explore [capture mode](/guides/create-tools/evaluate-tools/capture-mode.md)
     to bootstrap test expectations
-   Compare  sources with [comparative evaluations](/guides/create-tools/evaluate-tools/comparative-evaluations.md)


## Advanced features

Once you’re comfortable with basic evaluations, explore these advanced capabilities:

### Capture mode

Record  calls without scoring to discover what models actually call. Useful for bootstrapping test expectations and debugging. [Learn more →](/guides/create-tools/evaluate-tools/capture-mode.md)

### Comparative evaluations

Test the same cases against different  sources (tracks) with isolated registries. Compare how models perform with different tool implementations. [Learn more →](/guides/create-tools/evaluate-tools/comparative-evaluations.md)

### Output formats

Save results in multiple formats (txt, md, html, json) for reporting and analysis. Specify output files with extensions or use no extension for all formats. [Learn more →](/guides/create-tools/evaluate-tools/run-evaluations.md#output-formats)

Last updated on January 30, 2026

[Overview](/en/guides/create-tools/evaluate-tools.md)
[Create an evaluation suite](/en/guides/create-tools/evaluate-tools/create-evaluation-suite.md)
