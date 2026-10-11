import Link from "next/link";
import DocsTabs from "./DocsTabs";
import type { DocBlock } from "@/data/docs";
import { cx } from "@/lib/ui";

/** Turns `code` and [label](href) inside a string into elements */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`|\[[^\]]+\]\([^)]+\))/);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("`")) {
          return (
            <code
              key={i}
              className="rounded-md border border-line bg-soft px-1.5 py-0.5 text-[.88em]"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          return (
            <Link
              key={i}
              href={link[2]}
              className="text-fg underline decoration-line-strong underline-offset-[3px] hover:decoration-accent"
            >
              {link[1]}
            </Link>
          );
        }
        return part;
      })}
    </>
  );
}

function Block({ block }: { block: DocBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="mt-5">
          <Inline text={block.text} />
        </p>
      );
    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List
          className={cx(
            "mt-5 grid gap-2 pl-5 marker:text-muted",
            block.ordered ? "list-decimal" : "list-disc",
          )}
        >
          {block.items.map((item) => (
            <li key={item}>
              <Inline text={item} />
            </li>
          ))}
        </List>
      );
    }
    case "code":
      return (
        <div className="relative mt-5 overflow-hidden rounded-xl border border-line bg-code-bg text-code-fg">
          <span className="absolute top-2.5 right-3 rounded border border-white/12 px-1.5 font-mono text-[clamp(10.5px,.82vw,11.5px)] uppercase tracking-[.08em] text-dark-muted">
            {block.label}
          </span>
          <pre className="m-0 overflow-x-auto px-5 py-6 font-mono text-[clamp(13.5px,1.05vw,15px)] leading-[1.8]">
            <code>{block.code}</code>
          </pre>
        </div>
      );
    case "table":
      return (
        <dl className="mt-5 grid overflow-hidden rounded-xl border border-line bg-panel">
          {block.rows.map(([k, v]) => (
            <div
              key={k}
              className="flex justify-between gap-6 border-b border-line px-[18px] py-3 last:border-b-0"
            >
              <dt className="shrink-0 font-semibold">{k}</dt>
              <dd className="text-right text-muted">{v}</dd>
            </div>
          ))}
        </dl>
      );
    case "note":
      return (
        <p className="mt-5 rounded-xl border border-line bg-soft px-4 py-3 text-[clamp(14px,1.1vw,15.5px)] text-muted">
          <Inline text={block.text} />
        </p>
      );
    case "tabs":
      return (
        <DocsTabs
          labels={block.tabs.map((t) => t.label)}
          panels={block.tabs.map((t) => (
            <DocBlocks key={t.label} blocks={t.blocks} />
          ))}
        />
      );
  }
}

export default function DocBlocks({ blocks }: { blocks: DocBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </>
  );
}
