import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import type { Plan } from "@/data/plans";
import { cx } from "@/lib/ui";

export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      aria-labelledby={plan.id}
      className={cx(
        "flex flex-col gap-4 rounded-2xl border bg-panel p-[clamp(24px,2.6vw,36px)]",
        plan.featured
          ? "border-accent shadow-[inset_0_0_0_1px_var(--accent)]"
          : "border-line",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 id={plan.id} className="text-xl font-semibold">
          {plan.title}
        </h3>
        <span className="rounded-full bg-accent-soft px-2.5 py-[3px] font-mono text-[11.5px] font-medium uppercase tracking-[.06em] text-accent-ink">
          {plan.status}
        </span>
      </div>
      <p className="text-[clamp(34px,3.6vw,48px)] font-medium leading-[1.1] tracking-[-0.02em]">
        {plan.price}{" "}
        <span className="ml-1.5 text-[15px] font-normal tracking-normal text-muted">
          {plan.priceNote}
        </span>
      </p>
      <p className="text-[15px] text-muted">{plan.text}</p>
      <ul className="grid flex-1 gap-2.5 text-[14.5px]">
        {plan.features.map((f) => (
          <li key={f} className="grid grid-cols-[20px_1fr] gap-2.5">
            <Icon name="check" className="mt-[3px] size-[18px] text-accent" />
            {f}
          </li>
        ))}
      </ul>
      <Button
        href={plan.cta.href}
        variant={plan.cta.variant}
        className="self-start"
      >
        {plan.cta.label}
      </Button>
      <p className="text-[13px] text-muted">{plan.terms}</p>
    </article>
  );
}
