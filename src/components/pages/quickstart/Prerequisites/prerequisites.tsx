import { useRouter } from "next/router";
import Python from "./python.mdx";
import Typescript from "./typescript.mdx";
import Openai from "./openai.mdx";

export function Prerequisites() {
  const router = useRouter();
  const lang = router.query.lang as string;

  if (lang === "python") {
    return <Python />;
  }

  if (lang === "typescript") {
    return <Typescript />;
  }

  if (lang === "openai") {
    return <Openai />;
  }

  return <Python />;
}
