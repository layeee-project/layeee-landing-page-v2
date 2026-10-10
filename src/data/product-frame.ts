export type PanelId = "lib" | "builder" | "near" | "s1";

export const captions: Record<PanelId, string> = {
  lib: "Browse ready-made designs from online model platforms.",
  builder: "Create or edit a basic design in the built-in builder.",
  near: "See printing services near you and request a print.",
  s1: "Print at home on the S1, up to 220 × 220 × 250 mm.",
};

/* library panel. shape: id of a symbol in layout/Sprite.tsx */
export const libraryItems = [
  { name: "Phone stand", shape: "s-slab" },
  { name: "Storage box", shape: "s-cube" },
  { name: "Plant pot", shape: "s-cyl" },
  { name: "Napkin ring", shape: "s-ring" },
  { name: "Desk cone", shape: "s-pyr" },
  { name: "Coaster", shape: "s-slab" },
  { name: "Pen cup", shape: "s-cyl" },
  { name: "Dice tray", shape: "s-cube" },
];

/* builder panel */
export const builderTools = ["Cube", "Cyl", "Cone", "Move", "Scale"];

export const builderGroups = [
  {
    title: "Selected",
    rows: [
      ["Width", "40 mm"],
      ["Depth", "40 mm"],
      ["Height", "25 mm"],
    ],
  },
  {
    title: "Print",
    rows: [
      ["Material", "PLA"],
      ["Layer", "0.2 mm"],
      ["Fits S1", "Yes"],
    ],
  },
];

/* nearby panel */
export const nearbyPrinters = [
  { distance: "1.2 km", materials: "PLA, PETG", selected: true },
  { distance: "2.8 km", materials: "PLA, TPU", selected: false },
  { distance: "4.1 km", materials: "PLA, PETG, TPU", selected: false },
  { distance: "6.5 km", materials: "PETG", selected: false },
];

/* S1 panel */
export const s1Specs = [
  ["Type", "FDM"],
  ["Build volume", "220 × 220 × 250 mm"],
  ["Layer height", "0.1–0.3 mm"],
  ["Print speed", "up to 300 mm/s"],
  ["Materials", "PLA, PETG, TPU"],
];
