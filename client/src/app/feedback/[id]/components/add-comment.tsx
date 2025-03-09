"use client";

import { useState } from "react";

export default function AddComment({
  maxLength = 250,
}: {
  maxLength?: number;
}) {
  const [content, setContent] = useState("");

  return (
    <form>
      <h2 className="font-bold text-lg/[normal] tracking-[-0.25px]">
        Add Comment
      </h2>
      <textarea
        name="content"
        id="content"
        placeholder="Type your comment here"
        className="outline-0 inset-ring inset-ring-transparent focus:inset-ring-royal-blue bg-link-water w-full min-h-20 mt-6 mb-4 rounded-[5] p-4 sm:px-6 resize-none placeholder:text-[#8c92b3] text-[13px] sm:text-[15px]"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        maxLength={maxLength}
      />
      <div className="flex items-center justify-between gap-4">
        <p className="text-lynch text-[13px] sm:text-[15px]">
          {maxLength - content.length} Characters left
        </p>
        <button className="cursor-pointer flex shrink-0 items-center justify-center bg-electric-violet hover:bg-[#c75af6] text-zircon px-4 sm:px-6 min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors">
          Post Comment
        </button>
      </div>
    </form>
  );
}
