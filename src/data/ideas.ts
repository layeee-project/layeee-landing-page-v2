/* 16px outline icon paths for the idea category */
export const ideaIcons = {
  print: "M8 2 14 5v6l-6 3-6-3V5l6-3Z",
  arrow: "M3 13 13 3M9 3h4v4",
  pin: "M8 14c3-2.6 4.8-4.8 4.8-7.2a4.8 4.8 0 1 0-9.6 0C3.2 9.2 5 11.4 8 14Z",
  plus: "M2 8h12M8 2v12",
} as const;

export type Idea = {
  category: string;
  icon: keyof typeof ideaIcons;
  code: string;
  title: string;
  text: string;
  steps: string[];
  note: string;
};

export const ideas: Idea[] = [
  {
    category: "Print",
    icon: "print",
    code: "PETG · 0.2 mm layers",
    title: "Replace a broken part",
    text: "Rebuild a small clip, knob or bracket and print it in a tougher material.",
    steps: [
      "Find a similar part in the model library, or build a basic one.",
      "Match the size in the builder.",
      "Print on the S1 in PETG for a tougher result.",
    ],
    note: "Check fit with a quick draft print first.",
  },
  {
    category: "Print",
    icon: "print",
    code: "TPU · flexible",
    title: "Print something flexible",
    text: "Bumpers, grips and feet that bend instead of crack.",
    steps: [
      "Pick or build a simple shape.",
      "Choose TPU as the material.",
      "Print on the S1 and let it cool before handling.",
    ],
    note: "Flexible filament usually prints best at moderate speeds.",
  },
  {
    category: "Draft",
    icon: "arrow",
    code: "PLA · 0.3 mm layers",
    title: "Prototype fast in PLA",
    text: "Check a shape in your hands before spending time on a fine print.",
    steps: [
      "Build or open the design.",
      "Set the layer height to 0.3 mm for a quick draft.",
      "Print, test the fit, then adjust and repeat.",
    ],
    note: "Thicker layers print faster and show more layer lines.",
  },
  {
    category: "Detail",
    icon: "arrow",
    code: "PLA · 0.1 mm layers",
    title: "Print fine detail",
    text: "Small figures and textured parts look smoother at the finest layer height.",
    steps: [
      "Choose a model with small features.",
      "Set the layer height to 0.1 mm.",
      "Allow extra time, since finer layers take longer.",
    ],
    note: "Use the 0.3 mm draft first if you are unsure about the size.",
  },
  {
    category: "Nearby",
    icon: "pin",
    code: "Location → printer near you",
    title: "Print without a printer",
    text: "Send a design to a printing service close to you.",
    steps: [
      "Finish your design in the app.",
      "Allow location so nearby printing services can be shown.",
      "Pick a service and request the print.",
    ],
    note: "Which services appear depends on where you are.",
  },
  {
    category: "Edit",
    icon: "plus",
    code: "Library → Builder → Print",
    title: "Remix a downloaded model",
    text: "Start with someone else's design and make it fit your project.",
    steps: [
      "Select a model from the library.",
      "Open it in the builder and make a basic edit.",
      "Send it to your S1 or a printer nearby.",
    ],
    note: "Check the original model's licence before sharing your version.",
  },
];
