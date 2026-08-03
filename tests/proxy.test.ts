import { NextRequest } from "next/server";
import { expect, test } from "vitest";
import { proxy } from "../proxy";

const requestFor = (pathname: string) =>
  new NextRequest(`https://docs.example.test${pathname}`);

test.each([
  ["/es/guides/quickstart", "/en/guides/quickstart"],
  ["/pt-BR/guides/quickstart", "/en/guides/quickstart"],
  ["/guides/quickstart", "/en/guides/quickstart"],
  ["/", "/en/home"],
])("redirects %s to the English route %s", (pathname, destination) => {
  const response = proxy(requestFor(pathname));

  expect(response?.status).toBe(307);
  expect(response?.headers.get("location")).toBe(
    `https://docs.example.test${destination}`
  );
});

test("passes English routes through", () => {
  const response = proxy(requestFor("/en/guides/quickstart"));

  expect(response?.status).toBe(200);
  expect(response?.headers.get("location")).toBeNull();
});
