import Panel from "./Panel";
import Chip from "@/components/ui/Chip";
import { nearbyPrinters } from "@/data/product-frame";
import { cx } from "@/lib/ui";

const dot = "absolute size-3 -translate-1/2 rounded-full border-2 bg-panel";
const ring =
  "absolute top-[54%] left-[46%] aspect-square -translate-1/2 rounded-full border border-dashed border-line-strong";

export default function NearPanel({ active }: { active: boolean }) {
  return (
    <Panel
      id="near"
      active={active}
      className="grid-cols-[340px_1fr] max-[860px]:grid-cols-1"
    >
      <div className="flex flex-col gap-2.5 border-r border-line bg-soft p-3.5 max-[860px]:border-r-0 max-[860px]:border-b">
        {nearbyPrinters.map((p) => (
          <div
            key={p.distance}
            className={cx(
              "grid gap-1 rounded-xl border px-3.5 py-3",
              p.selected
                ? "border-accent bg-accent-soft"
                : "border-line bg-panel",
            )}
          >
            <b className="flex justify-between gap-2 text-[14.5px]">
              Printer near you <Chip>{p.distance}</Chip>
            </b>
            <span className="text-[12.5px] text-muted">
              {p.materials} · Demo data
            </span>
          </div>
        ))}
      </div>
      <div
        className="relative min-h-80 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-[length:48px_48px]"
        aria-hidden="true"
      >
        <span className={cx(ring, "w-[62%]")} />
        <span className={cx(ring, "w-[34%]")} />
        <i
          className={cx(dot, "border-accent bg-accent")}
          style={{ left: "58%", top: "44%" }}
        />
        <i className={cx(dot, "border-muted")} style={{ left: "30%", top: "30%" }} />
        <i className={cx(dot, "border-muted")} style={{ left: "70%", top: "70%" }} />
        <i className={cx(dot, "border-muted")} style={{ left: "20%", top: "72%" }} />
        <span
          className={cx(
            "absolute top-[54%] left-[46%] size-4 -translate-1/2 rounded-full bg-fg shadow-[0_0_0_4px_var(--bg)]",
            "after:absolute after:-inset-2 after:rounded-full after:border-2 after:border-accent after:content-[''] motion-safe:after:animate-ping-soft",
          )}
        />
      </div>
    </Panel>
  );
}
