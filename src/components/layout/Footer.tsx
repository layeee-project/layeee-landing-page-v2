import Image from "next/image";
import Container from "@/components/ui/Container";
import { footerLinks } from "@/data/nav";

export default function Footer() {
  return (
    /* sticks to the bottom of the screen behind the page, which scrolls away to uncover it */
    <footer className="sticky bottom-0 inset-x-0 z-0 bg-dark pt-[clamp(28px,3.4vw,44px)] pb-[clamp(20px,2.2vw,28px)] text-dark-fg">
      <Container>
        <div className="flex flex-wrap justify-between gap-8">
          <nav
            className="flex flex-wrap content-start gap-x-7 gap-y-2.5 text-[clamp(14.5px,1.13vw,16px)]"
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
          <div className="w-full flex justify-center mt-[clamp(24px,3.7vw,48px)]">
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
        <div className="mt-4 flex flex-wrap justify-between gap-3 border-t border-white/12 pt-5 text-[clamp(13px,1.02vw,14.5px)] text-dark-muted">
          <span>© {new Date().getFullYear()} Layeee</span>
          <span>layeee.my</span>
        </div>
      </Container>
    </footer>
  );
}
