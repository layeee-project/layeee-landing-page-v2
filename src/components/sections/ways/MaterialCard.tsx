import type { Material } from "@/data/materials";

export default function MaterialCard({ material }: { material: Material }) {
  return (
    <article className="grid content-start gap-1.5 rounded-2xl border border-line bg-panel p-6">
      <p className="font-mono text-xs font-medium uppercase tracking-[.1em] text-accent-ink">
        {material.name}
      </p>
      <h4 className="text-lg font-semibold">{material.title}</h4>
      <p className="text-[14.5px] text-muted">{material.text}</p>
      <p className="mt-2 font-mono text-[13px]">0.1–0.3 mm layers</p>
    </article>
  );
}
