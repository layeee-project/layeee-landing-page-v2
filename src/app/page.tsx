import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProductFrame from "@/components/sections/product-frame/ProductFrame";
import HowItWorks from "@/components/sections/how-it-works/HowItWorks";
import Features from "@/components/sections/features/Features";
import Ideas from "@/components/sections/ideas/Ideas";
import PrinterSpecs from "@/components/sections/printer-specs/PrinterSpecs";
import Ways from "@/components/sections/ways/Ways";
import Anywhere from "@/components/sections/anywhere/Anywhere";
import Faq from "@/components/sections/faq/Faq";
import Closing from "@/components/sections/Closing";

export default function Page() {
  return (
    <div className="overflow-clip">
      <Header />
      <main
        className="relative z-10 bg-bg selection:bg-[#e69a5c] selection:text-black"
        id="main"
      >
        <Hero />
        <ProductFrame />
        <HowItWorks />
        <Features />
        <Ideas />
        <PrinterSpecs />
        <Ways />
        <Anywhere />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
