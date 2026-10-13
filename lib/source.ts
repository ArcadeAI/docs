import { type LoaderPlugin, loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/plugins/lucide-icons";
import { docs } from "@/.source/server";

/**
 * A page can have a sidebar label that differs from its H1 (e.g. index pages
 * labelled "Overview"). The label lives in the page frontmatter as
 * `sidebarTitle`; this plugin shows it in the sidebar while the page keeps
 * rendering `title`.
 */
const sidebarTitlePlugin: LoaderPlugin = {
  name: "arcade:sidebar-title",
  transformPageTree: {
    file(node, filePath) {
      if (!filePath) {
        return node;
      }
      const file = this.storage.read(filePath);
      if (file?.format !== "page") {
        return node;
      }
      const { sidebarTitle } = file.data as { sidebarTitle?: unknown };
      if (typeof sidebarTitle === "string" && sidebarTitle.trim()) {
        return { ...node, name: sidebarTitle };
      }
      return node;
    },
  },
};

export const source = loader({
  baseUrl: "/en",
  plugins: [lucideIconsPlugin(), sidebarTitlePlugin],
  source: docs.toFumadocsSource(),
});
