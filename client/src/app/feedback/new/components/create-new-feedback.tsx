"use client";

import clsx from "clsx";
import { useForm } from "react-hook-form";
import { RequestData } from "product-feedback";
import SelectCategory from "@/components/select-category";
import { createFeedback } from "@/lib/actions";

export default function CreateNewFeedback() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RequestData>({
    defaultValues: { title: "", category: "feature", description: "" },
  });

  const onSubmit = (data: RequestData) => {
    createFeedback(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="mb-6 sm:mb-10 font-bold text-lg/[normal] sm:text-2xl/[normal] tracking-[-0.25px] sm:tracking-[-0.33px]">
        Create New Feedback
      </h1>
      <div className="space-y-6 [&_p]:mt-0.5">
        {/* Feedback Title */}
        <div className="text-[13px] sm:text-sm/[normal]">
          <label
            htmlFor="title"
            className="font-bold tracking-[-0.18px] sm:tracking-[-0.19px]"
          >
            Feedback Title
          </label>
          <p id="title-desc">Add a short, descriptive headline</p>
          <input
            type="text"
            id="title"
            aria-describedby="title-desc"
            className={clsx(
              "w-full rounded-[5] mt-4 bg-link-water min-h-12 px-4 sm:px-6 text-[13px] sm:text-[15px] outline-0 inset-ring focus:inset-ring-royal-blue",
              errors.title ? "inset-ring-error" : "inset-ring-transparent"
            )}
            aria-invalid={errors.title ? "true" : "false"}
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p aria-live="polite" className="text-error mt-1">
              Can&apos;t be empty
            </p>
          )}
        </div>

        {/* Category */}
        <SelectCategory
          control={control}
          name="category"
          rules={{ required: true }}
        />

        {/* Description */}
        <div className="text-[13px] sm:text-sm/[normal]">
          <label
            htmlFor="description"
            className="font-bold tracking-[-0.18px] sm:tracking-[-0.19px]"
          >
            Feedback Detail
          </label>
          <p id="desription-desc">
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea
            id="description"
            aria-describedby="description-desc"
            className={clsx(
              "outline-0 inset-ring focus:inset-ring-royal-blue bg-link-water w-full min-h-[120] sm:min-h-24 mt-4 rounded-[5] p-4 sm:px-6 text-[13px] sm:text-[15px] resize-none",
              errors.description ? "inset-ring-error" : "inset-ring-transparent"
            )}
            aria-invalid={errors.description ? "true" : "false"}
            {...register("description", { required: true })}
          />
          {errors.description && (
            <p aria-live="polite" className="text-error mt-1">
              Can&apos;t be empty
            </p>
          )}
        </div>
      </div>
      <div className="flex max-sm:flex-col max-sm:items-stretch items-center justify-end gap-4 mt-10 sm:mt-8">
        <button className="hidden sm:flex cursor-pointer shrink-0 items-center justify-center bg-east-bay hover:bg-[#656ea3] text-zircon px-4 sm:px-6 min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors">
          Cancel
        </button>
        <button className="cursor-pointer flex shrink-0 items-center justify-center bg-electric-violet hover:bg-[#c75af6] text-zircon px-4 sm:px-6 min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors">
          Add Feedback
        </button>
        <button className="sm:hidden cursor-pointer flex shrink-0 items-center justify-center bg-east-bay hover:bg-[#656ea3] text-zircon px-4 sm:px-6 min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors">
          Cancel
        </button>
      </div>
    </form>
  );
}
