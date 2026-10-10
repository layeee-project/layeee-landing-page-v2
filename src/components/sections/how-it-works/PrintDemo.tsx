"use client";

import AgentPanel from "./AgentPanel";
import PrinterPanel from "./PrinterPanel";
import { usePrintSequence } from "./usePrintSequence";

export default function PrintDemo() {
  const { ref, states, progress, label, done } = usePrintSequence();

  return (
    <div
      className="grid grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] gap-3.5 max-[640px]:grid-cols-1"
      ref={ref}
      role="img"
      aria-label="Illustration: a phone stand is found, edited, sent to an S1 and printed layer by layer."
    >
      <AgentPanel states={states} done={done} />
      <PrinterPanel label={label} progress={progress} />
    </div>
  );
}
