import type { ReactNode } from "react";
import { cx } from "@/lib/ui";

export default function ButtonRow({
  align = "center",
  children,
}: {
  align?: "start" | "center";
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "mt-[clamp(24px,2.6vw,34px)] flex flex-wrap gap-2.5",
        align === "center" && "justify-center",
      )}
    >
      {children}
    </div>
  );
}
