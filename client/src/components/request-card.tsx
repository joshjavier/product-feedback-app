import CommentCount from "./comment-count";
import UpvoteButton from "./upvote-button";

export default function RequestCard() {
  return (
    <article className="sm:flex bg-white rounded-[10] p-6 sm:py-7 sm:px-8 text-[13px] sm:text-base/[normal]">
      <div>
        <h3 className="font-bold sm:text-lg/[normal] tracking-[-0.18px] sm:tracking-[-0.25px]">
          <a href="#" className="hover:text-royal-blue">
            Add tags for solutions
          </a>
        </h3>
        <p className="sr-only">Suggestion</p>
        <p className="description mt-[9px] sm:mt-1">
          Easier to search for solutions based on a specific stack.
        </p>
        <p className="category mt-2 sm:mt-3">
          <span className="inline-block rounded-[10] bg-zircon text-royal-blue font-semibold text-[13px] px-4 pt-[5px] pb-1.5">
            Enhancement
          </span>
        </p>
      </div>
      <div className="flex justify-between items-center mt-4 sm:contents">
        <UpvoteButton total={112} className="sm:-order-1 sm:mr-10" />
        <CommentCount total={2} className="pl-[25px] sm:ml-auto self-center" />
      </div>
    </article>
  );
}
