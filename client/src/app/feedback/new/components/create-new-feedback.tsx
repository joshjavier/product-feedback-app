"use client";

import clsx from "clsx";
import { useController, useForm } from "react-hook-form";
import { RequestData } from "product-feedback";
import { useSelect } from "downshift";
import IconCheck from "@/icons/icon-check.svg";
import IconArrowUp from "@/icons/icon-arrow-up.svg";
import IconArrowDown from "@/icons/icon-arrow-down.svg";

type CategoryOption = { label: string; value: RequestData["category"] };

const categories: CategoryOption[] = [
  { label: "Feature", value: "feature" },
  { label: "UI", value: "ui" },
  { label: "UX", value: "ux" },
  { label: "Enhancement", value: "enhancement" },
  { label: "Bug", value: "bug" },
];

function itemToString(item: CategoryOption | null) {
  return item ? item.value : "";
}

export default function CreateNewFeedback() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<RequestData>({
    defaultValues: { title: "", category: "feature", description: "" },
  });
  const { field, fieldState } = useController({ name: "category", control });
  const selectedItem = categories.find((item) => item.value === field.value);
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: categories,
    itemToString,
    selectedItem,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) =>
      setValue("category", newSelectedItem.value),
  });

  const onSubmit = (data: unknown) => console.log(data);

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
        <div className="text-[13px] sm:text-sm/[normal]">
          <label
            htmlFor="category"
            className="font-bold tracking-[-0.18px] sm:tracking-[-0.19px]"
            {...getLabelProps()}
          >
            Category
          </label>
          <p id="category-desc">Choose a category for your feedback</p>
          <div className="relative">
            <div
              className={clsx(
                "flex items-center justify-between gap-4 cursor-pointer w-full rounded-[5] mt-4 bg-link-water min-h-12 px-4 sm:px-6 text-[13px] sm:text-[15px] outline-0 inset-ring focus:inset-ring-royal-blue",
                fieldState.error ? "inset-ring-error" : "inset-ring-transparent"
              )}
              {...getToggleButtonProps()}
            >
              <span>{selectedItem?.label}</span>
              {isOpen ? (
                <IconArrowUp className="shrink-0 text-royal-blue" />
              ) : (
                <IconArrowDown className="shrink-0 text-royal-blue" />
              )}
            </div>
            <ul
              className={clsx(
                "absolute w-full mt-4 bg-white max-h-80 overflow-scroll text-lynch rounded-[10] divide-y divide-east-bay/15 z-10 shadow-[0_10px_40px_-7px_rgba(55,63,104,0.3505)]",
                { hidden: !isOpen }
              )}
              {...getMenuProps()}
            >
              {isOpen &&
                categories.map((item, index) => (
                  <li
                    key={item.value}
                    className={clsx(
                      "px-6 py-3 flex items-center justify-between cursor-pointer",
                      { "text-electric-violet": highlightedIndex === index }
                    )}
                    {...getItemProps({ item, index })}
                  >
                    {item.label}
                    {selectedItem === item && <IconCheck />}
                  </li>
                ))}
            </ul>
          </div>
        </div>

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
