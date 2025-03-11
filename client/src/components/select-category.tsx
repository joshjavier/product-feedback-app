import clsx from "clsx";
import { useSelect } from "downshift";
import { RequestData } from "product-feedback";
import { useController, UseControllerProps } from "react-hook-form";
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

export default function SelectCategory(props: UseControllerProps<RequestData>) {
  const { field, fieldState } = useController(props);
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
      field.onChange(newSelectedItem.value),
  });

  return (
    <div className="text-[13px] sm:text-sm/[normal]">
      <label
        className="font-bold tracking-[-0.18px] sm:tracking-[-0.19px]"
        {...getLabelProps()}
      >
        Category
      </label>
      <p id={`${props.name}-desc`}>Choose a category for your feedback</p>
      <div className="relative">
        <div
          className={clsx(
            "flex items-center justify-between gap-4 cursor-pointer w-full rounded-[5] mt-4 bg-link-water min-h-12 px-4 sm:px-6 text-[13px] sm:text-[15px] outline-0 inset-ring focus:inset-ring-royal-blue",
            fieldState.error ? "inset-ring-error" : "inset-ring-transparent"
          )}
          {...getToggleButtonProps({
            "aria-describedby": `${props.name}-desc`,
          })}
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
  );
}
