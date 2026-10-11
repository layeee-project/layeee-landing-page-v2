"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import { docNav, type DocNavLink } from "@/data/docs";
import { cx } from "@/lib/ui";

export default function DocsSidebar() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  /* "/" focuses the filter, like the hint inside it says */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (e.key !== "/" || tag === "INPUT" || tag === "TEXTAREA") return;
      e.preventDefault();
      input.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const q = query.trim().toLowerCase();
  const matches = (l: DocNavLink) => l.label.toLowerCase().includes(q);

  const item = (l: DocNavLink) => {
    const active = pathname === l.href;
    return (
      <Link
        key={l.href}
        href={l.href}
        aria-current={active ? "page" : undefined}
        onClick={() => setOpen(false)}
        className={cx(
          "block rounded-lg px-2.5 py-1.5 text-[clamp(13.5px,1.05vw,15px)] no-underline",
          active
            ? "bg-soft font-semibold text-fg"
            : "text-muted hover:bg-soft hover:text-fg",
        )}
      >
        {l.label}
      </Link>
    );
  };

  return (
    <aside className="sticky top-[57px] h-[calc(100dvh-57px)] overflow-y-auto border-r border-line px-3 py-4 max-[900px]:static max-[900px]:h-auto max-[900px]:border-r-0 max-[900px]:border-b">
      <button
        type="button"
        className="hidden w-full cursor-pointer items-center justify-between rounded-lg border border-line px-3 py-2 text-[clamp(13.5px,1.05vw,15px)] font-medium max-[900px]:flex"
        aria-expanded={open}
        aria-controls="docsNav"
        onClick={() => setOpen((o) => !o)}
      >
        Docs menu
        <Icon
          name="chev"
          className={cx("size-4 transition-transform", open && "rotate-180")}
        />
      </button>
      <div id="docsNav" className={cx(!open && "max-[900px]:hidden", "max-[900px]:mt-3")}>
        <label className="flex items-center gap-2 rounded-lg border border-line bg-panel px-2.5 py-1.5 focus-within:border-line-strong">
          <input
            ref={input}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter..."
            aria-label="Filter docs pages"
            className="min-w-0 flex-1 bg-transparent text-[clamp(13.5px,1.05vw,15px)] outline-none placeholder:text-muted"
          />
          <kbd className="rounded border border-line bg-soft px-1.5 font-mono text-[clamp(11px,.86vw,12px)] text-muted">
            /
          </kbd>
        </label>
        <nav className="mt-3 grid gap-0.5" aria-label="Docs navigation">
          {docNav.map((entry) => {
            if (!("children" in entry)) return matches(entry) ? item(entry) : null;
            const children = entry.children.filter(matches);
            if (!children.length) return null;
            return (
              <details key={entry.label} open className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-2.5 py-1.5 text-[clamp(13.5px,1.05vw,15px)] text-muted hover:bg-soft hover:text-fg [&::-webkit-details-marker]:hidden">
                  {entry.label}
                  <Icon
                    name="chev"
                    className="size-3.5 transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="ml-3.5 grid gap-0.5 border-l border-line pl-2">
                  {children.map(item)}
                </div>
              </details>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
