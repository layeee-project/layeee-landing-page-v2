import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

/* a studio-index style section: title + count on the left, intro on the right, content below */
export default function IndexSection({
  id,
  title,
  count,
  intro,
  children,
}: {
  id: string;
  title: string;
  count?: number;
  intro?: ReactNode;
  children: ReactNode;
}) {
  const headingId = `${id}-title`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-t border-line py-[clamp(56px,7vw,112px)]"
    >
      <Container>
        <div className="grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-5">
          <h2
            id={headingId}
            className="col-span-12 font-sans text-[clamp(28px,3.4vw,52px)] font-medium leading-none tracking-[-0.03em] md:col-span-6"
          >
            {title}
            {count !== undefined && (
              <sup className="ml-1.5 align-super font-mono text-[0.32em] font-normal tracking-normal text-muted">
                {String(count).padStart(2, "0")}
              </sup>
            )}
          </h2>
          {intro && (
            <p className="col-span-12 max-w-[46ch] text-[clamp(15px,1.2vw,18px)] leading-[1.5] text-muted md:col-span-6 md:col-start-7">
              {intro}
            </p>
          )}
        </div>
        <div className="mt-[clamp(36px,4.5vw,72px)]">{children}</div>
      </Container>
    </section>
  );
}
