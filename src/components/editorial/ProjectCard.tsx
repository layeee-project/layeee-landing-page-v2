import type { ReactNode } from "react";

/* a project-style card: media on top, tag, title, description, text link */
export default function ProjectCard({
  media,
  tag,
  title,
  text,
  href,
  linkLabel = "View more",
}: {
  media: ReactNode;
  tag?: string;
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-soft">
        <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]">
          {media}
        </div>
        {tag && (
          <span className="absolute top-3 left-3 rounded-full bg-bg/85 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[.08em] backdrop-blur">
            {tag}
          </span>
        )}
      </div>
      <h3 className="mt-4 font-sans text-[clamp(18px,1.5vw,22px)] font-medium tracking-[-0.01em]">
        {title}
      </h3>
      <p className="mt-1.5 max-w-[44ch] text-[clamp(14px,1.08vw,15.5px)] leading-[1.55] text-muted">
        {text}
      </p>
      {href && (
        <a
          href={href}
          className="mt-3 inline-flex w-fit items-center gap-1.5 border-b border-line-strong pb-0.5 text-[clamp(13.5px,1.02vw,15px)] font-medium no-underline hover:border-fg"
        >
          {linkLabel}
          <span aria-hidden>→</span>
        </a>
      )}
    </article>
  );
}
