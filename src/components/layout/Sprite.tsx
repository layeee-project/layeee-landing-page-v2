/* SVG icon sprite. The i-* icons are drawn with <Icon name="arrow" /> (ui/Icon.tsx),
   the s-* shapes with <svg><use href="#s-cube" /></svg> */
const edge = "stroke-line-strong stroke-[1.3] [stroke-linejoin:round]";
const A = `fill-panel ${edge}`;
const B = `fill-soft ${edge}`;
const C = `fill-accent-soft ${edge}`;

export default function Sprite() {
  return (
    <svg
      width="0"
      height="0"
      className="absolute"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <symbol id="i-arrow" viewBox="0 0 16 16">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-check" viewBox="0 0 16 16">
          <path
            d="M3 8.5 6.5 12 13 4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-chev" viewBox="0 0 16 16">
          <path
            d="M3.5 6 8 10.5 12.5 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-plus" viewBox="0 0 16 16">
          <path
            d="M8 3v10M3 8h10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="s-cube" viewBox="0 0 120 90">
          <polygon className={A} points="60,10 102,30 60,50 18,30" />
          <polygon className={B} points="18,30 60,50 60,82 18,62" />
          <polygon className={C} points="102,30 60,50 60,82 102,62" />
        </symbol>
        <symbol id="s-slab" viewBox="0 0 120 90">
          <polygon className={A} points="60,28 108,50 60,72 12,50" />
          <polygon className={B} points="12,50 60,72 60,82 12,60" />
          <polygon className={C} points="108,50 60,72 60,82 108,60" />
        </symbol>
        <symbol id="s-pyr" viewBox="0 0 120 90">
          <polygon className={B} points="60,8 16,58 60,80" />
          <polygon className={C} points="60,8 104,58 60,80" />
        </symbol>
        <symbol id="s-cyl" viewBox="0 0 120 90">
          <path className={B} d="M26 28v34c0 9 15 16 34 16s34-7 34-16V28z" />
          <ellipse className={A} cx="60" cy="28" rx="34" ry="16" />
        </symbol>
        <symbol id="s-ring" viewBox="0 0 120 90">
          <ellipse className={B} cx="60" cy="56" rx="42" ry="20" />
          <ellipse className={A} cx="60" cy="46" rx="42" ry="20" />
          <ellipse className={B} cx="60" cy="46" rx="20" ry="9" />
        </symbol>
      </defs>
    </svg>
  );
}
