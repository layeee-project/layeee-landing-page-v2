import type { ComponentProps } from "react";
import { cx } from "@/lib/ui";

/** Square icon-only button. className sets the display, "grid" by default. */
export default function IconButton({
  className = "grid",
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      className={cx(
        "place-items-center size-9 rounded-[9px] text-fg cursor-pointer hover:bg-soft [&_svg]:size-[18px]",
        className,
      )}
      {...props}
    />
  );
}
