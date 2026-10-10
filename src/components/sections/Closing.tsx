import Button from "@/components/ui/Button";
import ButtonRow from "@/components/ui/ButtonRow";
import Section from "@/components/ui/Section";

export default function Closing() {
  return (
    <Section
      id="closing"
      labelledBy="closing-title"
      spacing="both"
      className="text-center"
    >
      <h2
        className="text-[clamp(34px,5.4vw,76px)] font-medium leading-[1.05] tracking-[-0.02em] text-balance"
        id="closing-title"
      >
        Design that delivers.
        <br />
        <span className="text-accent">Print it anywhere.</span>
      </h2>
      <p className="mt-4 text-[clamp(16px,1.4vw,19px)] text-muted">
        Find a model, shape it, and print it on an S1 or nearby.
      </p>
      <ButtonRow>
        <Button href="#s1">Meet the S1</Button>
        <Button href="#how" variant="secondary">
          See how it works
        </Button>
      </ButtonRow>
    </Section>
  );
}
