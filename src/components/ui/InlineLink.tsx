import type { ReactNode } from "react";
import Icon from "./Icon";

export default function InlineLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-accent-ink no-underline hover:underline hover:underline-offset-[3px]"
      href={href}
    >
      {children}
      <Icon name="arrow" className="size-[15px]" />
    </a>
  );
}
