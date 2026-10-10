import type { Feature } from "@/data/features";
import { strokeIcon } from "@/lib/ui";

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="flex flex-col gap-3 bg-bg p-[clamp(26px,2.6vw,40px)]">
      <svg {...strokeIcon} className="size-6 text-accent-ink">
        {feature.icon}
      </svg>
      <h3 className="text-lg font-semibold">{feature.title}</h3>
      <p className="max-w-[42ch] text-[15px] text-muted">{feature.text}</p>
    </article>
  );
}
