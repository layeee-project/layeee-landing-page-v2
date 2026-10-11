import Link from "next/link";
import Brand from "@/components/layout/Brand";
import ThemeToggle from "@/components/layout/ThemeToggle";
import Button from "@/components/ui/Button";

export default function DocsHeader() {
  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="flex h-14 items-center justify-between gap-4 px-[clamp(16px,2vw,28px)]">
        <div className="flex items-center gap-3.5">
          <Brand href="/" />
          <span className="h-5 w-px bg-line-strong" aria-hidden="true" />
          <Link
            href="/docs"
            className="text-[clamp(13.5px,1.05vw,15px)] font-medium text-muted no-underline hover:text-fg"
          >
            Docs
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href="/#closing" size="sm" arrow={false}>
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}
