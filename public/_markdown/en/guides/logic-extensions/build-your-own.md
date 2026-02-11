# Build Your Own Extension Server

Build a webhook server that satisfies the Logic Extensions contract. The contract is defined by an OpenAPI 3.0 spec and can be implemented in any language.

## OpenAPI spec

- **Spec:** [logic_extensions/http/1.0/schema.yaml](https://github.com/ArcadeAI/schemas/blob/main/logic_extensions/http/1.0/schema.yaml)

## Generate server stubs

| Language | Generator |
| --- | --- |
| **Go** | oapi-codegen, ogen |
| **Python** | openapi-generator, datamodel-code-generator |
| **TypeScript** | openapi-typescript, openapi-generator |

## Endpoints to implement

| Endpoint | Hook point | Required |
| --- | --- | --- |
| `POST /access` | Access Hook | Only if you need access control |
| `POST /pre` | Pre-Execution Hook | Only if you need request validation/modification |
| `POST /post` | Post-Execution Hook | Only if you need output filtering/modification |
| `GET /health` | Health check | Recommended |

## Response codes (pre and post)

| Code | Meaning |
| --- | --- |
| `OK` | Proceed; optional override is applied |
| `CHECK_FAILED` | Deny the operation |
| `RATE_LIMIT_EXCEEDED` | Deny with rate-limit semantics |

## Authentication

The Engine sends either:

- **Bearer:** `Authorization: Bearer <token>`
- **mTLS:** Client certificate during TLS handshake
