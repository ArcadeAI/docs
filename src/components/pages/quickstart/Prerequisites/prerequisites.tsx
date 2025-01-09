import { useRouter } from "next/router";
import Python from "./python.mdx";
import Cli from "./cli.mdx";
import Typescript from "./typescript.mdx";
import Openai from "./openai.mdx";
import Rest from "./rest.mdx";

export function Prerequisites() {
  const router = useRouter();
  const lang = router.query.lang as string;

  if (lang === "cli") {
    return <Cli />;
  }

  if (lang === "python") {
    return <Python />;
  }

  if (lang === "typescript") {
    return <Typescript />;
  }

  if (lang === "openai") {
    return <Openai />;
  }

  if (lang === "rest") {
    return <Rest />;
  }

  return <Python />;
}
