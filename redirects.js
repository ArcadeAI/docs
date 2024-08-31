const { config } = require("./config");

// Don't forget to apply any changes to public/_redirects file too
// NextJS redirects don't work in Netlify for some reason

exports.tempRedirects = [
    ["/engine", "/engine/docs/"],
    ["/engine/", "/engine/docs/"],
    ["/discord", config.company.discord],
    ["/engine/github", config.engine.github],
    ["/engine/dockerhub", config.engine.dockerhub],
    ["/engine/releases", config.engine.releases],
    ["/engine/contributing", config.engine.contributing],
    ["/engine/examples", config.engine.examples],
    ["/engine/new-issue", config.engine.newIssue],
]
