"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { footerLinks } from "@/data/nav";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setH(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      {/* empty space the page scrolls through to uncover the footer */}
      <div style={{ height: h }} aria-hidden="true" />
      <footer
        ref={ref}
        className="fixed inset-x-0 bottom-0 z-0 bg-dark pt-11 pb-7 text-dark-fg"
      >
        <Container>
          <div className="flex flex-wrap justify-between gap-8">
            <nav
              className="flex flex-wrap content-start gap-x-7 gap-y-2.5 text-[14.5px]"
              aria-label="Footer navigation"
            >
              {footerLinks.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  className="no-underline opacity-90 hover:text-accent hover:opacity-100"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
          <section className="hidden sm:flex mt-[clamp(1rem,3vw,3rem)] justify-center">
            <div className="w-full flex justify-center mt-12">
              <Image
                src="/layeee-white-logo.svg"
                alt="Layeee logo"
                width={1200}
                height={100}
                className="w-[80%] h-auto"
                priority
              />
            </div>
          </section>
          <div className="mt-4 flex flex-wrap justify-between gap-3 border-t border-white/12 pt-5 text-[13px] text-dark-muted">
            <span>© {new Date().getFullYear()} Layeee</span>
            <span>layeee.my</span>
          </div>
        </Container>
      </footer>
    </>
  );
}
