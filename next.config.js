const { tempRedirects } = require("./redirects");

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  codeHighlight: true,
  css: './styles/globals.css',
})

module.exports = withNextra({
  redirects: async () => [
    ...tempRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: false,
    })),
  ]
})
