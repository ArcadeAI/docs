const { config } = require("./config");

// Don't forget to apply any changes to public/_redirects file too
// NextJS redirects don't work in Netlify for some reason

exports.tempRedirects = [
  ["/", "/home/"],
  ["/discord", config.company.discord],
  ["/github", config.engine.github],
  ["/dockerhub", config.engine.dockerhub],
  ["/releases", config.engine.releases],
  ["/contributing", config.engine.contributing],
  ["/examples", config.engine.examples],
];
