import MaterialCard from "./MaterialCard";
import PlanCard from "./PlanCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { materials } from "@/data/materials";
import { plans } from "@/data/plans";

export default function Ways() {
  return (
    <Section id="ways" labelledBy="ways-title">
      <SectionHeading
        id="ways-title"
        title="Print your way."
        lead="Print on your own S1, or send the job to a printer nearby. Pricing is not published yet."
        align="center"
      />

      <div className="mt-[clamp(32px,4.4vw,56px)] grid grid-cols-2 gap-[clamp(14px,1.6vw,20px)] max-[860px]:grid-cols-1">
        {plans.map((p) => (
          <PlanCard key={p.id} plan={p} />
        ))}
      </div>

      <div className="mt-[clamp(40px,5vw,64px)]" aria-labelledby="mat-title">
        <h3 id="mat-title" className="text-[clamp(22px,1.72vw,25px)] font-medium">
          Materials
        </h3>
        <div className="mt-[clamp(16px,1.7vw,22px)] grid grid-cols-3 gap-[clamp(14px,1.6vw,20px)] max-[860px]:grid-cols-1">
          {materials.map((m) => (
            <MaterialCard key={m.name} material={m} />
          ))}
        </div>
        <p className="mt-[18px] text-[clamp(13.5px,1.05vw,15px)] text-muted">
          Material notes are general guidance. Settings vary by model.
        </p>
      </div>
    </Section>
  );
}
