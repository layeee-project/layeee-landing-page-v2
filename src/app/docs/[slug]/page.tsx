import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DocsArticle from "@/components/docs/DocsArticle";
import { docPages } from "@/data/docs";

type Props = { params: Promise<{ slug: string }> };

const findPage = (slug: string) =>
  docPages.find((p) => p.slug && p.slug === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return docPages.filter((p) => p.slug).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = findPage((await params).slug);
  return page ? { title: page.title, description: page.lead } : {};
}

export default async function DocsPage({ params }: Props) {
  const page = findPage((await params).slug);
  if (!page) notFound();
  return <DocsArticle page={page} />;
}
