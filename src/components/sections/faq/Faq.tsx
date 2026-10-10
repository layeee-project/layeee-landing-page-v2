import FaqItem from "./FaqItem";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";

export default function Faq() {
  return (
    <Section
      id="faq"
      labelledBy="faq-title"
      className="grid grid-cols-[minmax(0,.7fr)_minmax(0,1.3fr)] items-start gap-[clamp(32px,5vw,88px)] max-[900px]:grid-cols-1"
    >
      <div>
        <SectionHeading id="faq-title" title="Questions" />
        <p className="mt-3.5 text-muted">
          Need a hand? Ask in the community from the footer.
        </p>
      </div>
      <div className="border-t border-line">
        {faqs.map((f) => (
          <FaqItem key={f.question} faq={f} />
        ))}
      </div>
    </Section>
  );
}
