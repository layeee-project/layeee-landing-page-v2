import type { ReactNode } from "react";
import { cx } from "@/lib/ui";

export default function Chip({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cx(
        "rounded-full border border-line bg-soft px-[9px] py-[3px] font-mono text-[11.5px] text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
