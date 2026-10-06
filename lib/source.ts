import { loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/plugins/lucide-icons";
import { docs } from "@/.source/server";

export const source = loader({
  baseUrl: "/en",
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});
