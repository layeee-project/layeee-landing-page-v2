import Link from "next/link";
import CopyPageButton from "./CopyPageButton";
import DocBlocks from "./DocBlocks";
import DocsToc from "./DocsToc";
import { docHref, docPages, type DocPage } from "@/data/docs";

const pagerLink =
  "grid gap-1 rounded-xl border border-line px-4 py-3 no-underline hover:border-line-strong hover:bg-soft";

export default function DocsArticle({ page }: { page: DocPage }) {
  const index = docPages.indexOf(page);
  const prev = docPages[index - 1];
  const next = docPages[index + 1];

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_240px] max-[1200px]:grid-cols-1">
      <main
        id="main"
        className="min-w-0 px-[clamp(20px,5vw,72px)] pt-10 pb-24 text-[15px] leading-[1.7]"
      >
        <article className="mx-auto max-w-[680px]" id="doc">
          <nav
            className="flex gap-2 text-[12.5px] text-muted"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="no-underline hover:text-fg">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-fg">{page.title}</span>
          </nav>
          <h1 className="mt-7 text-[clamp(32px,4vw,46px)] font-medium leading-[1.1] tracking-[-0.025em] text-balance">
            {page.title}
          </h1>
          <p className="mt-4 text-[clamp(16px,1.3vw,18px)] text-muted">
            {page.lead}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-line pb-5 text-[12.5px] text-muted">
            <span>
              Updated <span className="text-fg">{page.updated}</span>
            </span>
            <span aria-hidden="true">|</span>
            <CopyPageButton targetId="doc" />
          </div>

          <div className="mt-2">
            <DocBlocks blocks={page.intro} />
          </div>

          {page.sections.map((s) => {
            const Heading = s.level === 2 ? "h2" : "h3";
            return (
              <section key={s.id}>
                <Heading
                  id={s.id}
                  className={
                    s.level === 2
                      ? "group mt-14 text-[clamp(24px,2.6vw,31px)] font-medium leading-[1.2] tracking-[-0.02em]"
                      : "group mt-9 text-[19px] font-semibold"
                  }
                >
                  {s.title}
                  <a
                    href={`#${s.id}`}
                    aria-label={`Link to ${s.title}`}
                    className="ml-2 text-muted no-underline opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
                  >
                    #
                  </a>
                </Heading>
                <DocBlocks blocks={s.blocks} />
              </section>
            );
          })}

          <nav
            className="mt-16 grid grid-cols-2 gap-3 border-t border-line pt-6 text-[14px] max-[560px]:grid-cols-1"
            aria-label="More docs"
          >
            {prev ? (
              <Link href={docHref(prev.slug)} className={pagerLink}>
                <span className="text-[12px] text-muted">Previous</span>
                <span className="font-semibold">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                href={docHref(next.slug)}
                className={`${pagerLink} text-right`}
              >
                <span className="text-[12px] text-muted">Next</span>
                <span className="font-semibold">{next.title}</span>
              </Link>
            )}
          </nav>
        </article>
      </main>
      <DocsToc
        items={page.sections.map(({ id, title, level }) => ({
          id,
          title,
          level,
        }))}
      />
    </div>
  );
}
