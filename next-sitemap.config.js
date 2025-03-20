/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: process.env.SITE_URL || "https://docs.arcade.dev",
  generateRobotsTxt: true,
  sitemapSize: 3000,
};
