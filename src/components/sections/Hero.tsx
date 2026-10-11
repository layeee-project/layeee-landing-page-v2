import Button from "@/components/ui/Button";
import ButtonRow from "@/components/ui/ButtonRow";
import PillList from "@/components/ui/PillList";
import Section from "@/components/ui/Section";
import { materialNames } from "@/data/materials";

export default function Hero() {
  return (
    <Section
      labelledBy="hero-title"
      spacing="none"
      className="pt-[clamp(64px,9vw,120px)] pb-[clamp(48px,6vw,80px)] text-left motion-safe:animate-rise"
    >
      <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel py-[5px] pr-[15px] pl-[5px] text-[clamp(13.5px,1.05vw,15px)]">
        <span className="rounded-full bg-accent-soft px-[11px] py-[3px] font-semibold text-accent-ink">
          New
        </span>
        The S1 prints up to 220 × 220 × 250 mm
      </p>
      <h1
        className="mt-[clamp(18px,2vw,26px)] text-[clamp(40px,6.8vw,100px)] font-medium leading-[1.03] tracking-[-0.025em] text-balance"
        id="hero-title"
      >
        Design that delivers
        <br />
        <span className="text-accent">uncommonly good results.</span>
      </h1>
      <p className="mx-auto mt-[clamp(18px,2vw,26px)] text-[clamp(16.5px,1.5vw,20px)] text-muted">
        Find a model, shape it in the builder, and print it on your S1 or at a
        printer near you.
      </p>
      <ButtonRow align="start">
        <Button href="#closing">Get started</Button>
        <Button href="#how" variant="secondary">
          See how it works
        </Button>
      </ButtonRow>
      <p className="mt-4 text-[clamp(13.5px,1.05vw,15px)] text-muted">
        No printer yet? Print at one nearby.
      </p>
      <div className="mt-[clamp(28px,3.4vw,44px)] flex flex-col items-center gap-3">
        <p className="font-mono text-[clamp(11.5px,.9vw,12.5px)] uppercase tracking-[.12em] text-muted">
          Prints in
        </p>
        <PillList items={materialNames} size="sm" className="justify-center" />
      </div>
    </Section>
  );
}
