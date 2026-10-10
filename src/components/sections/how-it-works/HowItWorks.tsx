import PrintDemo from "./PrintDemo";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { howSteps } from "@/data/how-it-works";
import { strokeIcon } from "@/lib/ui";

export default function HowItWorks() {
  return (
    <Section
      id="how"
      labelledBy="how-title"
      className="grid grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] items-center gap-[clamp(32px,5vw,88px)] max-[1100px]:grid-cols-1"
    >
      <div>
        <SectionHeading
          id="how-title"
          eyebrow="How it works"
          title="From idea to the first layer."
          lead="Pick a model, adjust it, choose a printer, and watch the part build up layer by layer."
        />
        <ul className="mt-[34px] grid gap-5">
          {howSteps.map((step) => (
            <li key={step.title} className="grid grid-cols-[40px_1fr] gap-3.5">
              <svg
                {...strokeIcon}
                className="size-10 rounded-[10px] bg-accent-soft p-[9px] text-accent-ink"
              >
                {step.icon}
              </svg>
              <div>
                <h3 className="text-[16.5px] font-semibold">{step.title}</h3>
                <p className="text-[14.5px] text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <PrintDemo />
    </Section>
  );
}
