import Link from "next/link";
import client from "@/lib/client";
import StatusIndicator from "@/components/status-indicator";

export default async function StatusSummary() {
  const data = (await client
    .service("requests")
    .find({ query: { countByStatus: "" } })) as unknown as {
    status: string;
    count: number;
  }[];

  const statusList = [];
  statusList.push(data.find((item) => item.status === "planned")!);
  statusList.push(data.find((item) => item.status === "in-progress")!);
  statusList.push(data.find((item) => item.status === "live")!);

  return (
    <div className="flex items-center flex-wrap justify-between gap-6">
      <h2 className="font-bold text-lg/[normal] tracking-[-0.25px]">Roadmap</h2>
      <Link
        href="/roadmap"
        className="font-semibold text-[13px] text-royal-blue hover:text-[#8397f8] underline transition-colors"
      >
        View
      </Link>
      <ul className="w-full flex flex-col gap-2">
        {statusList.map(({ status, count }) => (
          <li
            key={status}
            className="flex items-center gap-4 justify-between text-lynch"
          >
            <StatusIndicator status={status} />
            <div className="font-bold">{count}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
