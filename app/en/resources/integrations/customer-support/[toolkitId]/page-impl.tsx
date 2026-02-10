import { createToolkitDocsPage } from "@/app/en/resources/integrations/_lib/toolkit-docs-page";

export const dynamicParams = false;

const { Page, generateMetadata, generateStaticParams } =
  createToolkitDocsPage("customer-support");

export { generateMetadata, generateStaticParams };

export default Page;
