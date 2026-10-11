export type NavLink = { href: string; label: string };

/* header links, also the first links in the footer */
export const navLinks: NavLink[] = [
  { href: "/#platform", label: "Features" },
  { href: "/#ideas", label: "Ideas" },
  { href: "/#s1", label: "S1 printer" },
  { href: "/#ways", label: "Ways to print" },
  { href: "/#faq", label: "FAQ" },
  { href: "/docs", label: "docs" },
];

export const footerLinks: NavLink[] = [
  ...navLinks,
  { href: "/#top", label: "Telegram" },
  { href: "/#top", label: "Discord" },
  { href: "/#top", label: "Terms and Conditions" },
];
