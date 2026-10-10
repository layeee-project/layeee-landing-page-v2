import type { ReactNode } from "react";
import type { PanelId } from "@/data/product-frame";
import { cx } from "@/lib/ui";

type Props = {
  id: PanelId;
  active: boolean;
  /** grid columns and padding for this panel */
  className?: string;
  children: ReactNode;
};

/** One app screen in the product frame. Hidden unless its tab is active. */
export default function Panel({ id, active, className, children }: Props) {
  return (
    <div
      className={cx(
        "min-h-[clamp(420px,42vw,600px)] bg-bg",
        className,
        active ? "grid" : "hidden",
      )}
      data-id={id}
    >
      {children}
    </div>
  );
}
