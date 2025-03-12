import clsx from "clsx";

const fillColor: Record<string, string> = {
  planned: "fill-tacao",
  "in-progress": "fill-electric-violet",
  live: "fill-malibu",
};

export default function StatusIndicator({
  status,
  className,
}: {
  status: string;
  className?: string;
}) {
  return (
    <div className={clsx(className, "flex gap-4 items-center")}>
      <svg width={8} height={8} className={fillColor[status]}>
        <circle cx={4} cy={4} r={4} />
      </svg>
      <span className="capitalize">{status}</span>
    </div>
  );
}
