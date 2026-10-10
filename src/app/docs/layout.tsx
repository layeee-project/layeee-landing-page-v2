import type { Metadata } from "next";
import DocsHeader from "@/components/docs/DocsHeader";
import DocsSidebar from "@/components/docs/DocsSidebar";

export const metadata: Metadata = {
  title: { default: "Docs | Layeee", template: "%s | Layeee Docs" },
  description: "How to find, edit and print designs with the Layeee app and the S1.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DocsHeader />
      <div className="grid grid-cols-[264px_minmax(0,1fr)] max-[900px]:grid-cols-1">
        <DocsSidebar />
        {children}
      </div>
    </>
  );
}
