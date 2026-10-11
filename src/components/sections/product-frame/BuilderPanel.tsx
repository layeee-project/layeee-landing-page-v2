import Panel from "./Panel";
import Chip from "@/components/ui/Chip";
import { builderGroups, builderTools } from "@/data/product-frame";
import { cx, dots22, inset, monoTag } from "@/lib/ui";

export default function BuilderPanel({ active }: { active: boolean }) {
  return (
    <Panel
      id="builder"
      active={active}
      className="grid-cols-[76px_1fr_clamp(210px,20vw,260px)] max-[860px]:grid-cols-1"
    >
      <div className="flex flex-col gap-1.5 border-r border-line bg-soft px-2 py-3 max-[860px]:flex-row max-[860px]:overflow-x-auto max-[860px]:border-r-0 max-[860px]:border-b">
        {builderTools.map((t, i) => (
          <span
            key={t}
            className={cx(
              "rounded-lg px-0.5 py-[9px] text-center font-mono text-[clamp(11px,.86vw,12px)] font-medium max-[860px]:flex-1",
              i === 0 ? cx("bg-panel text-fg", inset) : "text-muted",
            )}
          >
            {t}
          </span>
        ))}
      </div>
      <div className={cx("relative grid min-w-0 place-items-center", dots22)}>
        <Chip className="absolute top-3 left-3.5">Phone stand</Chip>
        <svg
          viewBox="0 0 600 380"
          aria-hidden="true"
          className="h-auto w-[min(520px,86%)]"
        >
          <polygon
            points="300,60 560,190 300,320 40,190"
            fill="none"
            stroke="var(--line-strong)"
            strokeWidth="1.2"
          />
          <g stroke="var(--line)" strokeWidth="1">
            <path d="M170 125 430 255M235 92.5 495 222.5M105 157.5 365 287.5M365 92.5 105 222.5M430 125 170 255M495 157.5 235 287.5" />
          </g>
          <use href="#s-cube" x="170" y="60" width="260" height="195" />
          <g fill="var(--accent)">
            <rect x="162" y="136" width="10" height="10" rx="2" />
            <rect x="428" y="136" width="10" height="10" rx="2" />
            <rect x="295" y="55" width="10" height="10" rx="2" />
            <rect x="295" y="236" width="10" height="10" rx="2" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col gap-2.5 border-l border-line px-4 py-[18px] text-[clamp(13.5px,1.05vw,15px)] max-[860px]:border-t max-[860px]:border-l-0">
        {builderGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-2.5">
            <h4 className={monoTag}>{group.title}</h4>
            <dl className="grid grid-cols-[1fr_auto] gap-x-3.5 gap-y-2">
              {group.rows.map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="text-muted">{k}</dt>
                  <dd className="font-mono">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </Panel>
  );
}
