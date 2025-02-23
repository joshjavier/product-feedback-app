import { sleep } from "@/lib/helpers";
import SuggestionsList from "./suggestions-list";
import client from "@/lib/client";
import { Request } from "product-feedback";

export default async function Suggestions({ category }: { category?: string }) {
  // Simulate delay to see the skeleton loader
  await sleep(5000);

  const { total, data } = await client.service("requests").find({
    query: {
      status: "suggestion",
      category: category as Request["category"],
    },
  });

  return (
    <>
      <div className="flex gap-[38px] items-center rounded-[10] bg-rhino text-white py-3.5 px-3 md:px-4">
        <div className="hidden sm:block">{total} Suggestions</div>
        <div>Sort by : Most Upvotes</div>
        <button className="ml-auto cursor-pointer bg-electric-violet hover:bg-[#C75AF6] text-zircon min-w-[134] sm:min-w-[158] min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors">
          + Add Feedback
        </button>
      </div>
      <SuggestionsList suggestions={data} />
    </>
  );
}
