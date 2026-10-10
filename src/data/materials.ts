export type Material = { name: string; title: string; text: string };

export const materials: Material[] = [
  {
    name: "PLA",
    title: "Everyday prints",
    text: "A general-purpose material for prototypes, models and household parts.",
  },
  {
    name: "PETG",
    title: "Tougher parts",
    text: "Good for brackets, clips and parts that take a knock.",
  },
  {
    name: "TPU",
    title: "Flexible parts",
    text: "For grips, bumpers and anything that needs to bend.",
  },
];

export const materialNames = materials.map((m) => m.name);
