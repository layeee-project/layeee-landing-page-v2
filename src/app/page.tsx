import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import IndexSection from "@/components/editorial/IndexSection";
import ProjectCard from "@/components/editorial/ProjectCard";
import { features } from "@/data/features";
import { ideas } from "@/data/ideas";
import { plans } from "@/data/plans";
import { materials } from "@/data/materials";
import { faqs } from "@/data/faqs";
import { strokeIcon } from "@/lib/ui";

const specs = [
  { label: "Type", value: "FDM printer" },
  { label: "Build volume", value: "220 × 220 × 250 mm" },
  { label: "Layer height", value: "0.1 – 0.3 mm" },
  { label: "Print speed", value: "Up to 300 mm/s" },
  { label: "Materials", value: materials.map((m) => m.name).join(" · ") },
];

export default function Page() {
  return (
    <div className="overflow-clip">
      <Header />
      <main
        className="relative z-10 bg-bg selection:bg-[#e69a5c] selection:text-black"
        id="main"
      >
        {/* intro statement */}
        <section
          aria-labelledby="hero-title"
          className="pt-[clamp(72px,11vw,180px)] pb-[clamp(56px,7vw,112px)] motion-safe:animate-rise"
        >
          <Container>
            <h1
              id="hero-title"
              className="max-w-[24ch] font-sans text-[clamp(30px,4.4vw,72px)] font-medium leading-[1.08] tracking-[-0.035em] text-balance"
            >
              Layeee is a 3D printer and an app for finding, shaping and
              printing <span className="text-accent">everyday designs.</span>
            </h1>
            <div className="mt-[clamp(40px,5vw,80px)] grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-6 text-[clamp(14px,1.08vw,15.5px)]">
              <dl className="col-span-6 md:col-span-3">
                <dt className="font-mono text-[11px] uppercase tracking-[.1em] text-muted">
                  Hardware
                </dt>
                <dd className="mt-1.5">S1 FDM printer</dd>
              </dl>
              <dl className="col-span-6 md:col-span-3">
                <dt className="font-mono text-[11px] uppercase tracking-[.1em] text-muted">
                  Prints in
                </dt>
                <dd className="mt-1.5">PLA · PETG · TPU</dd>
              </dl>
              <div className="col-span-12 flex flex-wrap items-end gap-3 md:col-span-6 md:justify-end">
                <Button href="#closing">Get started</Button>
                <Button href="#platform" variant="secondary" arrow={false}>
                  Explore
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* features as a project grid */}
        <IndexSection
          id="platform"
          title="Platform"
          count={features.length}
          intro="One app and one printer, working together: find a model, shape it in the builder, and send it to your S1 or a printer nearby."
        >
          <div className="grid grid-cols-1 gap-x-[clamp(16px,2vw,32px)] gap-y-[clamp(40px,4.5vw,64px)] sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <ProjectCard
                key={f.title}
                tag={i < 3 ? "App" : "S1"}
                title={f.title}
                text={f.text}
                href="/docs"
                linkLabel="Read the docs"
                media={
                  <div className="grid h-full place-items-center">
                    <svg
                      {...strokeIcon}
                      strokeWidth={0.9}
                      className="size-[34%] text-fg/70"
                      aria-hidden
                    >
                      {f.icon}
                    </svg>
                  </div>
                }
              />
            ))}
          </div>
        </IndexSection>

        {/* ideas as a research list */}
        <IndexSection
          id="ideas"
          title="Ideas"
          count={ideas.length}
          intro="Small projects to try first, from quick PLA drafts to flexible TPU parts and prints made without a printer."
        >
          <ol className="border-b border-line">
            {ideas.map((idea, i) => (
              <li
                key={idea.title}
                className="grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-2 border-t border-line py-[clamp(20px,2.4vw,32px)]"
              >
                <span className="col-span-2 font-mono text-[12px] text-muted md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-span-10 font-sans text-[clamp(18px,1.6vw,24px)] font-medium tracking-[-0.01em] md:col-span-4">
                  {idea.title}
                </h3>
                <p className="col-span-10 col-start-3 text-[clamp(14px,1.08vw,15.5px)] text-muted md:col-span-4 md:col-start-6">
                  {idea.text}
                </p>
                <span className="col-span-10 col-start-3 font-mono text-[11.5px] uppercase tracking-[.06em] text-muted md:col-span-3 md:col-start-10 md:text-right">
                  {idea.code}
                </span>
              </li>
            ))}
          </ol>
        </IndexSection>

        {/* printer specs */}
        <IndexSection
          id="s1"
          title="S1 printer"
          intro="An FDM printer sized for the desk. It prints the designs you find and build in the app."
        >
          <div className="grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-10">
            <div className="col-span-12 aspect-[4/3] rounded-[4px] bg-dark md:col-span-6">
              <div className="grid h-full place-items-center">
                <svg
                  {...strokeIcon}
                  strokeWidth={0.6}
                  className="size-[40%] text-dark-fg/80"
                  aria-hidden
                >
                  <rect x="4" y="3" width="16" height="6" rx="1.5" />
                  <path d="M12 9v4M7 21h10M9 13h6l1 8H8l1-8Z" />
                </svg>
              </div>
            </div>
            <dl className="col-span-12 self-end md:col-span-6">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between gap-6 border-t border-line py-4 text-[clamp(14.5px,1.13vw,16.5px)] last:border-b"
                >
                  <dt className="text-muted">{s.label}</dt>
                  <dd className="text-right font-medium">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </IndexSection>

        {/* ways to print */}
        <IndexSection
          id="ways"
          title="Ways to print"
          count={plans.length}
          intro="Print on your own S1 at home, or send your design to a printing service near you."
        >
          <div className="grid grid-cols-1 gap-x-[clamp(16px,2vw,32px)] gap-y-12 md:grid-cols-2">
            {plans.map((p) => (
              <article key={p.id} className="border-t border-fg pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[.1em] text-muted">
                  {p.status}
                </p>
                <h3
                  id={p.id}
                  className="mt-2 font-sans text-[clamp(22px,2vw,30px)] font-medium tracking-[-0.02em]"
                >
                  {p.title}
                </h3>
                <p className="mt-2 max-w-[44ch] text-muted">{p.text}</p>
                <ul className="mt-5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="border-t border-line py-2.5 text-[clamp(14px,1.08vw,15.5px)]"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] text-muted">{p.terms}</p>
              </article>
            ))}
          </div>
        </IndexSection>

        {/* faq */}
        <IndexSection
          id="faq"
          title="Questions"
          count={faqs.length}
          intro="Answers about the printer, the app and printing nearby."
        >
          <div className="grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)]">
            <div className="col-span-12 border-b border-line md:col-span-6 md:col-start-7">
              {faqs.map((q) => (
                <details key={q.question} className="group border-t border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[clamp(15px,1.2vw,17px)] font-medium [&::-webkit-details-marker]:hidden">
                    {q.question}
                    <span
                      aria-hidden
                      className="font-mono text-muted transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-[56ch] pb-5 text-muted">{q.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </IndexSection>

        {/* closing statement */}
        <section
          id="closing"
          aria-labelledby="closing-title"
          className="border-t border-line py-[clamp(72px,10vw,160px)]"
        >
          <Container>
            <h2
              id="closing-title"
              className="max-w-[20ch] font-sans text-[clamp(30px,4.4vw,72px)] font-medium leading-[1.08] tracking-[-0.035em] text-balance"
            >
              Design that delivers.{" "}
              <span className="text-accent">Print it anywhere.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#s1">Meet the S1</Button>
              <Button href="/docs" variant="secondary" arrow={false}>
                Read the docs
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
