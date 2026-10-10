import { useEffect, useRef, useState } from "react";
import { demoSteps } from "@/data/how-it-works";

export type StepState = "pending" | "active" | "done";

const PRINT = demoSteps.length - 1;
const pending = (): StepState[] => demoSteps.map(() => "pending");

/**
 * Plays the demo while the element holding `ref` is on screen: each step
 * lights up in turn, then the print progress runs 0..1, then it loops.
 */
export function usePrintSequence() {
  const ref = useRef<HTMLDivElement>(null);
  const [states, setStates] = useState<StepState[]>(pending);
  const [progress, setProgress] = useState(0);
  const [label, setLabel] = useState("Ready");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setStates(demoSteps.map(() => "done"));
      setProgress(1);
      setLabel("Done");
      setDone(true);
      return;
    }

    let timers: number[] = [];
    const clear = () => {
      timers.forEach((t) => window.clearTimeout(t));
      timers = [];
    };
    const later = (fn: () => void, ms: number) => {
      timers.push(window.setTimeout(fn, ms));
    };
    const mark = (i: number, s: StepState) =>
      setStates((prev) => prev.map((v, k) => (k === i ? s : v)));
    const reset = () => {
      setStates(pending());
      setProgress(0);
      setLabel("Sending");
      setDone(false);
    };

    const run = () => {
      clear();
      reset();
      let i = 0;
      const next = () => {
        if (i < PRINT) {
          const k = i;
          mark(k, "active");
          later(() => mark(k, "done"), 520);
          i++;
          later(next, 650);
        } else {
          mark(PRINT, "active");
          setLabel("Printing");
          let prog = 0;
          const tick = () => {
            prog += 0.012;
            setProgress(Math.min(prog, 1));
            if (prog < 1) {
              later(tick, 60);
            } else {
              mark(PRINT, "done");
              setLabel("Done");
              setDone(true);
              later(run, 4200);
            }
          };
          tick();
        }
      };
      next();
    };

    reset();
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) run();
        else clear();
      },
      { threshold: 0.25 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      clear();
    };
  }, []);

  return { ref, states, progress, label, done };
}
