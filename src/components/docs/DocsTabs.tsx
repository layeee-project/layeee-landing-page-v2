"use client";

import { useState, type ReactNode } from "react";

/** Underlined tabs. panels[i] is shown for labels[i]. */
export default function DocsTabs({
  labels,
  panels,
}: {
  labels: string[];
  panels: ReactNode[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-6">
      <div className="flex gap-1 border-b border-line" role="tablist">
        {labels.map((label, i) => (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className="-mb-px cursor-pointer border-b-2 border-transparent px-3 py-2 text-[clamp(13.5px,1.05vw,15px)] text-muted hover:text-fg aria-selected:border-fg aria-selected:font-semibold aria-selected:text-fg"
          >
            {label}
          </button>
        ))}
      </div>
      {panels.map((panel, i) => (
        <div key={labels[i]} role="tabpanel" hidden={active !== i}>
          {panel}
        </div>
      ))}
    </div>
  );
}
