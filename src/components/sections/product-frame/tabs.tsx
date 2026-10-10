import type { ReactNode } from "react";
import type { PanelId } from "@/data/product-frame";

const ico = {
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
} as const;

export const tabs: { id: PanelId; label: string; icon: ReactNode }[] = [
  {
    id: "lib",
    label: "Model library",
    icon: (
      <svg {...ico}>
        <rect x="2" y="2" width="5" height="5" rx="1" />
        <rect x="9" y="2" width="5" height="5" rx="1" />
        <rect x="2" y="9" width="5" height="5" rx="1" />
        <rect x="9" y="9" width="5" height="5" rx="1" />
      </svg>
    ),
  },
  {
    id: "builder",
    label: "3D builder",
    icon: (
      <svg {...ico} strokeLinejoin="round">
        <path d="M8 1.5 14 4.7v6.6L8 14.5 2 11.3V4.7L8 1.5Z" />
        <path d="M2 4.7 8 8l6-3.3M8 8v6.5" />
      </svg>
    ),
  },
  {
    id: "near",
    label: "Nearby printers",
    icon: (
      <svg {...ico}>
        <path d="M8 14c3-2.6 4.8-4.8 4.8-7.2a4.8 4.8 0 1 0-9.6 0C3.2 9.2 5 11.4 8 14Z" />
        <circle cx="8" cy="6.8" r="1.6" />
      </svg>
    ),
  },
  {
    id: "s1",
    label: "S1 printer",
    icon: (
      <svg {...ico} strokeLinecap="round">
        <rect x="2.5" y="2" width="11" height="3" rx="1" />
        <path d="M8 5v3M5 14h6l-.8-6H5.8L5 14Z" />
      </svg>
    ),
  },
];
