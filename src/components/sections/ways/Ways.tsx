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

      <div className="mt-14 grid grid-cols-2 gap-5 max-[860px]:grid-cols-1">
        {plans.map((p) => (
          <PlanCard key={p.id} plan={p} />
        ))}
      </div>

      <div className="mt-16" aria-labelledby="mat-title">
        <h3 id="mat-title" className="text-[22px] font-medium">
          Materials
        </h3>
        <div className="mt-[22px] grid grid-cols-3 gap-5 max-[860px]:grid-cols-1">
          {materials.map((m) => (
            <MaterialCard key={m.name} material={m} />
          ))}
        </div>
        <p className="mt-[18px] text-[13.5px] text-muted">
          Material notes are general guidance. Settings vary by model.
        </p>
      </div>
    </Section>
  );
}
