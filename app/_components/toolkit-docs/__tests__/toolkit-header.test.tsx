import { describe, expect, it } from "vitest";

import type {
  ToolkitAuth,
  ToolkitCategory,
  ToolkitHeaderProps,
  ToolkitMetadata,
  ToolkitType,
} from "../types";

/**
 * Unit tests for ToolkitHeader types and props validation
 *
 * Note: Component rendering tests require additional dependencies
 * (@testing-library/react). These tests focus on type validation
 * and prop structure.
 */

describe("ToolkitHeaderProps type validation", () => {
  const defaultMetadata: ToolkitMetadata = {
    category: "development",
    iconUrl: "https://example.com/icon.svg",
    isBYOC: false,
    isPro: false,
    type: "arcade",
    docsLink: "https://docs.arcade.dev/github",
  };

  const defaultAuth: ToolkitAuth = {
    type: "oauth2",
    providerId: "github",
    allScopes: ["repo", "user:email"],
  };

  it("validates required props structure", () => {
    const props: ToolkitHeaderProps = {
      id: "Github",
      label: "GitHub",
      description: "GitHub repository tools",
      metadata: defaultMetadata,
      auth: defaultAuth,
    };

    expect(props.id).toBe("Github");
    expect(props.label).toBe("GitHub");
    expect(props.description).toBe("GitHub repository tools");
    expect(props.metadata).toEqual(defaultMetadata);
    expect(props.auth).toEqual(defaultAuth);
  });

  it("validates optional props", () => {
    const props: ToolkitHeaderProps = {
      id: "Github",
      label: "GitHub",
      description: "GitHub repository tools",
      metadata: defaultMetadata,
      auth: defaultAuth,
      version: "1.0.0",
      author: "Custom Author",
      summary: "A summary of the toolkit",
    };

    expect(props.version).toBe("1.0.0");
    expect(props.author).toBe("Custom Author");
    expect(props.summary).toBe("A summary of the toolkit");
  });

  it("allows null description", () => {
    const props: ToolkitHeaderProps = {
      id: "Github",
      label: "GitHub",
      description: null,
      metadata: defaultMetadata,
      auth: defaultAuth,
    };

    expect(props.description).toBeNull();
  });

  it("allows null auth", () => {
    const props: ToolkitHeaderProps = {
      id: "Github",
      label: "GitHub",
      description: "Description",
      metadata: defaultMetadata,
      auth: null,
    };

    expect(props.auth).toBeNull();
  });
});

describe("ToolkitMetadata type validation", () => {
  it("validates all category values", () => {
    const categories: ToolkitCategory[] = [
      "productivity",
      "social",
      "development",
      "entertainment",
      "search",
      "payments",
      "sales",
      "databases",
      "customer-support",
    ];

    for (const category of categories) {
      const metadata: ToolkitMetadata = {
        category,
        iconUrl: "https://example.com/icon.svg",
        isBYOC: false,
        isPro: false,
        type: "arcade",
        docsLink: "https://docs.arcade.dev",
      };
      expect(metadata.category).toBe(category);
    }
  });

  it("validates all type values", () => {
    const types: ToolkitType[] = [
      "arcade",
      "arcade_starter",
      "verified",
      "community",
      "auth",
    ];

    for (const type of types) {
      const metadata: ToolkitMetadata = {
        category: "development",
        iconUrl: "https://example.com/icon.svg",
        isBYOC: false,
        isPro: false,
        type,
        docsLink: "https://docs.arcade.dev",
      };
      expect(metadata.type).toBe(type);
    }
  });

  it("validates boolean flags", () => {
    const metadata: ToolkitMetadata = {
      category: "development",
      iconUrl: "https://example.com/icon.svg",
      isBYOC: true,
      isPro: true,
      type: "arcade",
      docsLink: "https://docs.arcade.dev",
      isComingSoon: true,
      isHidden: false,
    };

    expect(metadata.isBYOC).toBe(true);
    expect(metadata.isPro).toBe(true);
    expect(metadata.isComingSoon).toBe(true);
    expect(metadata.isHidden).toBe(false);
  });
});

describe("ToolkitAuth type validation", () => {
  it("validates oauth2 auth type", () => {
    const auth: ToolkitAuth = {
      type: "oauth2",
      providerId: "github",
      allScopes: ["repo", "user:email"],
    };

    expect(auth.type).toBe("oauth2");
    expect(auth.providerId).toBe("github");
    expect(auth.allScopes).toEqual(["repo", "user:email"]);
  });

  it("validates api_key auth type", () => {
    const auth: ToolkitAuth = {
      type: "api_key",
      providerId: null,
      allScopes: [],
    };

    expect(auth.type).toBe("api_key");
    expect(auth.providerId).toBeNull();
    expect(auth.allScopes).toEqual([]);
  });

  it("validates mixed auth type", () => {
    const auth: ToolkitAuth = {
      type: "mixed",
      providerId: "github",
      allScopes: ["repo"],
    };

    expect(auth.type).toBe("mixed");
    expect(auth.providerId).toBe("github");
    expect(auth.allScopes).toEqual(["repo"]);
  });

  it("validates none auth type", () => {
    const auth: ToolkitAuth = {
      type: "none",
      providerId: null,
      allScopes: [],
    };

    expect(auth.type).toBe("none");
  });

  it("validates empty scopes array", () => {
    const auth: ToolkitAuth = {
      type: "oauth2",
      providerId: "custom",
      allScopes: [],
    };

    expect(auth.allScopes).toEqual([]);
    expect(auth.allScopes.length).toBe(0);
  });

  it("validates multiple scopes", () => {
    const auth: ToolkitAuth = {
      type: "oauth2",
      providerId: "google",
      allScopes: [
        "https://www.googleapis.com/auth/gmail.readonly",
        "https://www.googleapis.com/auth/gmail.send",
        "https://www.googleapis.com/auth/gmail.compose",
      ],
    };

    expect(auth.allScopes.length).toBe(3);
    expect(auth.allScopes).toContain(
      "https://www.googleapis.com/auth/gmail.readonly"
    );
  });
});
