const {tempRedirects} = require("./redirects");

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
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
