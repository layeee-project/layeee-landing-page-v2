import Panel from "./Panel";
import Stack from "@/components/graphics/Stack";
import { s1Specs } from "@/data/product-frame";

export default function S1Panel({ active }: { active: boolean }) {
  return (
    <Panel
      id="s1"
      active={active}
      className="grid-cols-2 items-center gap-[clamp(16px,1.9vw,24px)] px-[clamp(18px,4vw,64px)] py-[clamp(20px,2.5vw,32px)] max-[860px]:grid-cols-1"
    >
      <div className="grid overflow-hidden rounded-xl border border-line bg-panel">
        {s1Specs.map(([k, v]) => (
          <div
            key={k}
            className="flex justify-between gap-4 border-b border-line px-[18px] py-3.5 text-[clamp(14.5px,1.13vw,16px)] last:border-b-0"
          >
            <span className="text-muted">{k}</span>
            <b className="text-right font-mono text-sm font-medium">{v}</b>
          </div>
        ))}
      </div>
      <div className="grid place-items-center">
        <Stack progress={1} className="h-auto w-[min(360px,90%)]" />
      </div>
    </Panel>
  );
}
