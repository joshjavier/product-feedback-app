import RequestCard from "@/components/request-card";
import { Request } from "product-feedback";

interface FeedbackListProps {
  title: string;
  description: string;
  total?: number;
  items?: Request[];
  upvotedIds?: string[];
}

export default function FeedbackList({
  title,
  total = 0,
  description,
  items,
  upvotedIds,
}: FeedbackListProps) {
  return (
    <div>
      <div className="mb-6 lg:mb-8">
        <h2 className="font-bold text-lg/[normal] tracking-[-0.25px]">
          {title} ({total})
        </h2>
        <p className="mt-1 text-lynch text-[13px] sm:text-sm/[normal] lg:text-base/[normal]">
          {description}
        </p>
      </div>
      <ul className="space-y-4 lg:space-y-6">
        {items &&
          items.map((item) => (
            <li key={item._id.toString()}>
              <RequestCard
                request={item}
                upvoted={upvotedIds?.includes(item._id.toString())}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
