export type FaqEntry = { question: string; answer: string };

export const faqs: FaqEntry[] = [
  {
    question: "What is Layeee?",
    answer:
      "A 3D printer and an app. The S1 FDM printer prints your designs, and the app helps you find, edit and send them to print.",
  },
  {
    question: "Do I need a printer?",
    answer:
      "No. Nearby printer tracking uses your location to show printing services close to you, so you can request a print from one of them.",
  },
  {
    question: "Where do the models come from?",
    answer:
      "The app connects to online 3D model platforms through an API. You browse and select ready-made designs without leaving the app.",
  },
  {
    question: "Can I make or change a design?",
    answer:
      "Yes. The 3D builder tool is a simple built-in tool for creating or editing basic designs before printing.",
  },
  {
    question: "What can the S1 print?",
    answer:
      "It is an FDM printer with a 220 × 220 × 250 mm build volume. It prints PLA, PETG and TPU at layer heights from 0.1 to 0.3 mm and speeds up to 300 mm/s.",
  },
  {
    question: "Why does the app need my location?",
    answer:
      "Only nearby printer tracking uses it, to show printing services around you. You can print on your own S1 without it.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing is not published yet. It will appear on this page when it is ready.",
  },
  {
    question: "Where can I ask questions?",
    answer:
      "Join the Telegram or Discord community. Both are linked in the footer.",
  },
];
