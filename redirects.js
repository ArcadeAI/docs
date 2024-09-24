const { config } = require("./config");

// Don't forget to apply any changes to public/_redirects file too
// NextJS redirects don't work in Netlify for some reason

exports.tempRedirects = [
    ["/docs", "/docs/concepts/"],
    ["/docs/", "/docs/concepts/"],
    ["/discord", config.company.discord],
    ["/docs/github", config.engine.github],
    ["/docs/dockerhub", config.engine.dockerhub],
    ["/docs/releases", config.engine.releases],
    ["/docs/contributing", config.engine.contributing],
    ["/docs/examples", config.engine.examples],
    ["/docs/new-issue", config.engine.newIssue],
]
