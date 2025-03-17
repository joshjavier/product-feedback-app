import Link from "next/link";
import CommentCount from "./comment-count";
import UpvoteButton from "./upvote-button";
import { Request } from "product-feedback";
import StatusIndicator from "./status-indicator";
import clsx from "clsx";
import { upvoteFeedback } from "@/lib/actions";

const RequestLabel: Record<Request["category"], string> = {
  ui: "UI",
  ux: "UX",
  enhancement: "Enhancement",
  feature: "Feature",
  bug: "Bug",
};

const bgColor: Record<string, string> = {
  planned: "bg-tacao",
  "in-progress": "bg-electric-violet",
  live: "bg-malibu",
};

interface RequestCardProps {
  request: Request;
  upvoted?: boolean;
}

export default function RequestCard({
  request,
  upvoted = false,
}: RequestCardProps) {
  const upvoteFeedbackWithId = upvoteFeedback.bind(
    null,
    request._id.toString()
  );

  return (
    <article
      className={clsx(
        request.status && request.status === "suggestion" && "sm:flex",
        "relative bg-white rounded-[10] p-6 sm:py-7 sm:px-8 text-[13px] lg:text-base/[normal]"
      )}
    >
      {request.status && request.status !== "suggestion" && (
        <div
          className={`absolute top-0 left-0 w-full h-1.5 rounded-t-[5] ${
            bgColor[request.status]
          }`}
        />
      )}
      <div>
        {request.status && request.status !== "suggestion" && (
          <StatusIndicator
            status={request.status}
            className="-mt-0.5 mb-4 text-lynch max-sm:gap-2"
          />
        )}
        <h3 className="font-bold lg:text-lg/[normal] tracking-[-0.18px] sm:tracking-[-0.25px]">
          <Link
            href={`/feedback/${request._id}`}
            className="hover:text-royal-blue"
          >
            {request.title}
          </Link>
        </h3>
        <p className="description mt-[9px] sm:mt-1">{request.description}</p>
        <p className="category mt-2 sm:mt-3">
          <span className="inline-block rounded-[10] bg-zircon text-royal-blue font-semibold text-[13px] px-4 pt-[5px] pb-1.5">
            {RequestLabel[request.category]}
          </span>
        </p>
      </div>
      <div
        className={clsx(
          request.status && request.status === "suggestion" && "sm:contents",
          "flex justify-between items-center mt-4"
        )}
      >
        <UpvoteButton
          upvoted={upvoted}
          upvote={upvoteFeedbackWithId}
          total={request.upvotes}
          className="sm:-order-1 sm:mr-10 shrink-0"
          data-lock={
            request.status && request.status !== "suggestion"
              ? "horizontal"
              : undefined
          }
        />
        <CommentCount
          total={request.totalComments}
          className="pl-[25px] sm:ml-auto self-center"
        />
      </div>
    </article>
  );
}
