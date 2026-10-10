export type IconName = "arrow" | "check" | "chev" | "plus";

/** An icon from the sprite in layout/Sprite.tsx */
export default function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg className={className}>
      <use href={`#i-${name}`} />
    </svg>
  );
}
