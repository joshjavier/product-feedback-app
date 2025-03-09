"use client";

import Image from "next/image";
import { useState } from "react";
import { Comment } from "product-feedback";

export default function CommentCard({ comment }: { comment: Comment }) {
  const [replying, setReplying] = useState(false);
  const [reply, setReply] = useState("");

  return (
    <>
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
          <p>@{comment.user.username}</p>
        </div>
        <button
          onClick={() => setReplying(!replying)}
          className="cursor-pointer font-semibold text-[13px] text-royal-blue hover:underline"
        >
          Reply
        </button>
        <div className="relative col-start-1 -col-end-1 sm:col-start-2 sm:text-[15px]">
          <p>
            {comment.replyingTo && (
              <span className="font-bold text-electric-violet">
                @{comment.replyingTo}
              </span>
            )}{" "}
            {comment.content}
          </p>
          {comment.replies && (
            <div className="absolute bg-lynch/10 w-px top-1.5 -bottom-6 sm:-bottom-8 left-[-51]"></div>
          )}
          {replying && (
            <form className="flex max-sm:flex-wrap gap-4 items-start mt-6">
              <textarea
                name="reply"
                placeholder="Type your comment here"
                className="outline-0 inset-ring inset-ring-transparent focus:inset-ring-royal-blue bg-link-water w-full min-h-20 rounded-[5] p-4 sm:px-6 resize-none placeholder:text-[#8c92b3] text-[13px] sm:text-[15px]"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                maxLength={250}
              />
              <button className="ml-auto cursor-pointer flex shrink-0 items-center justify-center bg-electric-violet hover:bg-[#c75af6] text-zircon px-4 sm:px-6 min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors">
                Post Reply
              </button>
            </form>
          )}
        </div>
      </article>

      {comment.replies && (
        <ul className="pl-6 sm:pl-[45]">
          {(comment.replies as Comment[]).map((reply) => (
            <li
              key={reply._id.toString()}
              className="group mt-6 sm:mt-8 relative"
            >
              <div className="group-last:h-5 absolute top-0 -bottom-6 sm:-bottom-8 left-[-23] sm:-left-6 w-px bg-lynch/10"></div>
              <CommentCard comment={reply} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
