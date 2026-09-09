# Auto-approvable changes in ArcadeAI/docs

## Why auto approve

Docs are a low-risk surface area. The main priority of our documentation is to
help our users and their agents understand how to operate Arcade in the way that
meets their needs.

## Proposed auto approve conditions

### Low risk (auto-approvable)

- Human-authored PRs under 300 lines with no new routes

### Medium risk (human review: any team member)

- Bot-authored PRs
- Human-authored PRs introducing a new page or over 300 lines

### Higher risk (human review: codeowner)

- Modifications to the toolkit gen pipeline
- Modifications to GitHub Actions
- Modifications to `package.json`

## As in other repositories

- Merging remains a human action
- Approving a PR means you co-sign its contents
- If you aren't sure your change is accurate, tag a subject-matter expert for
  review!
