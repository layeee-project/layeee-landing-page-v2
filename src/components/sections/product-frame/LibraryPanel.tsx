import Panel from "./Panel";
import Chip from "@/components/ui/Chip";
import { materialNames } from "@/data/materials";
import { libraryItems } from "@/data/product-frame";
import { cx, inset, monoTag } from "@/lib/ui";

const sideHead = `${monoTag} px-2.5 py-1.5`;
const sideItem = "flex justify-between gap-2 rounded-lg px-2.5 py-2 text-sm";

export default function LibraryPanel({ active }: { active: boolean }) {
  return (
    <Panel
      id="lib"
      active={active}
      className="grid-cols-[clamp(190px,18vw,230px)_1fr] max-[860px]:grid-cols-1"
    >
      <aside className="flex flex-col gap-1 border-r border-line bg-soft px-3.5 py-[18px] max-[860px]:hidden">
        <h4 className={sideHead}>Sources</h4>
        <ul>
          <li className={cx(sideItem, "bg-panel font-semibold", inset)}>
            All platforms <Chip>API</Chip>
          </li>
          <li className={sideItem}>Saved designs</li>
          <li className={sideItem}>My builds</li>
        </ul>
        <h4 className={sideHead}>Material</h4>
        <ul>
          {materialNames.map((m) => (
            <li key={m} className={sideItem}>
              {m}
            </li>
          ))}
        </ul>
      </aside>
      <div className="flex min-w-0 flex-col gap-4 p-[clamp(12px,1.4vw,18px)]">
        <div className="flex items-center gap-2.5 rounded-[10px] border border-line bg-panel px-3.5 py-[9px] text-sm text-muted">
          <svg
            className="size-4 shrink-0"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <circle cx="7" cy="7" r="4.5" />
            <path d="m10.5 10.5 3 3" />
          </svg>
          Search ready-made designs
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
          {libraryItems.map((item) => (
            <div
              className="overflow-hidden rounded-xl border border-line bg-panel"
              key={item.name}
            >
              <div className="grid aspect-[4/3] place-items-center bg-soft">
                <svg viewBox="0 0 120 90" className="h-auto w-[72%]">
                  <use href={`#${item.shape}`} />
                </svg>
              </div>
              <div className="px-3 py-2.5 text-[clamp(13.5px,1.05vw,15px)]">
                <b className="block font-semibold">{item.name}</b>
                <span className="text-xs text-muted">Demo model</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
