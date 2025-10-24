export function ErrorHierarchy({ description }: { description: string }) {
  return (
    <div className="my-6">
      <h2 className="mb-4 font-bold text-2xl">Error hierarchy</h2>
      <p className="mb-4">{description}</p>
      <pre className="overflow-x-auto rounded-lg bg-gray-50 p-4 text-sm dark:bg-gray-900">
        <code>{`
ToolkitError                                  # (Abstract base class)
├── ToolkitLoadError                          # Occurs during MCP Server import
└── ToolError                                 # (Abstract)
    ├── ToolDefinitionError                    # Detected when tool is added to catalog
    │   ├── ToolInputSchemaError              # Invalid input parameter types/annotations
    │   └── ToolOutputSchemaError             # Invalid return type annotations
    └── ToolRuntimeError                      # Errors during tool execution
        ├── ToolSerializationError            # (Abstract)
        │   ├── ToolInputError                # JSON to Python conversion fails
        │   └── ToolOutputError               # Python to JSON conversion fails
        └── ToolExecutionError                # Errors during tool execution
            ├── RetryableToolError            # Tool can be retried with extra context
            ├── ContextRequiredToolError      # Additional context needed before retry
            ├── FatalToolError                # Unhandled bugs in the tool implementation
            └── UpstreamError                 # HTTP/API errors from external services
                └── UpstreamRateLimitError    # Rate limiting errors from service
`}</code>
      </pre>
    </div>
  );
}
