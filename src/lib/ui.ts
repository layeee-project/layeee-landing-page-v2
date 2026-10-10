/** join class names, skipping falsy values */
export const cx = (...a: (string | false | null | undefined)[]) =>
  a.filter(Boolean).join(" ");

/* shared Tailwind class recipes */
export const monoTag =
  "font-mono text-[11px] font-medium uppercase tracking-[.1em] text-muted";
export const inset = "shadow-[inset_0_0_0_1px_var(--line)]";
export const dots22 =
  "bg-[radial-gradient(var(--line)_1px,transparent_1px)] bg-[length:22px_22px]";

/* svg props for the 24px outline icons drawn inline */
export const strokeIcon = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;
