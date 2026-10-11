import type { Metadata } from "next";
import DocsHeader from "@/components/docs/DocsHeader";
import DocsSidebar from "@/components/docs/DocsSidebar";
import Footer from "@/components/layout/Footer";

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
      {/* sits above the fixed footer and scrolls away to uncover it */}
      <div className="relative z-10 grid grid-cols-[264px_minmax(0,1fr)] bg-bg max-[900px]:grid-cols-1">
        <DocsSidebar />
        {children}
      </div>
      <Footer />
    </>
  );
}
