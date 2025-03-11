import Link from "next/link";
import CommentCount from "./comment-count";
import UpvoteButton from "./upvote-button";
import { Request } from "product-feedback";

export default function RequestCard({ request }: { request: Request }) {
  return (
    <article className="sm:flex bg-white rounded-[10] p-6 sm:py-7 sm:px-8 text-[13px] sm:text-base/[normal]">
      <div>
        <h3 className="font-bold sm:text-lg/[normal] tracking-[-0.18px] sm:tracking-[-0.25px]">
          <Link
            href={`/feedback/${request._id}`}
            className="hover:text-royal-blue"
          >
            {request.title}
          </Link>
        </h3>
        <p className="sr-only">{request.status}</p>
        <p className="description mt-[9px] sm:mt-1">{request.description}</p>
        <p className="category mt-2 sm:mt-3">
          <span className="inline-block rounded-[10] bg-zircon text-royal-blue font-semibold text-[13px] px-4 pt-[5px] pb-1.5">
            {request.category}
          </span>
        </p>
      </div>
      <div className="flex justify-between items-center mt-4 sm:contents">
        <UpvoteButton
          total={request.upvotes}
          className="sm:-order-1 sm:mr-10 shrink-0"
        />
        <CommentCount
          total={request.totalComments}
          className="pl-[25px] sm:ml-auto self-center"
        />
      </div>
    </article>
  );
}
