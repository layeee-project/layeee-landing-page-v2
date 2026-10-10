"use client";

import IconButton from "@/components/ui/IconButton";

/* Light is the default (no data-theme attribute on <html>). */
function toggleTheme() {
  const root = document.documentElement;
  let cur = root.getAttribute("data-theme");
  if (!cur) cur = "light";
  root.setAttribute("data-theme", cur === "light" ? "dark" : "light");
}

export default function ThemeToggle() {
  return (
    <IconButton
      id="themeBtn"
      aria-label="Toggle light and dark theme"
      onClick={toggleTheme}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </IconButton>
  );
}
