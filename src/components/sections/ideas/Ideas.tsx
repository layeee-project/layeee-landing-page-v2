import IdeaCard from "./IdeaCard";
import Container from "@/components/ui/Container";
import InlineLink from "@/components/ui/InlineLink";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { ideas } from "@/data/ideas";

export default function Ideas() {
  return (
    <Section id="ideas" labelledBy="ideas-title" contained={false}>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHeading
            id="ideas-title"
            title="Ideas to try"
            lead="Six small prints to start with, with notes on settings."
          />
          <InlineLink href="#faq">Have a question?</InlineLink>
        </div>
        <div className="mt-[clamp(32px,4.4vw,56px)] grid grid-cols-3 items-start gap-[clamp(14px,1.6vw,20px)] max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
          {ideas.map((idea) => (
            <IdeaCard key={idea.title} idea={idea} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
