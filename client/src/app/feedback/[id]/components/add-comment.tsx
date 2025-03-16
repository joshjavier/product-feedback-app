"use client";

import clsx from "clsx";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { CommentData } from "product-feedback";
import { useController, useForm } from "react-hook-form";
import { addComment } from "@/lib/actions";

export default function AddComment({
  maxLength = 250,
}: {
  maxLength?: number;
}) {
  const { id } = useParams<{ id: string }>();
  const {
    handleSubmit,
    control,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm<CommentData>({
    defaultValues: { content: "", requestId: id },
  });
  const { field, fieldState } = useController({
    control,
    name: "content",
    rules: { required: "Can't be empty", maxLength },
  });

  const onSubmit = (data: CommentData) => {
    addComment(data);
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-bold text-lg/[normal] tracking-[-0.25px]">
        Add Comment
      </h2>
      <textarea
        id="content"
        placeholder="Type your comment here"
        className="outline-0 inset-ring inset-ring-transparent focus:inset-ring-royal-blue bg-link-water w-full min-h-20 mt-6 mb-4 rounded-[5] p-4 sm:px-6 resize-none placeholder:text-[#8c92b3] text-[13px] sm:text-[15px]"
        maxLength={maxLength}
        {...field}
      />
      <div className="flex items-center justify-between gap-4">
        <p
          className={clsx(
            fieldState.error ? "text-error" : "text-lynch",
            "text-[13px] sm:text-[15px]"
          )}
        >
          {fieldState.error?.message ??
            `${maxLength - field.value.length} Characters left`}
        </p>
        <button className="cursor-pointer flex shrink-0 items-center justify-center bg-electric-violet hover:bg-[#c75af6] text-zircon px-4 sm:px-6 min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors">
          Post Comment
        </button>
      </div>
    </form>
  );
}
