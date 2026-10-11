import Icon from "@/components/ui/Icon";
import type { FaqEntry } from "@/data/faqs";

export default function FaqItem({ faq }: { faq: FaqEntry }) {
  return (
    <details className="group border-b border-line">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-1 py-5 text-[clamp(17px,1.33vw,19px)] font-medium [&::-webkit-details-marker]:hidden">
        {faq.question}
        <Icon
          name="plus"
          className="size-[18px] shrink-0 text-muted transition-transform group-open:rotate-45 group-open:text-accent-ink"
        />
      </summary>
      <p className="max-w-[68ch] px-1 pb-[22px] text-[clamp(15.5px,1.21vw,17px)] text-muted">
        {faq.answer}
      </p>
    </details>
  );
}
