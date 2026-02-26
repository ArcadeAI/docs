import { createToolkitDocsPage } from "@/app/en/resources/integrations/_lib/toolkit-docs-page";

export const dynamicParams = false;

const { Page, generateMetadata, generateStaticParams } =
  createToolkitDocsPage("databases");

export { generateMetadata, generateStaticParams };

export default Page;
