"use client";

import { useEffect, useState } from "react";
import { cx } from "@/lib/ui";

export type TocItem = { id: string; title: string; level: 2 | 3 };

/** "On this page": highlights the heading currently near the top of the screen */
export default function DocsToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      let current = items[0]?.id;
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  if (!items.length) return null;

  return (
    <aside className="sticky top-[57px] h-[calc(100dvh-57px)] overflow-y-auto py-10 pr-6 max-[1200px]:hidden">
      <p className="text-[13.5px] font-semibold">On this page</p>
      <nav className="mt-3 grid" aria-label="On this page">
        {items.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className={cx(
              "border-l py-1.5 text-[13px] no-underline",
              t.level === 3 ? "pl-7" : "pl-3.5",
              active === t.id
                ? "border-accent font-semibold text-fg"
                : "border-line text-muted hover:text-fg",
            )}
          >
            {t.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
