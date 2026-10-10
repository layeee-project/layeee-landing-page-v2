import PrintOptionsDiagram from "./PrintOptionsDiagram";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { anywhereSteps } from "@/data/anywhere";

export default function Anywhere() {
  return (
    <Section
      id="anywhere"
      labelledBy="anywhere-title"
      contained={false}
      spacing="both"
      className="mt-(--section-space) border-y border-line bg-soft"
    >
      <Container>
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-center gap-[clamp(32px,5vw,88px)] max-[980px]:grid-cols-1">
          <div>
            <SectionHeading
              id="anywhere-title"
              eyebrow="Print anywhere"
              title={
                <>
                  Your printer,
                  <br />
                  or one nearby.
                </>
              }
            />
            <p className="mt-4 max-w-[52ch] text-[clamp(16px,1.3vw,18.5px)] text-muted">
              One design, two ways to print it. Use the S1 on your desk, or let
              the app show you a printing service close to where you are.
            </p>
            <Button href="#closing" className="mt-[30px]">
              Get started
            </Button>
          </div>
          <PrintOptionsDiagram />
        </div>
        <ol className="mt-16 grid grid-cols-3 gap-5 max-[700px]:grid-cols-1">
          {anywhereSteps.map((s) => (
            <li key={s.number} className="border-t border-line-strong pt-[18px]">
              <span className="font-mono text-[13px] font-medium text-accent-ink">
                {s.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1.5 max-w-[38ch] text-[14.5px] text-muted">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
