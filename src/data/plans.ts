export type Plan = {
  id: string;
  featured: boolean;
  title: string;
  status: string;
  price: string;
  priceNote: string;
  text: string;
  features: string[];
  cta: { href: string; label: string; variant: "primary" | "secondary" };
  terms: string;
};

export const plans: Plan[] = [
  {
    id: "plan-home",
    featured: true,
    title: "Print at home",
    status: "S1 printer",
    price: "S1",
    priceNote: "FDM printer",
    text: "A printer of your own for everyday designs, with the app doing the rest.",
    features: [
      "220 × 220 × 250 mm build volume",
      "0.1–0.3 mm layer height",
      "Print speeds up to 300 mm/s",
      "PLA, PETG and TPU",
    ],
    cta: { href: "#closing", label: "Get started", variant: "primary" },
    terms: "Pricing will be published here.",
  },
  {
    id: "plan-near",
    featured: false,
    title: "Print nearby",
    status: "In the app",
    price: "Nearby",
    priceNote: "no printer needed",
    text: "Find a printing service around you and request your print from the app.",
    features: [
      "Uses your location to show services close by",
      "Works with designs from the library or builder",
      "Request a print without owning a printer",
    ],
    cta: { href: "#how", label: "See how it works", variant: "secondary" },
    terms: "Available services depend on your area.",
  },
];
