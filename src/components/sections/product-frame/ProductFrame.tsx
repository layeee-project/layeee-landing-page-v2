"use client";

import { useState } from "react";
import BuilderPanel from "./BuilderPanel";
import LibraryPanel from "./LibraryPanel";
import NearPanel from "./NearPanel";
import S1Panel from "./S1Panel";
import { tabs } from "./tabs";
import Section from "@/components/ui/Section";
import { captions, type PanelId } from "@/data/product-frame";
import { cx } from "@/lib/ui";

export default function ProductFrame() {
  const [active, setActive] = useState<PanelId>("lib");

  return (
    <Section id="use-cases" label="Explore the Layeee app" spacing="none">
      <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_48px_120px_-56px_rgba(0,0,0,.35)]">
        <div
          className="flex gap-1 overflow-x-auto border-b border-line p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label="Choose an app screen"
          id="switcher"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-pressed={active === t.id}
              data-panel={t.id}
              onClick={() => setActive(t.id)}
              className={cx(
                "inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-[9px] px-3.5 py-2 font-sans text-sm font-medium text-muted",
                "hover:bg-soft hover:text-fg aria-pressed:bg-soft aria-pressed:text-fg",
                "aria-pressed:shadow-[inset_0_0_0_1px_var(--line)] [&_svg]:size-4",
              )}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        <LibraryPanel active={active === "lib"} />
        <BuilderPanel active={active === "builder"} />
        <NearPanel active={active === "near"} />
        <S1Panel active={active === "s1"} />
      </div>
      <p className="mt-4 flex flex-wrap justify-between gap-4 text-[13.5px] text-muted">
        <span aria-live="polite" id="caption">
          {captions[active]}
        </span>
        <span>Illustration · Demo data</span>
      </p>
    </Section>
  );
}
