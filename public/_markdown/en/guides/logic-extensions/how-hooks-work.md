# How Hooks Work

This page explains how the Arcade Engine invokes your external logic at each stage of tool execution, how you configure extensions and hook points, and how the Engine handles ordering and failures.

## Hook points

The Engine defines three hook points. You do not create new ones — you configure behavior at the ones that exist:

| Hook point | When it fires | What you can do |
| --- | --- | --- |
| **Access Hook** | When listing tools for a user | Return an allow list or deny list to control which tools the user can see. Results are cached. |
| **Pre-Execution Hook** | Before each tool execution | Allow, deny, or modify the request (inputs, secrets, routing). |
| **Post-Execution Hook** | After tool execution completes | Allow, deny, or modify the output (e.g. PII redaction, content filtering). |

You only need to implement the hook points you care about.

## Extensions

An **extension** is the connection between the Engine and your webhook server. It stores:

- **Endpoint URLs** for each hook point you implement
- **Authentication** method (Bearer token or mTLS)
- **Timeout** (default 5s), **retry**, and **cache** settings
- **Scope** — bound to an organization or a specific project

One extension can serve multiple hook configurations.

### Scoping

| Scope | Who can use it | Use case |
| --- | --- | --- |
| **Organization** | Any hook configuration in the organization | Company-wide compliance, access control |
| **Project** | Only hook configurations in that project | Project-specific validation or enrichment |

## Hook configurations

A **hook configuration** attaches an extension to a specific hook point and controls its behavior:

- **Hook point** — Which of the three hooks to run at
- **Extension** — Which extension to call (must be in scope)
- **Phase** — `before` or `after` (organization hooks only)
- **Priority** — Order within the same phase (lower = first)
- **Failure mode** — What happens when the webhook is unreachable
- **Tool filter** — Optional include/exclude patterns

## Execution order

1. **Organization before** — Organization hook configs with phase `before`, ordered by priority
2. **Project** — Project hook configs, ordered by priority
3. **Organization after** — Organization hook configs with phase `after`, ordered by priority

Project hooks always run in the middle — they do not have a phase setting. Any denial stops the entire pipeline.

## Failure modes

| Mode | Behavior |
| --- | --- |
| **Fail closed** | Block the operation. Use for security-critical checks. |
| **Fail open** | Allow the operation to proceed. Use for non-critical enhancements. |
