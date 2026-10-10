import type { ReactNode } from "react";
import { cx } from "@/lib/ui";

/** the wide page container (see section-width in globals.css) */
export default function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cx("section-width", className)}>{children}</div>;
}
