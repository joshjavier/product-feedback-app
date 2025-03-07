import Image from "next/image";
import RequestCard from "@/components/request-card";
import { Request } from "product-feedback";

export default function SuggestionsList({
  suggestions,
}: {
  suggestions: Request[];
}) {
  if (suggestions.length === 0) {
    return (
      <div className="bg-white text-lynch rounded-[10] p-6 min-h-[460] sm:min-h-[600] grid place-items-center">
        <div className="max-w-[410] text-center">
          <Image
            src="/assets/suggestions/illustration-empty.svg"
            alt=""
            width={102}
            height={108}
            className="inline-block mb-[39] sm:mb-[53.26] sm:w-[129.64]"
          />
          <p className="font-bold text-lg/[normal] sm:text-2xl/[normal] text-east-bay tracking-[-0.25px] sm:tracking-[-0.33px]">
            There is no feedback yet.
          </p>
          <p className="mt-3.5 mb-6 md:mt-4 sm:mb-12 text-[13px] sm:text-base/[normal]">
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
          <button className="cursor-pointer bg-electric-violet hover:bg-[#C75AF6] text-zircon min-w-[134] sm:min-w-[158] min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors">
            + Add Feedback
          </button>
        </div>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {suggestions.map((suggestion) => (
        <li key={suggestion._id.toString()}>
          <RequestCard request={suggestion} />
        </li>
      ))}
    </ul>
  );
}
