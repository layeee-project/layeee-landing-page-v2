import type { StepState } from "./usePrintSequence";
import Icon from "@/components/ui/Icon";
import { demoPrompt, demoReply, demoSteps } from "@/data/how-it-works";

type Props = {
  states: StepState[];
  /** shows the reply once the print has finished */
  done: boolean;
};

export default function AgentPanel({ states, done }: Props) {
  return (
    <div
      className="flex flex-col gap-3.5 overflow-hidden rounded-2xl border border-line bg-panel p-[18px]"
      aria-hidden="true"
    >
      <p className="rounded-xl bg-soft px-3.5 py-3 text-sm">{demoPrompt}</p>
      <ol className="grid gap-1.5">
        {demoSteps.map((step, i) => (
          <li
            key={step.title}
            data-state={states[i]}
            className="group/li grid grid-cols-[20px_1fr] items-center gap-2.5 rounded-[9px] border border-transparent px-2.5 py-2 text-[13.5px] text-muted transition-colors data-[state=active]:border-accent data-[state=active]:bg-accent-soft data-[state=active]:text-fg"
          >
            <span className="grid size-[18px] place-items-center rounded-full border-[1.5px] border-line-strong group-data-[state=active]/li:border-accent group-data-[state=done]/li:border-accent group-data-[state=done]/li:bg-accent">
              <Icon
                name="check"
                className="size-[11px] text-white opacity-0 group-data-[state=done]/li:opacity-100"
              />
            </span>
            <span>
              <strong className="font-semibold text-fg">{step.title}</strong>{" "}
              {step.text}
            </span>
          </li>
        ))}
      </ol>
      <p
        className="text-sm opacity-0 transition-opacity duration-[400ms] data-[visible=true]:opacity-100"
        data-visible={String(done)}
      >
        {demoReply}
      </p>
    </div>
  );
}
