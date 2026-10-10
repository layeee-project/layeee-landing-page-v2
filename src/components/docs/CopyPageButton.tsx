"use client";

import { useState } from "react";

/** Copies the text of the element with the given id */
export default function CopyPageButton({ targetId }: { targetId: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const text = document.getElementById(targetId)?.innerText;
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex cursor-pointer items-center gap-1.5 hover:text-fg"
    >
      <svg
        className="size-3.5"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
        <path d="M10.5 5.5v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2" />
      </svg>
      <span aria-live="polite">{copied ? "Copied" : "Copy page"}</span>
    </button>
  );
}
