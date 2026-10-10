import type { ReactNode } from "react";
import { cx } from "@/lib/ui";

const SPACING = {
  top: "pt-(--section-space)",
  both: "py-(--section-space)",
  none: "",
} as const;

type Props = {
  id?: string;
  /** id of the heading that names this section */
  labelledBy?: string;
  /** used instead of labelledBy when the section has no heading */
  label?: string;
  /** false for full-bleed sections that place a <Container> inside */
  contained?: boolean;
  spacing?: keyof typeof SPACING;
  className?: string;
  children: ReactNode;
};

export default function Section({
  id,
  labelledBy,
  label,
  contained = true,
  spacing = "top",
  className,
  children,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      aria-label={label}
      className={cx(contained && "section-width", SPACING[spacing], className)}
    >
      {children}
    </section>
  );
}
