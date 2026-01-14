# Arcade Documentation Style Guide

This guide covers writing standards for Arcade documentation. It applies to both human contributors and AI assistants.

Vale handles mechanical style checks (grammar, passive voice, etc.). This guide covers what Vale cannot: voice, structure, terminology, and judgment calls.

## Voice and Tone

### Be direct and confident

- **Do:** "Create a tool by adding the `@tool` decorator"
- **Don't:** "You might want to consider creating a tool by possibly adding the `@tool` decorator"

### Write for practitioners, not beginners

Assume readers know programming fundamentals. Don't explain what a function is, but do explain Arcade-specific concepts.

### Use "you" for the reader

- **Do:** "You can configure the server with environment variables" or "Configure the server with environment variables"
- **Don't:** "Users can configure the server..." or "One can configure..."

### Use "we" for Arcade

- **Do:** "We contributed elicitation to the MCP standard."
- **Don't:** "We will now build our sample app..." or "Let's get started!" (These refer to the reader like they are part of the Arcade team.)

### Avoid marketing language

Documentation is not a sales pitch. State capabilities factually.

- **Do:** "Arcade handles OAuth token refresh automatically"
- **Don't:** "Arcade's amazing OAuth system seamlessly handles token refresh for you!"

### Explain unfamiliar TypeScript terms

Many TypeScript users are familiar with JavaScript or Python and may need things like "zod" explained on the spot.

## Arcade Terminology

### Correct terms

| Use                | Don't use                                            |
| ------------------ | ---------------------------------------------------- |
| MCP server         | MCP Server (unless starting a sentence), integration |
| tool               | Tool (unless starting a sentence)                    |
| Arcade Engine      | Arcade engine, the engine                            |
| auth provider      | authentication provider (too long)                   |
| user authorization | user auth (spell it out)                             |

### Product names (always capitalize)

- Arcade
- Arcade Cloud
- Arcade Engine
- MCP (Model Context Protocol)

### Technical terms (lowercase unless starting sentence)

- tool, tools
- server, servers
- auth provider
- secret, secrets
- context

## Structure

### Default Page Structure (not for API references or overview pages)

Each page should have a a 10/20/70 format:

- Open with a sentence or two briefly covering what the page explains.
- The first paragraph should answer:
  - Who this page was written for
  - What it's about
  - Why the information is useful
  - When you'll need it
  - Where you'll be using it
  - How to move forward
- The remaining content should take about 70% of the page and expand on the promise of the first paragraph

### Tutorial and Quickstart structure

1. **Title** - What this page covers (H1)
2. **Intro line** - One sentence explaining what the reader will learn
3. **Prerequisites** (if applicable) - What the reader needs before starting
4. **Main content** - Organized with H2/H3 headings
5. **Next steps** (if applicable) - Where to go from here

### Headings

- Use sentence case: "Create an MCP server" not "Create an MCP Server"
- Be specific: "Configure OAuth scopes" not "Configuration"
- Start with a verb for task-based docs: "Create...", "Configure...", "Deploy..."

### Code examples

- Always show complete, runnable examples when possible
- Include imports
- Use realistic variable names, not `foo` or `bar`
- Add comments only when the code isn't self-explanatory

```python
# Good
from arcade.sdk import tool

@tool
def send_email(to: str, subject: str, body: str) -> str:
    """Send an email to the specified recipient."""
    # Implementation here
    return f"Email sent to {to}"

# Bad
from arcade.sdk import tool

@tool
def do_thing(x: str) -> str:  # This does the thing
    """Do the thing."""
    return x  # Return the thing
```

### Lists

- Use bullet points for unordered items
- Use numbered lists only for sequential steps
- Keep list items parallel in structure

## What to include

### Prerequisites

List what the reader needs:

- Required accounts (Arcade account, third-party service accounts)
- Required tools (CLI, SDK versions)
- Required knowledge (link to other docs if needed)

### Error handling

When showing code that can fail, show how to handle errors:

```python
try:
    result = client.tools.execute(tool_name="Gmail.SendEmail", inputs={...})
except ArcadeError as e:
    print(f"Tool execution failed: {e}")
```

### Security considerations

When covering auth, secrets, or permissions, include security notes:

- Where credentials should be stored
- What scopes/permissions are actually needed (principle of least privilege)
- Any risks to be aware of

### Next steps

If there is anything that people are expected to progress to, include links to those pages here.

### Related content

Link to related useful materials:

- Resources—Cheat sheets, sample apps
- Related Guides and Tutorials
- Further reading: blog posts, concepts

## What to avoid

### Don't explain the obvious

```python
# Bad - the comment adds nothing
# Import the tool decorator
from arcade.sdk import tool
```

### Don't use placeholder URLs

- **Do:** Use `https://example.com` or realistic-looking URLs
- **Don't:** Use `https://your-url-here.com` or `<INSERT_URL>`

### Don't make promises about timing

- **Do:** "The token refreshes automatically when it expires"
- **Don't:** "The token refreshes automatically in about 5 minutes"

### Don't dumb it down.

Avoid using language like "simple," "easy," "basic." It makes PhDs feel like the tool is tool dumb and inexperienced engineers lose heart when they start to struggle although "it says this is easy..." Treat the reader and the tool with the neutral respect and dignity they both deserve. Don't infantalize them.

- **Do:** "Add the decorator to your function"
- **Don't:** "Simply add the decorator to your function"

### Link to official docs rather than over explaining someone else's code/project/library

When explaining how something works, keep it brief and link out to the official docs.

## MDX-specific guidelines

### Callouts

Use the appropriate callout type:

- `<Note>` - Additional helpful information
- `<Warning>` - Something that could cause problems
- `<Tip>` - Optional improvement or shortcut

### Links

- Use relative links for internal docs: `[auth providers](/references/auth-providers)`
- Use descriptive link text: "See [configuring OAuth](/guides/oauth)" not "See [here](/guides/oauth)"

### Code blocks

- Always specify the language: ` ```python `, ` ```typescript `, ` ```bash `
- Use `title="filename.py"` when showing file contents
- Use `{1,3-5}` to highlight specific lines when needed

## When fixing Vale issues

If you're an AI assistant fixing Vale-flagged issues:

1. **Preserve technical accuracy** - Don't change code or technical details
2. **Keep the author's intent** - Reword, don't rewrite
3. **Fix only what's flagged** - Don't make unrelated improvements
4. **For passive voice** - Only fix if active voice is clearer; passive is sometimes better for technical writing
5. **For toxic language flags** - Always fix these, even if it means rewording significantly
