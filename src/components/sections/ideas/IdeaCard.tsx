import Icon from "@/components/ui/Icon";
import { ideaIcons, type Idea } from "@/data/ideas";

export default function IdeaCard({ idea }: { idea: Idea }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-panel">
      <div className="grid min-h-[132px] content-between gap-[18px] bg-code-bg p-[clamp(18px,1.7vw,22px)] pb-[clamp(20px,1.9vw,24px)] text-code-fg">
        <span className="inline-flex items-center gap-[7px] font-mono text-[clamp(11.5px,.9vw,12.5px)] font-medium uppercase tracking-[.08em] text-[#ff9b58]">
          <svg
            className="size-3.5"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d={ideaIcons[idea.icon]} />
          </svg>
          {idea.category}
        </span>
        <code className="overflow-x-auto font-mono text-sm whitespace-pre text-code-fg">
          {idea.code}
        </code>
      </div>
      <div className="grid gap-2.5 p-[clamp(18px,1.7vw,22px)]">
        <h3 className="text-lg font-semibold">{idea.title}</h3>
        <p className="text-[clamp(14.5px,1.13vw,16px)] text-muted">{idea.text}</p>
        <details className="group mt-2 border-t border-line pt-3">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold [&::-webkit-details-marker]:hidden">
            Setup notes
            <Icon
              name="chev"
              className="size-4 transition-transform group-open:rotate-180"
            />
          </summary>
          <ol className="mt-3 grid list-decimal gap-2 pl-5 text-sm text-muted">
            {idea.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <p className="mt-3 text-[clamp(13.5px,1.05vw,15px)] text-muted">{idea.note}</p>
        </details>
      </div>
    </article>
  );
}
