# Toolkit Docs Generator - Linear Tickets

This document contains ticket definitions ready for import into Linear.

---

## TICKET-001: Project Setup and Configuration

**Title**: [Foundation] Project setup with TypeScript and tooling

**Labels**: `foundation`, `setup`

**Priority**: P0 (Urgent)

**Estimate**: 2 points

**Description**:

Initialize the TypeScript project with proper tooling and configuration for the toolkit docs generator CLI.

### Requirements

- Initialize Node.js project with `pnpm`
- Configure TypeScript with strict mode
- Set up ESLint with functional programming rules
- Configure Prettier for code formatting
- Set up Vitest for testing
- Create folder structure (cli, sources, merger, llm, generator, types, utils)
- Add `bin` entry for CLI executable
- Set up build pipeline with `tsup`

### Acceptance Criteria

- [ ] `pnpm install` runs without errors
- [ ] `pnpm build` produces dist folder
- [ ] `pnpm lint` passes
- [ ] `pnpm typecheck` passes
- [ ] CLI is executable after build

---

## TICKET-002: Define Core Type Definitions

**Title**: [Foundation] Core TypeScript types with Zod schemas

**Labels**: `foundation`, `types`

**Priority**: P0 (Urgent)

**Estimate**: 3 points

**Dependencies**: TICKET-001

**Description**:

Create comprehensive TypeScript type definitions with Zod schemas for runtime validation.

### Requirements

- Define `ToolDefinition` type matching Engine API response
- Define `ToolkitMetadata` type matching Design System
- Define `MergedToolkit` and `MergedTool` types for output
- Define `DocumentationChunk` type for custom content
- Add Zod schemas for all types
- Export all types from `types/index.ts`

### Acceptance Criteria

- [ ] All types have corresponding Zod schemas
- [ ] Types are exported and importable
- [ ] Schema validation works at runtime

---

## TICKET-003: Implement Data Source Interfaces

**Title**: [Foundation] Abstract interfaces for data sources

**Labels**: `foundation`, `interfaces`

**Priority**: P0 (Urgent)

**Estimate**: 2 points

**Dependencies**: TICKET-002

**Description**:

Define abstract interfaces for all data sources enabling the provider pattern.

### Requirements

- Create `IToolDataSource` interface
- Create `IMetadataSource` interface
- Create `ICustomSectionsSource` interface
- Define error types for each source
- Add comprehensive JSDoc documentation

### Acceptance Criteria

- [ ] Interfaces support all required operations
- [ ] Error types are defined
- [ ] Documentation is complete

---

## TICKET-004: Implement Engine API Data Source

**Title**: [Data Source] Engine API fetcher implementation

**Labels**: `data-source`, `api`

**Priority**: P0 (Urgent)

**Estimate**: 4 points

**Dependencies**: TICKET-003

**Description**:

Implement the Engine API data source that fetches tool definitions.

### Requirements

- Implement `EngineApiSource` class
- Support authentication with API key
- Handle pagination if needed
- Transform API response to internal types
- Add retry logic with exponential backoff
- Add request caching (configurable)
- Handle rate limiting
- Comprehensive error handling
- Unit tests with mocked API

### Acceptance Criteria

- [ ] Fetches tools successfully from Engine API
- [ ] Handles errors gracefully
- [ ] Retries on transient failures
- [ ] Tests pass with >80% coverage

---

## TICKET-005: Implement Design System Metadata Source

**Title**: [Data Source] Design System metadata reader

**Labels**: `data-source`, `metadata`

**Priority**: P0 (Urgent)

**Estimate**: 3 points

**Dependencies**: TICKET-003

**Description**:

Implement metadata source using `@arcadeai/design-system` package.

### Requirements

- Implement `DesignSystemSource` class
- Import `TOOLKIT_CATALOGUE` from design system
- Normalize toolkit IDs for matching
- Handle missing toolkits gracefully
- Provide fallback metadata for unknown toolkits
- Unit tests

### Acceptance Criteria

- [ ] Reads metadata from design system package
- [ ] ID normalization works correctly
- [ ] Tests pass

---

## TICKET-006: Implement Custom Sections Source

**Title**: [Data Source] Custom sections JSON loader

**Labels**: `data-source`, `custom-content`

**Priority**: P1 (High)

**Estimate**: 3 points

**Dependencies**: TICKET-003

**Description**:

Implement custom sections source that loads extracted doc content.

### Requirements

- Implement `CustomSectionsSource` class
- Load from JSON file
- Support file watching for development
- Handle missing file gracefully
- Validate loaded data with Zod
- Unit tests

### Acceptance Criteria

- [ ] Loads custom sections from JSON
- [ ] Validates data structure
- [ ] Handles missing file
- [ ] Tests pass

---

## TICKET-007: Implement JSON File Data Source

**Title**: [Data Source] JSON file fallback source

**Labels**: `data-source`, `fallback`

**Priority**: P2 (Medium)

**Estimate**: 2 points

**Dependencies**: TICKET-003

**Description**:

Implement alternative data source for offline use and testing.

### Requirements

- Implement `JsonFileSource` class implementing `IToolDataSource`
- Support single file and directory of files
- Validate JSON structure
- Add caching
- Unit tests

### Acceptance Criteria

- [ ] Loads tools from JSON files
- [ ] Supports both file and directory modes
- [ ] Tests pass

---

## TICKET-008: Implement Data Merger

**Title**: [Core] Data merger combining all sources

**Labels**: `core`, `merger`

**Priority**: P0 (Urgent)

**Estimate**: 5 points

**Dependencies**: TICKET-004, TICKET-005, TICKET-006

**Description**:

Implement the core data merger that combines data from all sources.

### Requirements

- Implement `DataMerger` class/functions
- Merge tools with metadata by toolkit ID
- Compute `allScopes` union for each toolkit
- Determine `authType` from tool requirements
- Merge custom sections at appropriate positions
- Handle missing data gracefully
- Log warnings for unmatched data
- Comprehensive unit tests

### Acceptance Criteria

- [ ] Merges data from all three sources
- [ ] Computes derived fields correctly
- [ ] Handles missing data with defaults
- [ ] Tests pass with >80% coverage

---

## TICKET-009: Implement LLM Service Base

**Title**: [LLM] Base LLM provider abstraction

**Labels**: `llm`, `service`

**Priority**: P1 (High)

**Estimate**: 4 points

**Dependencies**: TICKET-002

**Description**:

Implement LLM service base with provider abstraction.

### Requirements

- Create `ILLMProvider` interface
- Implement `OpenAIProvider` class
- Add rate limiting / concurrency control
- Add retry logic with exponential backoff
- Support different models (gpt-4o, gpt-4o-mini)
- Unit tests with mocked responses

### Acceptance Criteria

- [ ] OpenAI provider works correctly
- [ ] Rate limiting prevents API overload
- [ ] Retries on failures
- [ ] Tests pass

---

## TICKET-010: Implement Example Inputs Generator

**Title**: [LLM] Tool example inputs generator

**Labels**: `llm`, `examples`

**Priority**: P1 (High)

**Estimate**: 4 points

**Dependencies**: TICKET-009

**Description**:

Implement LLM-based example inputs generator for tools.

### Requirements

- Create `ExampleInputsGenerator` class
- Generate valid JSON inputs based on parameter schema
- Handle enums by selecting valid values
- Handle optional vs required parameters
- Generate realistic values based on names/descriptions
- Batch multiple tools for efficiency
- Unit tests

### Acceptance Criteria

- [ ] Generates valid example inputs
- [ ] Handles all parameter types
- [ ] Respects enum constraints
- [ ] Tests pass

---

## TICKET-011: Implement Toolkit Summary Generator

**Title**: [LLM] Toolkit summary generator for new toolkits

**Labels**: `llm`, `summary`

**Priority**: P1 (High)

**Estimate**: 3 points

**Dependencies**: TICKET-009

**Description**:

Implement LLM-based toolkit summary generator.

### Requirements

- Create `ToolkitSummaryGenerator` class
- Generate concise, informative summaries
- Follow Arcade documentation style
- Handle existing summaries (skip if present)
- Unit tests

### Acceptance Criteria

- [ ] Generates quality summaries
- [ ] Follows style guidelines
- [ ] Tests pass

---

## TICKET-012: Implement JSON Output Generator

**Title**: [Generator] JSON output file generator

**Labels**: `generator`, `output`

**Priority**: P0 (Urgent)

**Estimate**: 4 points

**Dependencies**: TICKET-008

**Description**:

Implement JSON output generator for per-toolkit files.

### Requirements

- Create `JsonGenerator` class
- Output one JSON file per toolkit
- Generate index file with toolkit list
- Validate output against schema
- Support different output modes
- Add pretty-print option
- Unit tests

### Acceptance Criteria

- [ ] Generates valid JSON files
- [ ] Creates index file
- [ ] Validates output
- [ ] Tests pass

---

## TICKET-013: Implement CLI Interface

**Title**: [CLI] Command-line interface implementation

**Labels**: `cli`, `interface`

**Priority**: P0 (Urgent)

**Estimate**: 5 points

**Dependencies**: TICKET-008, TICKET-012

**Description**:

Implement the CLI interface with all commands.

### Requirements

- Create main CLI entry point
- Implement `generate` command for single toolkit
- Implement `generate-all` command for all toolkits
- Implement `validate` command
- Implement `list-toolkits` command
- Add interactive mode for toolkit selection
- Add progress indicators (ora)
- Support environment variables
- Add `--help` documentation
- Integration tests

### Acceptance Criteria

- [ ] All commands work correctly
- [ ] Progress indicators show status
- [ ] Environment variables are read
- [ ] Help documentation is complete
- [ ] Tests pass

---

## TICKET-014: Write Unit Tests

**Title**: [Testing] Comprehensive unit test coverage

**Labels**: `testing`, `quality`

**Priority**: P1 (High)

**Estimate**: 6 points

**Dependencies**: All implementation tickets

**Description**:

Write comprehensive unit tests for all modules.

### Requirements

- Unit tests for all data sources
- Unit tests for data merger
- Unit tests for LLM service (with mocks)
- Unit tests for JSON generator
- Unit tests for CLI commands
- Test coverage > 80%

### Acceptance Criteria

- [ ] All modules have tests
- [ ] Coverage > 80%
- [ ] Tests are maintainable

---

## TICKET-015: Write Integration Tests

**Title**: [Testing] End-to-end integration tests

**Labels**: `testing`, `integration`

**Priority**: P1 (High)

**Estimate**: 4 points

**Dependencies**: TICKET-014

**Description**:

Write integration tests for full workflows.

### Requirements

- End-to-end test with mock API
- Test with real Design System data
- Test CLI commands with fixtures
- Snapshot tests for output JSON

### Acceptance Criteria

- [ ] Integration tests pass
- [ ] CLI workflows work end-to-end
- [ ] Snapshots are stable

---

## TICKET-016: Write Documentation

**Title**: [Docs] Project documentation and guides

**Labels**: `documentation`

**Priority**: P1 (High)

**Estimate**: 3 points

**Dependencies**: All implementation tickets

**Description**:

Write comprehensive project documentation.

### Requirements

- README.md with quick start
- CLI usage documentation
- Configuration reference
- Architecture diagram
- Contributing guide

### Acceptance Criteria

- [ ] README is complete
- [ ] All commands are documented
- [ ] Architecture is explained
- [ ] Contributing guide exists

---

## Sprint Planning

### Sprint 1 (Week 1): Foundation
- TICKET-001: Project Setup (2 pts)
- TICKET-002: Type Definitions (3 pts)
- TICKET-003: Interfaces (2 pts)
**Total: 7 points**

### Sprint 2 (Week 1-2): Data Sources
- TICKET-004: Engine API Source (4 pts)
- TICKET-005: Design System Source (3 pts)
- TICKET-006: Custom Sections Source (3 pts)
- TICKET-007: JSON File Source (2 pts)
**Total: 12 points**

### Sprint 3 (Week 2): Core Logic
- TICKET-008: Data Merger (5 pts)
- TICKET-009: LLM Base (4 pts)
**Total: 9 points**

### Sprint 4 (Week 2-3): LLM Features
- TICKET-010: Example Inputs Generator (4 pts)
- TICKET-011: Summary Generator (3 pts)
**Total: 7 points**

### Sprint 5 (Week 3): Output & CLI
- TICKET-012: JSON Generator (4 pts)
- TICKET-013: CLI Interface (5 pts)
**Total: 9 points**

### Sprint 6 (Week 3-4): Quality
- TICKET-014: Unit Tests (6 pts)
- TICKET-015: Integration Tests (4 pts)
- TICKET-016: Documentation (3 pts)
**Total: 13 points**

---

## Total Effort: ~57 points (estimated 3-4 weeks)
