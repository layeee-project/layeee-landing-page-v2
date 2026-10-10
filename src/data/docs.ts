/* Docs content. Text supports `inline code` and [links](/docs/...). */

export type DocBlock =
  | { type: "p"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "code"; label: string; code: string }
  | { type: "table"; rows: [string, string][] }
  | { type: "note"; text: string }
  | { type: "tabs"; tabs: { label: string; blocks: DocBlock[] }[] };

export type DocSection = {
  id: string;
  title: string;
  /** 2 = main heading, 3 = sub heading (indented in "On this page") */
  level: 2 | 3;
  blocks: DocBlock[];
};

export type DocPage = {
  /** "" is the docs home, /docs */
  slug: string;
  title: string;
  lead: string;
  updated: string;
  intro: DocBlock[];
  sections: DocSection[];
};

export const docHref = (slug: string) => (slug ? `/docs/${slug}` : "/docs");

export const docPages: DocPage[] = [
  {
    slug: "",
    title: "Getting started",
    lead: "Find a model, shape it in the builder, and print it on your S1 or at a printer near you.",
    updated: "Oct 10, 2026",
    intro: [
      {
        type: "p",
        text: "Layeee is a 3D printer and an app. The S1 FDM printer prints your designs, and the app helps you find, edit and send them to print.",
      },
      {
        type: "p",
        text: "You do not need a printer to start. See [Nearby printers](/docs/nearby-printers) to send a design to a printing service close to you instead.",
      },
    ],
    sections: [
      {
        id: "first-print",
        title: "Print your first part",
        level: 2,
        blocks: [
          {
            type: "tabs",
            tabs: [
              {
                label: "On your S1",
                blocks: [
                  {
                    type: "list",
                    ordered: true,
                    items: [
                      "Pick a design from the model library, or open the builder.",
                      "Choose your S1 as the printer.",
                      "Send the print and watch the part build up layer by layer.",
                    ],
                  },
                  {
                    type: "code",
                    label: "settings",
                    code: "Printer        Your S1\nMaterial       PLA\nLayer height   0.2 mm",
                  },
                ],
              },
              {
                label: "At a printer nearby",
                blocks: [
                  {
                    type: "list",
                    ordered: true,
                    items: [
                      "Finish your design in the app.",
                      "Allow location so nearby printing services can be shown.",
                      "Pick a service and request the print.",
                    ],
                  },
                  {
                    type: "code",
                    label: "settings",
                    code: "Printer        A printer nearby\nNeeds          Your location\nOwn printer    Not needed",
                  },
                ],
              },
            ],
          },
          {
            type: "p",
            text: "Start with a quick draft at `0.3 mm` if you are unsure about the size, then print the final part at a finer layer height.",
          },
        ],
      },
      {
        id: "steps",
        title: "The three steps",
        level: 2,
        blocks: [],
      },
      {
        id: "pick-a-design",
        title: "Pick a design",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "Browse ready-made designs in the [model library](/docs/model-library), or create a basic one in the [3D builder](/docs/builder).",
          },
        ],
      },
      {
        id: "choose-a-printer",
        title: "Choose a printer",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "Use your own [S1](/docs/s1-printer), or select a [nearby printing service](/docs/nearby-printers).",
          },
        ],
      },
      {
        id: "print",
        title: "Print",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "The part builds up layer by layer, and you pick it up. [Materials and layers](/docs/materials) explains which settings to choose.",
          },
        ],
      },
      {
        id: "help",
        title: "Get help",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "Join the Telegram or Discord community. Both are linked in the footer of the [home page](/).",
          },
        ],
      },
    ],
  },
  {
    slug: "model-library",
    title: "Model library",
    lead: "Browse and select ready-made designs without leaving the app.",
    updated: "Oct 10, 2026",
    intro: [
      {
        type: "p",
        text: "The app connects to online 3D model platforms through an API, so you can browse and select ready-made designs in one place.",
      },
    ],
    sections: [
      {
        id: "find-a-model",
        title: "Find a model",
        level: 2,
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Open the model library in the app.",
              "Search for what you want to print, for example `phone stand`.",
              "Select the design you like.",
            ],
          },
        ],
      },
      {
        id: "after-selecting",
        title: "After you select a model",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "Send it straight to print, or open it in the [3D builder](/docs/builder) and make a basic edit first.",
          },
          {
            type: "note",
            text: "Check the original model's licence before sharing your version.",
          },
        ],
      },
    ],
  },
  {
    slug: "builder",
    title: "3D builder",
    lead: "A simple built-in tool for creating or editing basic designs before you print.",
    updated: "Oct 10, 2026",
    intro: [
      {
        type: "p",
        text: "Use the builder to scale a design, reshape it, or build a basic one from scratch.",
      },
    ],
    sections: [
      {
        id: "edit-a-model",
        title: "Edit a model from the library",
        level: 2,
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Select a model from the library.",
              "Open it in the builder and make a basic edit.",
              "Send it to your S1 or a printer nearby.",
            ],
          },
        ],
      },
      {
        id: "replace-a-part",
        title: "Rebuild a broken part",
        level: 2,
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Find a similar part in the model library, or build a basic one.",
              "Match the size in the builder.",
              "Print on the S1 in PETG for a tougher result.",
            ],
          },
          { type: "note", text: "Check fit with a quick draft print first." },
        ],
      },
      {
        id: "size-limit",
        title: "Size limit",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "A design fits the S1 when it is within the build volume of `220 × 220 × 250 mm`.",
          },
        ],
      },
    ],
  },
  {
    slug: "nearby-printers",
    title: "Nearby printers",
    lead: "Request a print from a printing service close to you. No printer needed.",
    updated: "Oct 10, 2026",
    intro: [
      {
        type: "p",
        text: "Nearby printer tracking uses your location to show printing services close by, so you can request a print from one of them.",
      },
    ],
    sections: [
      {
        id: "request-a-print",
        title: "Request a print",
        level: 2,
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Finish your design in the app.",
              "Allow location so nearby printing services can be shown.",
              "Pick a service and request the print.",
            ],
          },
          {
            type: "p",
            text: "It works with designs from the model library or the builder.",
          },
        ],
      },
      {
        id: "location",
        title: "Location",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "Only nearby printer tracking uses your location, to show printing services around you. You can print on your own S1 without it.",
          },
          {
            type: "note",
            text: "Which services appear depends on where you are.",
          },
        ],
      },
    ],
  },
  {
    slug: "s1-printer",
    title: "S1 printer",
    lead: "An FDM printer sized for the desk. It prints the designs you find and build in the app.",
    updated: "Oct 10, 2026",
    intro: [],
    sections: [
      {
        id: "specifications",
        title: "Specifications",
        level: 2,
        blocks: [
          {
            type: "table",
            rows: [
              ["Type", "FDM"],
              ["Build volume", "220 × 220 × 250 mm"],
              ["Layer height", "0.1–0.3 mm"],
              ["Print speed", "up to 300 mm/s"],
              ["Materials", "PLA, PETG, TPU"],
            ],
          },
        ],
      },
      {
        id: "print-from-the-app",
        title: "Print from the app",
        level: 2,
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Build or open the design.",
              "Choose your S1 as the printer.",
              "Choose a material and a layer height, then send the print.",
            ],
          },
          {
            type: "code",
            label: "example",
            code: "Printer        S1\nMaterial       PLA\nLayer height   0.2 mm",
          },
        ],
      },
      {
        id: "pricing",
        title: "Pricing",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "Pricing is not published yet. It will appear on the [home page](/#ways) when it is ready.",
          },
        ],
      },
    ],
  },
  {
    slug: "materials",
    title: "Materials and layers",
    lead: "Pick a material for the job and a layer height for detail or speed.",
    updated: "Oct 10, 2026",
    intro: [
      {
        type: "note",
        text: "Material notes are general guidance. Settings vary by model.",
      },
    ],
    sections: [
      {
        id: "materials",
        title: "Materials",
        level: 2,
        blocks: [],
      },
      {
        id: "pla",
        title: "PLA",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "Everyday prints. A general-purpose material for prototypes, models and household parts.",
          },
        ],
      },
      {
        id: "petg",
        title: "PETG",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "Tougher parts. Good for brackets, clips and parts that take a knock.",
          },
        ],
      },
      {
        id: "tpu",
        title: "TPU",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "Flexible parts. For grips, bumpers and anything that needs to bend. Flexible filament usually prints best at moderate speeds, and the part should cool before handling.",
          },
        ],
      },
      {
        id: "layer-height",
        title: "Layer height",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "Choose a layer height from `0.1` to `0.3 mm` to trade detail against print time.",
          },
          {
            type: "table",
            rows: [
              ["0.1 mm", "Fine detail. Smoother, and takes longer."],
              ["0.2 mm", "A middle setting for everyday prints."],
              ["0.3 mm", "Quick draft. Faster, with more visible layer lines."],
            ],
          },
        ],
      },
    ],
  },
];

/* sidebar: a link, or a group of links */
export type DocNavLink = { label: string; href: string };
export type DocNavItem = DocNavLink | { label: string; children: DocNavLink[] };

const link = (slug: string): DocNavLink => {
  const page = docPages.find((p) => p.slug === slug);
  return { label: page ? page.title : slug, href: docHref(slug) };
};

export const docNav: DocNavItem[] = [
  link(""),
  {
    label: "The app",
    children: [link("model-library"), link("builder"), link("nearby-printers")],
  },
  link("s1-printer"),
  link("materials"),
];
