"use client";

import { useState } from "react";
import Brand from "./Brand";
import ThemeToggle from "./ThemeToggle";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import IconButton from "@/components/ui/IconButton";
import { navLinks } from "@/data/nav";
import { cx } from "@/lib/ui";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-[env(safe-area-inset-top,0px)] z-40 border-b border-line bg-bg/80 backdrop-blur-md"
      id="top"
    >
      <Container>
        <div className="flex min-h-[clamp(56px,5vw,68px)] items-center justify-between gap-[clamp(12px,1.8vw,24px)]">
          <Brand />
          <nav
            className="flex gap-1 max-[900px]:hidden"
            aria-label="Primary navigation"
          >
            {navLinks.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-lg px-[13px] py-[7px] text-[clamp(14.5px,1.13vw,16px)] font-medium no-underline hover:bg-soft"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button href="#closing" size="sm" arrow={false}>
              Get started
            </Button>
            <IconButton
              className="hidden max-[900px]:grid"
              id="menuBtn"
              aria-label="Open navigation"
              aria-expanded={open}
              aria-controls="mobileNav"
              onClick={() => setOpen((o) => !o)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </IconButton>
          </div>
        </div>
        <nav
          className={cx("flex-col pb-3.5", open ? "flex" : "hidden")}
          id="mobileNav"
          aria-label="Mobile navigation"
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName === "A") setOpen(false);
          }}
        >
          {navLinks.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="border-t border-line py-[11px] font-medium no-underline"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
