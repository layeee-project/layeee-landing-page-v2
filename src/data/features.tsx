import type { ReactNode } from "react";

/* icon: the shapes of a 24px outline icon, wrapped in <svg> by FeatureCard */
export type Feature = { title: string; text: string; icon: ReactNode };

export const features: Feature[] = [
  {
    title: "Model library API",
    text: "Connects to online 3D model platforms so you can browse and select ready-made designs in the app.",
    icon: <path d="M9 8 5 12l4 4M15 8l4 4-4 4M13.5 6l-3 12" />,
  },
  {
    title: "3D builder tool",
    text: "A simple built-in tool for creating or editing basic designs before you print.",
    icon: (
      <>
        <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="M4 7.5 12 12l8-4.5M12 12v9" />
      </>
    ),
  },
  {
    title: "Nearby printer tracking",
    text: "Uses your location to show printing services close by, so you can request a print.",
    icon: (
      <>
        <path d="M12 21c4-3.6 6.5-6.6 6.5-10A6.5 6.5 0 0 0 5.5 11c0 3.4 2.5 6.4 6.5 10Z" />
        <circle cx="12" cy="11" r="2.4" />
      </>
    ),
  },
  {
    title: "S1 FDM printer",
    text: "220 × 220 × 250 mm of build volume for everyday prints on your own desk.",
    icon: (
      <>
        <rect x="4" y="3" width="16" height="6" rx="1.5" />
        <path d="M12 9v4M7 21h10M9 13h6l1 8H8l1-8Z" />
      </>
    ),
  },
  {
    title: "Fine or fast layers",
    text: "Choose layer heights from 0.1 to 0.3 mm to trade detail against print time.",
    icon: <path d="M4 7h16M4 12h16M4 17h16" />,
  },
  {
    title: "Up to 300 mm/s",
    text: "Print speeds that keep a small job short, with PLA, PETG and TPU supported.",
    icon: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  },
];
