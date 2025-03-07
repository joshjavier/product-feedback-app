import Image from "next/image";
import { Comment } from "product-feedback";

export default function CommentCard({ comment }: { comment: Comment }) {
  return (
    <article className="grid grid-cols-[40px_1fr_max-content] items-center gap-4 sm:gap-x-8 text-[13px] [&_p]:text-lynch">
      <Image
        alt=""
        src={comment.user.avatar!.slice(1)}
        width={48}
        height={48}
        className="rounded-full"
      />
      <div className="sm:text-sm/[normal]">
        <h3 className="font-bold tracking-[-0.18px] sm:tracking-[-0.19px]">
          {comment.user.name}
        </h3>
        <p>{comment.user.username}</p>
      </div>
      <button className="cursor-pointer font-semibold text-[13px] text-royal-blue hover:underline">
        Reply
      </button>
      <p className="col-start-1 -col-end-1 sm:col-start-2 sm:text-[15px]">
        {comment.content}
      </p>
    </article>
  );
}
