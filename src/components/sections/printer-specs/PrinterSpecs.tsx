import SpecCode from "./SpecCode";
import InlineLink from "@/components/ui/InlineLink";
import PillList from "@/components/ui/PillList";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { materialNames } from "@/data/materials";

/* the "Meet the S1" section */
export default function PrinterSpecs() {
  return (
    <Section
      id="s1"
      labelledBy="s1-title"
      className="grid grid-cols-2 items-center gap-[clamp(32px,5vw,88px)] max-[980px]:grid-cols-1"
    >
      <div>
        <SectionHeading
          id="s1-title"
          eyebrow="The printer"
          title="Meet the S1."
          lead="An FDM printer sized for the desk. It prints the designs you find and build in the app."
        />
        <PillList
          items={materialNames}
          label="Supported materials"
          className="my-[clamp(18px,2vw,26px)]"
        />
        <InlineLink href="#ways">Ways to print</InlineLink>
      </div>
      <SpecCode />
    </Section>
  );
}
