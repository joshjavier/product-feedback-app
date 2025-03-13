import Link from "next/link";
import client from "@/lib/client";
import BackButton from "@/components/back-button";
import RoadmapTabs from "./roadmap-tabs";
import { Request } from "product-feedback";

export default async function Page() {
  const data = await client.service("requests").getRoadmap();
  const total = data.reduce(
    (result, item) => {
      if (item._id !== "suggestion") {
        result[item._id] = item.total;
      }
      return result;
    },
    { planned: 0, "in-progress": 0, live: 0 }
  );

  const items = data.reduce(
    (result, item) => {
      if (item._id !== "suggestion") {
        result[item._id] = item.requests;
      }
      return result;
    },
    { planned: [], "in-progress": [], live: [] } as Record<string, Request[]>
  );

  return (
    <div className="box-content max-w-[1110] mx-auto px-6 sm:px-10">
      <div className="md:pt-14 lg:pt-[78] pb-24">
        <div className="bg-rhino text-white min-h-[100] md:min-h-[113] p-6 md:px-8 lg:pr-10 flex items-center justify-between max-sm:-mx-6 max-md:-mx-10 md:rounded-[10]">
          <div className="space-y-[3px] sm:space-y-1">
            <BackButton lightOnDark />
            <h1 className="font-bold text-lg/[normal] sm:text-2xl/[normal] tracking-[-0.25px] sm:tracking-[-0.33px]">
              Roadmap
            </h1>
          </div>
          <Link
            href="/feedback/new"
            className="flex items-center justify-center ml-auto cursor-pointer bg-electric-violet hover:bg-[#C75AF6] text-zircon min-w-[134] sm:min-w-[158] min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors"
          >
            + Add Feedback
          </Link>
        </div>
        <RoadmapTabs total={total} items={items} />
      </div>
    </div>
  );
}
