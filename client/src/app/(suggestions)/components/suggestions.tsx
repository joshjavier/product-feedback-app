import { sleep } from "@/lib/helpers";
import SuggestionsList from "./suggestions-list";
import client from "@/lib/client";
import { Request } from "product-feedback";
import IconSuggestions from "@/icons/icon-suggestions.svg";

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
      <div className="flex gap-[38px] items-center md:rounded-[10] bg-rhino text-white py-2 sm:py-3.5 pl-6 pr-6 md:pr-3 lg:pr-4 max-sm:-mx-6 max-md:-mx-10">
        <div className="hidden sm:flex items-center gap-4 font-bold text-lg/[normal] tracking-[-0.25px]">
          <IconSuggestions />
          <span>
            {total} {total === 1 ? "Suggestion" : "Suggestions"}
          </span>
        </div>
        <div>Sort by : Most Upvotes</div>
        <button className="ml-auto cursor-pointer bg-electric-violet hover:bg-[#C75AF6] text-zircon min-w-[134] sm:min-w-[158] min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors">
          + Add Feedback
        </button>
      </div>
      <SuggestionsList suggestions={data} />
    </>
  );
}
