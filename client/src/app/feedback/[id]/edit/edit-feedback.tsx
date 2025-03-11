"use client";

import clsx from "clsx";
import { useForm } from "react-hook-form";
import { RequestData } from "product-feedback";
import SelectCategory from "@/components/select-category";
import SelectStatus from "@/components/select-status";

export default function EditFeedback({ request }: { request: RequestData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RequestData>({
    defaultValues: {
      title: request.title,
      category: request.category,
      description: request.description,
      status: request.status,
    },
  });

  const onSubmit = (data: RequestData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="mb-6 sm:mb-10 font-bold text-lg/[normal] sm:text-2xl/[normal] tracking-[-0.25px] sm:tracking-[-0.33px]">
        Editing &lsquo;{request.title}&rsquo;
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

        {/* Update Status */}
        <SelectStatus
          control={control}
          name="status"
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
        {/* Desktop only buttons */}
        <button
          type="button"
          className="mr-auto hidden sm:flex cursor-pointer shrink-0 items-center justify-center bg-error hover:bg-[#e98888] text-zircon px-4 sm:px-6 min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors"
        >
          Delete
        </button>
        <button
          type="button"
          className="hidden sm:flex cursor-pointer shrink-0 items-center justify-center bg-east-bay hover:bg-[#656ea3] text-zircon px-4 sm:px-6 min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors"
        >
          Cancel
        </button>

        <button className="cursor-pointer flex shrink-0 items-center justify-center bg-electric-violet hover:bg-[#c75af6] text-zircon px-4 sm:px-6 min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors">
          Save Changes
        </button>

        {/* Mobile only buttons */}
        <button
          type="button"
          className="sm:hidden cursor-pointer flex shrink-0 items-center justify-center bg-east-bay hover:bg-[#656ea3] text-zircon px-4 sm:px-6 min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors"
        >
          Cancel
        </button>
        <button
          type="button"
          className="sm:hidden cursor-pointer flex shrink-0 items-center justify-center bg-error hover:bg-[#e98888] text-zircon px-4 sm:px-6 min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors"
        >
          Delete
        </button>
      </div>
    </form>
  );
}
