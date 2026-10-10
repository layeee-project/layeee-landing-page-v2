import { printOptions } from "@/data/anywhere";
import { strokeIcon } from "@/lib/ui";

/* one design flowing into the two places it can print */
export default function PrintOptionsDiagram() {
  return (
    <figure
      className="grid justify-items-center"
      aria-label="A design can print on your S1 or at a nearby printer"
    >
      <div className="flex items-center gap-3.5 rounded-[14px] border border-line-strong bg-panel px-5 py-3.5">
        <svg {...strokeIcon} className="size-7 text-accent-ink">
          <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z" />
          <path d="M4 7.5 12 12l8-4.5M12 12v9" />
        </svg>
        <div>
          <strong className="block text-[15px]">Your design</strong>
          <span className="text-[13px] text-muted">
            From the library or the builder
          </span>
        </div>
      </div>
      <div
        className="h-[34px] w-0.5 bg-[repeating-linear-gradient(var(--line-strong)_0_5px,transparent_5px_9px)]"
        aria-hidden="true"
      />
      <div className="grid w-full gap-4 rounded-[18px] border-[1.5px] border-dashed border-accent bg-panel/70 p-5">
        <div className="font-mono text-[11.5px] font-medium tracking-[.12em] text-accent-ink">
          WHERE IT PRINTS
        </div>
        <div className="rounded-[11px] border border-line bg-panel px-4 py-3 text-[14.5px] font-semibold">
          Layeee app · model library + 3D builder
        </div>
        <div className="grid grid-cols-2 gap-3 max-[700px]:grid-cols-1">
          {printOptions.map((o) => (
            <div
              key={o.tag}
              className="grid gap-1 rounded-xl border border-line bg-panel p-4"
            >
              <span className="font-mono text-[11px] font-medium tracking-[.1em] text-muted">
                {o.tag}
              </span>
              <strong className="text-base font-semibold">{o.title}</strong>
              <em className="text-[13px] not-italic text-muted">{o.text}</em>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
