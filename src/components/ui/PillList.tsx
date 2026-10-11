import { cx } from "@/lib/ui";

type Props = {
  items: readonly string[];
  size?: "sm" | "md";
  label?: string;
  className?: string;
};

export default function PillList({
  items,
  size = "md",
  label,
  className,
}: Props) {
  return (
    <ul className={cx("flex flex-wrap gap-2", className)} aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className={cx(
            "rounded-full border border-line-strong bg-panel font-mono",
            size === "sm"
              ? "px-[13px] py-[5px] text-[clamp(12.5px,.98vw,13.5px)]"
              : "px-3.5 py-1.5 text-[clamp(13px,1.02vw,14.5px)]",
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
