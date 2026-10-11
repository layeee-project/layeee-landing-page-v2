import Stack from "@/components/graphics/Stack";

const LAYERS = 120;

type Props = {
  /** status shown in the title bar: Sending, Printing, Done */
  label: string;
  /** print progress, 0..1 */
  progress: number;
};

export default function PrinterPanel({ label, progress }: Props) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-2xl border border-line bg-panel"
      aria-hidden="true"
    >
      <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-3.5 py-2.5 text-[clamp(12.5px,.98vw,13.5px)] text-muted">
        <span className="inline-flex items-center gap-1.5 font-semibold text-accent-ink">
          <i className="size-[7px] rounded-full bg-accent" />
          <span>{label}</span>
        </span>
        <span className="flex-1">S1 · PLA · 0.2 mm</span>
        <span className="font-mono">
          Layer {Math.round(progress * LAYERS)} / {LAYERS}
        </span>
      </div>
      <div className="grid min-h-[clamp(220px,24vw,300px)] flex-1 place-items-center bg-[radial-gradient(var(--line)_1px,transparent_1px)] bg-[length:20px_20px] p-3.5">
        <Stack progress={progress} className="h-auto w-[min(330px,100%)]" />
      </div>
      <div className="h-1 bg-line">
        <i
          className="block h-full bg-accent"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
}
