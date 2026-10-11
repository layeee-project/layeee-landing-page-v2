import Icon from "@/components/ui/Icon";

const comment = "text-[#8f8780]";
const val = "font-medium text-[#ff9b58]";

/* the S1 spec sheet, drawn as a code block */
export default function SpecCode() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-code-bg text-code-fg">
      <div className="flex items-center gap-2.5 border-b border-white/12 px-5 py-3.5 font-mono text-[clamp(13px,1.02vw,14.5px)] font-medium text-dark-muted">
        <svg
          className="size-4"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="2.5" y="2" width="11" height="3" rx="1" />
          <path d="M8 5v3M5 14h6l-.8-6H5.8L5 14Z" />
        </svg>
        <span>S1 specifications</span>
      </div>
      <pre className="m-0 overflow-x-auto px-5 py-[22px] font-mono text-sm leading-[1.9]">
        <code>
          <span className={comment}># Build volume</span>
          {"\n"}
          <b className={val}>220 × 220 × 250</b> mm
          {"\n\n"}
          <span className={comment}># Layer height</span>
          {"\n"}
          <b className={val}>0.1 – 0.3</b> mm
          {"\n\n"}
          <span className={comment}># Print speed</span>
          {"\n"}up to <b className={val}>300</b> mm/s
          {"\n\n"}
          <span className={comment}># Materials</span>
          {"\n"}
          <b className={val}>PLA</b>, <b className={val}>PETG</b>,{" "}
          <b className={val}>TPU</b>
        </code>
      </pre>
      <a
        href="#closing"
        className="flex items-center gap-2 border-t border-white/12 px-5 py-3.5 text-sm font-semibold text-code-fg no-underline"
      >
        Get an S1
        <Icon name="arrow" className="size-[15px]" />
      </a>
    </div>
  );
}
