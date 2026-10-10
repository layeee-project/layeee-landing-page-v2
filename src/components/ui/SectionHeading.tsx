import type { ReactNode } from "react";
import { cx } from "@/lib/ui";

type Props = {
  /** id for the h2, referenced by the section's aria-labelledby */
  id: string;
  title: ReactNode;
  eyebrow?: string;
  lead?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({
  id,
  title,
  eyebrow,
  lead,
  align = "left",
}: Props) {
  return (
    <div className={align === "center" ? "text-center" : undefined}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[.12em] text-accent-ink">
          {eyebrow}
        </p>
      )}
      <h2
        className={cx(
          "text-[clamp(30px,4vw,52px)] font-medium leading-[1.1] tracking-[-0.015em] text-balance",
          eyebrow && "mt-3",
        )}
        id={id}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cx(
            "mt-3.5 max-w-[58ch] text-[clamp(16px,1.3vw,18.5px)] text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
