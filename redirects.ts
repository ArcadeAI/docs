import { config } from "./config";

export type Redirect = [string, string];

// Don't forget to apply any changes to public/_redirects file too
// NextJS redirects don't work in Netlify for some reason
export const tempRedirects: Redirect[] = [
  ["/", "/home/"],
  ["/discord", config.company.discord],
  ["/github", config.engine.github],
  ["/dockerhub", config.engine.dockerhub],
  ["/releases", config.engine.releases],
  ["/contributing", config.engine.contributing],
  ["/examples", config.engine.examples],
];
