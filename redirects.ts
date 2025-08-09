import { config } from './config';

export type Redirect = [string, string];

// Don't forget to apply any changes to public/_redirects file too
// NextJS redirects don't work in Netlify for some reason
export const tempRedirects: Redirect[] = [
  ['/', '/home/'],
  ['/home/quickstart', '/home/getting-started/quickstart'],
  [
    '/home/build-tools/create-a-toolkit',
    '/home/authoring-tools/build-tools/create-a-toolkit',
  ],
  ['/discord', config.company.discord],
  ['/github', config.engine.github],
  ['/dockerhub', config.engine.dockerhub],
  ['/releases', config.engine.releases],
  ['/contributing', config.engine.contributing],
  ['/examples', config.engine.examples],
];
