import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  ArcadeApiSource,
  createArcadeApiSource,
  createProductionArcadeApiSource,
} from "../../src/sources/arcade-api.js";
import type { ArcadeToolsResponse } from "../../src/sources/arcade-api-types.js";

// ============================================================================
// Test Fixtures
// ============================================================================

/**
 * Realistic fixture based on actual Arcade API response
 */
const createMockArcadeResponse = (
  items: ArcadeToolsResponse["items"],
  totalCount?: number
): ArcadeToolsResponse => ({
  items,
  limit: 100,
  offset: 0,
  page_count: 1,
  total_count: totalCount ?? items.length,
});

const mockAirtableTool: ArcadeToolsResponse["items"][0] = {
  fully_qualified_name: "AirtableApi.AddBaseCollaborator@4.0.0",
  qualified_name: "AirtableApi.AddBaseCollaborator",
  name: "AddBaseCollaborator",
  description:
    "Add a collaborator to an Airtable base.\n\nUse this tool to add a new collaborator to a specified Airtable base.",
  toolkit: {
    name: "AirtableApi",
    description:
      "Tools that enable LLMs to interact directly with the Airtable API.",
    version: "4.0.0",
  },
  input: {
    parameters: [
      {
        name: "mode",
        required: true,
        description:
          "Operation mode: 'get_request_schema' returns the OpenAPI spec for the request body, 'execute' performs the actual operation",
        value_schema: {
          val_type: "string",
          enum: ["get_request_schema", "execute"],
        },
        inferrable: true,
      },
      {
        name: "base_id",
        required: false,
        description:
          "The ID of the Airtable base to which the collaborator will be added.",
        value_schema: {
          val_type: "string",
        },
        inferrable: true,
      },
      {
        name: "request_body",
        required: false,
        description: "Stringified JSON representing the request body.",
        value_schema: {
          val_type: "string",
        },
        inferrable: true,
      },
    ],
  },
  output: {
    available_modes: ["value", "error"],
    description: "Response from the API endpoint 'add-base-collaborator'.",
    value_schema: {
      val_type: "json",
    },
  },
  requirements: {
    met: true,
    authorization: {
      id: "arcade-airtable",
      provider_id: "airtable",
      provider_type: "oauth2",
      oauth2: {
        scopes: ["workspacesAndBases:write"],
      },
      status: "active",
    },
  },
};

const mockGoogleCalendarTool: ArcadeToolsResponse["items"][0] = {
  fully_qualified_name: "GoogleCalendar.CreateEvent@1.0.0",
  qualified_name: "GoogleCalendar.CreateEvent",
  name: "CreateEvent",
  description: "Create a new calendar event.",
  toolkit: {
    name: "GoogleCalendar",
    description: "Tools for interacting with Google Calendar.",
    version: "1.0.0",
  },
  input: {
    parameters: [
      {
        name: "title",
        required: true,
        description: "The title of the event.",
        value_schema: {
          val_type: "string",
        },
        inferrable: true,
      },
      {
        name: "start_time",
        required: true,
        description: "The start time of the event.",
        value_schema: {
          val_type: "string",
        },
        inferrable: true,
      },
      {
        name: "attendees",
        required: false,
        description: "List of attendee emails.",
        value_schema: {
          val_type: "array",
          inner_val_type: "string",
        },
        inferrable: true,
      },
    ],
  },
  output: {
    available_modes: ["value", "error"],
    description: "The created event.",
    value_schema: {
      val_type: "json",
    },
  },
  requirements: {
    met: true,
    authorization: {
      id: "arcade-google",
      provider_id: "google",
      provider_type: "oauth2",
      oauth2: {
        scopes: [
          "https://www.googleapis.com/auth/calendar",
          "https://www.googleapis.com/auth/calendar.events",
        ],
      },
      status: "active",
    },
    secrets: [
      {
        key: "GOOGLE_CLIENT_ID",
        met: true,
      },
    ],
  },
};

const mockToolWithSecrets: ArcadeToolsResponse["items"][0] = {
  fully_qualified_name: "Stripe.CreatePayment@2.0.0",
  qualified_name: "Stripe.CreatePayment",
  name: "CreatePayment",
  description: "Create a new payment.",
  toolkit: {
    name: "Stripe",
    description: "Payment processing tools.",
    version: "2.0.0",
  },
  input: {
    parameters: [
      {
        name: "amount",
        required: true,
        description: "Amount in cents.",
        value_schema: {
          val_type: "integer",
        },
        inferrable: true,
      },
    ],
  },
  output: {
    available_modes: ["value", "error"],
    description: "Payment result.",
    value_schema: {
      val_type: "json",
    },
  },
  requirements: {
    met: false,
    secrets: [
      {
        key: "STRIPE_API_KEY",
        met: false,
        status_reason: "Secret not configured",
      },
      {
        key: "STRIPE_WEBHOOK_SECRET",
        met: false,
        status_reason: "Secret not configured",
      },
    ],
  },
};

// ============================================================================
// Tests
// ============================================================================

describe("ArcadeApiSource", () => {
  let mockFetch: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockFetch = vi.fn();
  });

  describe("constructor and configuration", () => {
    it("should create source with default page size", () => {
      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "test-key",
        fetchFn: mockFetch,
      });
      expect(source).toBeInstanceOf(ArcadeApiSource);
    });

    it("should normalize base URL with trailing slash", () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(createMockArcadeResponse([])),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev/",
        apiKey: "test-key",
        fetchFn: mockFetch,
      });

      source.fetchAllTools();

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("https://api.arcade.dev/v1/tools"),
        expect.any(Object)
      );
    });

    it("should handle base URL with /v1 suffix", () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(createMockArcadeResponse([])),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev/v1",
        apiKey: "test-key",
        fetchFn: mockFetch,
      });

      source.fetchAllTools();

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("https://api.arcade.dev/v1/tools"),
        expect.any(Object)
      );
    });

    it("should cap page size at maximum", () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(createMockArcadeResponse([])),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "test-key",
        pageSize: 1500, // Over max of 1000
        fetchFn: mockFetch,
      });

      source.fetchAllTools();

      const calledUrl = mockFetch.mock.calls[0]?.[0] as string;
      expect(calledUrl).toContain("limit=1000"); // Capped at 1000
    });
  });

  describe("fetchAllTools", () => {
    it("should fetch and transform tools correctly", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve(
            createMockArcadeResponse([mockAirtableTool, mockGoogleCalendarTool])
          ),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "test-key",
        fetchFn: mockFetch,
      });

      const tools = await source.fetchAllTools();

      expect(tools).toHaveLength(2);

      // Check first tool transformation
      const airtableTool = tools[0];
      expect(airtableTool).toEqual({
        name: "AddBaseCollaborator",
        qualifiedName: "AirtableApi.AddBaseCollaborator",
        fullyQualifiedName: "AirtableApi.AddBaseCollaborator@4.0.0",
        description: expect.stringContaining("Add a collaborator"),
        toolkitDescription: expect.stringContaining("Airtable API"),
        parameters: [
          {
            name: "mode",
            type: "string",
            innerType: undefined,
            required: true,
            description: expect.stringContaining("Operation mode"),
            enum: ["get_request_schema", "execute"],
            inferrable: true,
          },
          {
            name: "base_id",
            type: "string",
            innerType: undefined,
            required: false,
            description: expect.stringContaining("ID of the Airtable base"),
            enum: null,
            inferrable: true,
          },
          {
            name: "request_body",
            type: "string",
            innerType: undefined,
            required: false,
            description: expect.stringContaining("Stringified JSON"),
            enum: null,
            inferrable: true,
          },
        ],
        auth: {
          providerId: "airtable",
          providerType: "oauth2",
          scopes: ["workspacesAndBases:write"],
        },
        secrets: [],
        output: {
          type: "json",
          description: expect.stringContaining("add-base-collaborator"),
        },
      });
    });

    it("should handle tools with array parameters", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve(createMockArcadeResponse([mockGoogleCalendarTool])),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "test-key",
        fetchFn: mockFetch,
      });

      const tools = await source.fetchAllTools();
      const attendeesParam = tools[0]?.parameters.find(
        (p) => p.name === "attendees"
      );

      expect(attendeesParam).toEqual({
        name: "attendees",
        type: "array",
        innerType: "string",
        required: false,
        description: "List of attendee emails.",
        enum: null,
        inferrable: true,
      });
    });

    it("should extract secrets from requirements", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve(createMockArcadeResponse([mockToolWithSecrets])),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "test-key",
        fetchFn: mockFetch,
      });

      const tools = await source.fetchAllTools();

      expect(tools[0]?.secrets).toEqual([
        "STRIPE_API_KEY",
        "STRIPE_WEBHOOK_SECRET",
      ]);
    });

    it("should filter by toolkit ID client-side", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve(
            createMockArcadeResponse([
              mockAirtableTool,
              mockGoogleCalendarTool,
              mockToolWithSecrets,
            ])
          ),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "test-key",
        fetchFn: mockFetch,
      });

      const tools = await source.fetchAllTools({ toolkitId: "GoogleCalendar" });

      expect(tools).toHaveLength(1);
      expect(tools[0]?.qualifiedName).toBe("GoogleCalendar.CreateEvent");
    });

    it("should filter by toolkit ID case-insensitively", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve(createMockArcadeResponse([mockGoogleCalendarTool])),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "test-key",
        fetchFn: mockFetch,
      });

      const tools = await source.fetchAllTools({ toolkitId: "googlecalendar" });

      expect(tools).toHaveLength(1);
    });

    it("should filter by version", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve(
            createMockArcadeResponse([
              mockAirtableTool, // @4.0.0
              mockGoogleCalendarTool, // @1.0.0
              mockToolWithSecrets, // @2.0.0
            ])
          ),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "test-key",
        fetchFn: mockFetch,
      });

      const tools = await source.fetchAllTools({ version: "4.0.0" });

      expect(tools).toHaveLength(1);
      expect(tools[0]?.fullyQualifiedName).toBe(
        "AirtableApi.AddBaseCollaborator@4.0.0"
      );
    });
  });

  describe("pagination", () => {
    it("should handle pagination correctly", async () => {
      // First page
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve({
            items: [mockAirtableTool],
            limit: 1,
            offset: 0,
            total_count: 2,
          }),
      });

      // Second page
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve({
            items: [mockGoogleCalendarTool],
            limit: 1,
            offset: 1,
            total_count: 2,
          }),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "test-key",
        pageSize: 1, // Force pagination
        fetchFn: mockFetch,
      });

      const tools = await source.fetchAllTools();

      expect(mockFetch).toHaveBeenCalledTimes(2);
      expect(tools).toHaveLength(2);
    });

    it("should stop pagination when no more items", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve({
            items: [mockAirtableTool],
            limit: 100,
            offset: 0,
            total_count: 100, // Says 100 but only returns 1
          }),
      });

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve({
            items: [],
            limit: 100,
            offset: 1,
            total_count: 100,
          }),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "test-key",
        fetchFn: mockFetch,
      });

      const tools = await source.fetchAllTools();

      expect(tools).toHaveLength(1);
    });
  });

  describe("fetchToolsByToolkit", () => {
    it("should call fetchAllTools with toolkit filter", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve(createMockArcadeResponse([mockGoogleCalendarTool])),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "test-key",
        fetchFn: mockFetch,
      });

      const tools = await source.fetchToolsByToolkit("GoogleCalendar");

      expect(tools).toHaveLength(1);
      expect(tools[0]?.qualifiedName).toBe("GoogleCalendar.CreateEvent");
    });
  });

  describe("isAvailable", () => {
    it("should return true when API is accessible", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(createMockArcadeResponse([])),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "test-key",
        fetchFn: mockFetch,
      });

      const available = await source.isAvailable();
      expect(available).toBe(true);
    });

    it("should return false when API returns error", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 401,
        statusText: "Unauthorized",
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "test-key",
        fetchFn: mockFetch,
      });

      const available = await source.isAvailable();
      expect(available).toBe(false);
    });

    it("should return false when fetch throws", async () => {
      mockFetch.mockRejectedValueOnce(new Error("Network error"));

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "test-key",
        fetchFn: mockFetch,
      });

      const available = await source.isAvailable();
      expect(available).toBe(false);
    });
  });

  describe("error handling", () => {
    it("should throw on API error with JSON detail", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 401,
        statusText: "Unauthorized",
        headers: new Map([["content-type", "application/json"]]),
        json: () => Promise.resolve({ detail: "Invalid API key" }),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "invalid-key",
        fetchFn: mockFetch,
      });

      await expect(source.fetchAllTools()).rejects.toThrow(
        "Arcade API error 401: Invalid API key"
      );
    });

    it("should throw on API error without JSON detail", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: "Internal Server Error",
        headers: new Map([["content-type", "text/plain"]]),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "test-key",
        fetchFn: mockFetch,
      });

      await expect(source.fetchAllTools()).rejects.toThrow(
        "Arcade API error 500: Internal Server Error"
      );
    });

    it("should throw on invalid response schema", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ invalid: "response" }),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "test-key",
        fetchFn: mockFetch,
      });

      await expect(source.fetchAllTools()).rejects.toThrow(
        "Invalid Arcade API response"
      );
    });
  });

  describe("authorization header", () => {
    it("should include Bearer token in request", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(createMockArcadeResponse([])),
      });

      const source = new ArcadeApiSource({
        baseUrl: "https://api.arcade.dev",
        apiKey: "my-secret-key",
        fetchFn: mockFetch,
      });

      await source.fetchAllTools();

      expect(mockFetch).toHaveBeenCalledWith(expect.any(String), {
        headers: {
          Authorization: "Bearer my-secret-key",
          Accept: "application/json",
        },
      });
    });
  });
});

describe("Factory functions", () => {
  it("createArcadeApiSource should create source instance", () => {
    const source = createArcadeApiSource({
      baseUrl: "https://api.arcade.dev",
      apiKey: "test-key",
    });
    expect(source).toBeInstanceOf(ArcadeApiSource);
  });

  it("createProductionArcadeApiSource should use default URL", () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(createMockArcadeResponse([])),
    });

    const source = createProductionArcadeApiSource("test-key", {
      fetchFn: mockFetch,
    });

    source.fetchAllTools();

    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining("https://api.arcade.dev/v1/tools"),
      expect.any(Object)
    );
  });
});
