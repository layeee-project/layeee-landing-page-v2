import { cx } from "@/lib/ui";
import Image from "next/image";

export default function Brand({
  className,
  href = "#top",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <a
      className={cx("flex items-center no-underline", className)}
      href={href}
      aria-label="Layeee home"
    >
      {/* light mode logo: shown by default, hidden when data-theme="dark" */}
      <Image
        src="/layeee-logo.svg"
        alt="Layeee logo"
        width={120}
        height={10}
        className="h-6 w-auto [[data-theme=dark]_&]:hidden"
        priority
      />
      {/* dark mode logo: hidden by default, shown when data-theme="dark" */}
      <Image
        src="/layeee-white-toogle-logo.svg"
        alt=""
        aria-hidden="true"
        width={120}
        height={10}
        className="hidden h-6 w-auto [[data-theme=dark]_&]:block"
        priority
      />
    </a>
  );
}
