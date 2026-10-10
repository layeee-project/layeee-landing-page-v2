import DocsArticle from "@/components/docs/DocsArticle";
import { docPages } from "@/data/docs";

/* /docs shows the first docs page */
export default function DocsHome() {
  return <DocsArticle page={docPages[0]} />;
}
