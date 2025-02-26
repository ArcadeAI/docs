## Add community toolkit "your-toolkit-name"

## Toolkit Checklist

- [ ] The toolkit is published to PyPI
- [ ] The toolkit source code is hosted in a publicly accessible repository on a supported version control platform (e.g., GitHub, GitLab, etc.)
- [ ] The toolkit is licensed under an open source license

## PR Checklist

- [ ] I have determined the appropriate category for the toolkit, e.g., `productivity`, `social-communication`, `entertainment`, `development`, `automation`, etc.
- [ ] I create a new file located at `pages/toolkits/<category>/my-toolkit-name.mdx` that uses the [Community Toolkit Template](https://github.com/ArcadeAI/docs/blob/main/pages/toolkits/community-toolkit-template.mdx)
- [ ] I have added the toolkit to the `pages/toolkits/<category>/_meta.ts` file
- [ ] I have added the toolkit to the `src/components/custom/Toolkits/toolkits-config.ts` file. For the toolkit's image,
  - [ ] I am using the default image `public/images/icons/community-contributed.png` OR
  - [ ] I am using an image that is smaller than 5 KB that I have added at `public/images/icons/<image-name>.png`
