import type { ReactNode } from "react";

/* icon: the shapes of a 24px outline icon, wrapped in <svg> by HowItWorks */
export type HowStep = { title: string; text: string; icon: ReactNode };

export const howSteps: HowStep[] = [
  {
    title: "Start from a ready-made design",
    text: "Browse online model platforms inside the app and select what you like.",
    icon: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4.5 4.5" />
      </>
    ),
  },
  {
    title: "Change it in the builder",
    text: "Scale it, reshape it, or build a basic design from scratch.",
    icon: (
      <>
        <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="M4 7.5 12 12l8-4.5M12 12v9" />
      </>
    ),
  },
  {
    title: "Print here or nearby",
    text: "Use your own S1, or let the app find a printing service close to you.",
    icon: (
      <>
        <path d="M12 21c4-3.6 6.5-6.6 6.5-10A6.5 6.5 0 0 0 5.5 11c0 3.4 2.5 6.4 6.5 10Z" />
        <circle cx="12" cy="11" r="2.4" />
      </>
    ),
  },
];

/* the animated demo: the last step is the print itself */
export const demoPrompt =
  "Print a phone stand in PLA, a little wider at the base.";
export const demoReply =
  "Done. Your phone stand is printed and ready to pick up.";

export const demoSteps = [
  { title: "Search", text: "phone stand on model platforms" },
  { title: "Pick", text: "Phone stand" },
  { title: "Edit", text: "widen the base by 10 mm" },
  { title: "Choose", text: "your S1" },
  { title: "Send", text: "PLA · 0.2 mm layers" },
  { title: "Print", text: "layer by layer" },
];
