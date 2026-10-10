import FeatureCard from "./FeatureCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { features } from "@/data/features";

export default function Features() {
  return (
    <Section id="platform" labelledBy="features-title">
      <SectionHeading
        id="features-title"
        title="Inside the app"
        lead="Everything between finding a design and holding the part."
        align="center"
      />
      <div className="mt-14 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line max-[980px]:grid-cols-2 max-[600px]:grid-cols-1">
        {features.map((f) => (
          <FeatureCard key={f.title} feature={f} />
        ))}
      </div>
    </Section>
  );
}
