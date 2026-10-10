import type { ReactNode } from "react";
import Icon from "./Icon";
import { cx } from "@/lib/ui";

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  arrow = true,
  className,
  children,
}: Props) {
  return (
    <a
      href={href}
      className={cx(
        "inline-flex cursor-pointer items-center justify-center gap-[9px] border font-sans font-semibold no-underline hover:opacity-90",
        variant === "primary"
          ? "border-btn-bg bg-btn-bg text-btn-fg"
          : "border-line-strong bg-transparent text-fg hover:bg-soft hover:opacity-100",
        size === "sm"
          ? "rounded-[9px] px-3.5 py-2 text-[13.5px]"
          : "rounded-[11px] px-5 py-3 text-[14.5px]",
        className,
      )}
    >
      {children}
      {arrow && <Icon name="arrow" className="size-4 shrink-0" />}
    </a>
  );
}
