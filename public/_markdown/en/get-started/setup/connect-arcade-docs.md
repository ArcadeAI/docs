---
title: "Agentic Development"
description: "Learn how to speed up your development with agents in your IDEs"
---
[Setup](/en/get-started/setup/api-keys.md)
Connect Arcade docs to your IDE

# Agentic Development

Every page on the Arcade docs site renders as clean markdown. When an AI  or coding assistant visits any docs URL, the site automatically returns `Content-Type: text/markdown` instead of HTML if:

-   The request `User-Agent` header matches a known AI  (Claude, ChatGPT, Cursor, etc.)
-   The request includes the `Accept: text/markdown` header

This means you can point your  directly at any docs page—no need to copy and paste or use the `llms.txt` file. The agent will receive well-formatted markdown out of the box.

For example, you can tell your  to visit `docs.arcade.dev/get-started/quickstarts/call-tool-agent` and it will automatically get the markdown version of that page.

## LLMs.txt

Give your AI IDE access to Arcade.dev’s documentation using the [llms.txt](/llms.txt) file. This allows Claude Code, Cursor, and other AI IDEs to access the documentation and help you write code.

LLMs.txt is a file format that allows you to give your AI IDE access to Arcade.dev’s documentation in a format that the LLM can parse. All you need to do is paste in the content of the file into your IDE’s settings, or reference the docs, for example via [Cursor’s `@docs` annotation](https://cursor.com/docs/context/symbols#docs).

The LLMs.txt files are available at [`/llms.txt`](/llms.txt).

![LLMs.txt example](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcursor-llms-txt.7d1a9738.png&w=3840&q=75)

Learn more about the LLMs.txt file format [here](https://llmstxt.org/) .

Last updated on January 30, 2026

[Get an API key](/en/get-started/setup/api-keys.md)
[Windows environment setup](/en/get-started/setup/windows-environment.md)
