import BackButton from "@/components/back-button";
import RequestCard from "@/components/request-card";
import client from "@/lib/client";
import Link from "next/link";
import FeedbackList from "./feedback-list";

export default async function Page() {
  const data = await client.service("requests").getRoadmap();

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
        <div className="mt-6 sm:mt-12 grid grid-cols-3 gap-2.5 lg:gap-[30]">
          <FeedbackList
            title="Planned"
            total={data.find((item) => item._id === "planned")?.total}
            description="Ideas prioritized for research"
            items={data.find((item) => item._id === "planned")?.requests}
          />
          <FeedbackList
            title="In-Progress"
            total={data.find((item) => item._id === "in-progress")?.total}
            description="Features currently being developed"
            items={data.find((item) => item._id === "in-progress")?.requests}
          />
          <FeedbackList
            title="Live"
            total={data.find((item) => item._id === "live")?.total}
            description="Released features"
            items={data.find((item) => item._id === "live")?.requests}
          />
        </div>
      </div>
    </div>
  );
}
