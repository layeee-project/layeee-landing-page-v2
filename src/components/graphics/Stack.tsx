import { cx } from "@/lib/ui";

const LAYERS = 20;
const CX = 150;
const HW = 62;
const HH = 31;
const TH = 7;
const BASE_Y = 196;

const edge = "stroke-line-strong stroke-1 [stroke-linejoin:round]";

/** Isometric stack of printed layers. progress: 0..1 */
export default function Stack({
  progress,
  className,
}: {
  progress: number;
  className?: string;
}) {
  const shown = Math.round(progress * LAYERS);
  const top = BASE_Y - Math.max(shown, 0) * TH + 20 - TH;
  const sway = Math.sin(progress * 40) * 26;

  const plate = [
    [CX, BASE_Y + 8],
    [CX + HW + 40, BASE_Y + 8 + HH + 20],
    [CX, BASE_Y + 8 + 2 * (HH + 20)],
    [CX - HW - 40, BASE_Y + 8 + HH + 20],
  ]
    .map((p) => p.join(","))
    .join(" ");

  return (
    <svg viewBox="0 0 300 260" aria-hidden="true" className={className}>
      <polygon
        points={plate}
        className="fill-soft stroke-line-strong stroke-1"
      />
      {Array.from({ length: shown }, (_, k) => {
        const y = BASE_Y - k * TH + 20;
        const yt = y - TH;
        const last = k === shown - 1;
        return (
          <g key={k}>
            <polygon
              className={cx("fill-soft", edge)}
              points={`${CX - HW},${yt + HH} ${CX},${yt + 2 * HH} ${CX},${y + 2 * HH} ${CX - HW},${y + HH}`}
            />
            <polygon
              className={cx("fill-accent-soft", edge)}
              points={`${CX + HW},${yt + HH} ${CX},${yt + 2 * HH} ${CX},${y + 2 * HH} ${CX + HW},${y + HH}`}
            />
            <polygon
              className={cx(last ? "fill-accent" : "fill-panel", edge)}
              points={`${CX},${yt} ${CX + HW},${yt + HH} ${CX},${yt + 2 * HH} ${CX - HW},${yt + HH}`}
            />
          </g>
        );
      })}
      {progress < 1 && (
        <g transform={`translate(${CX + sway},${top + HH + 6})`}>
          <rect
            x="-12"
            y="-34"
            width="24"
            height="18"
            rx="3"
            className="fill-fg"
          />
          <polygon points="-5,-16 5,-16 0,-4" className="fill-accent" />
        </g>
      )}
    </svg>
  );
}
