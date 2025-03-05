"use client";

import { useSelect } from "downshift";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import IconArrowDown from "@/icons/icon-arrow-down.svg";
import IconArrowUp from "@/icons/icon-arrow-up.svg";
import IconCheck from "@/icons/icon-check.svg";

type SortOption = {
  id: number;
  label: string;
  value?: string;
};

const sortOptions: SortOption[] = [
  { id: 1, label: "Most Upvotes", value: undefined },
  { id: 2, label: "Least Upvotes", value: "upvotes.1" },
  { id: 3, label: "Most Comments", value: "totalComments.-1" },
  { id: 4, label: "Least Comments", value: "totalComments.1" },
];

function itemToString(item: SortOption | null) {
  return item ? item.label : "";
}

export default function SelectSort() {
  const searchParams = useSearchParams();
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    // getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: sortOptions,
    itemToString,
    initialSelectedItem: sortOptions[0],
  });

  const createQueryString = (value: SortOption["value"]) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }
    return params.toString();
  };

  return (
    <div>
      <div
        className="flex items-center gap-[9] cursor-pointer group"
        {...getToggleButtonProps()}
      >
        <div className="group-hover:opacity-75 text-sm/[normal]">
          Sort by : <span className="font-bold">{selectedItem?.label}</span>
        </div>
        {isOpen ? <IconArrowUp /> : <IconArrowDown />}
      </div>
      <ul
        className={clsx(
          { hidden: !isOpen },
          "absolute mt-[42] ml-0.5 bg-white max-h-80 overflow-scroll text-lynch max-w-[255] w-full rounded-[10] divide-y divide-east-bay/15 z-10 shadow-[0_10px_40px_-7px_rgba(55,63,104,0.3505)]"
        )}
        {...getMenuProps()}
      >
        {isOpen &&
          sortOptions.map((item, index) => (
            <li
              key={item.id}
              className={clsx(
                "px-6 py-3 flex items-center justify-between cursor-pointer",
                { "text-electric-violet": highlightedIndex === index }
              )}
              {...getItemProps({ item, index })}
            >
              <Link
                href={`/?${createQueryString(item.value)}`}
                className="contents"
              >
                {item.label}
                {selectedItem === item && <IconCheck />}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
