"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const categories = [
  { label: "All", value: undefined },
  { label: "UI", value: "ui" },
  { label: "UX", value: "ux" },
  { label: "Enhancement", value: "enhancement" },
  { label: "Feature", value: "feature" },
  { label: "Bug", value: "bug" },
];

export default function CategoryNavigation() {
  const searchParams = useSearchParams();
  const getClassName = (value?: string) =>
    `${
      searchParams.get("category") == value
        ? "bg-royal-blue text-white "
        : "bg-zircon hover:bg-periwinkle text-royal-blue "
    }inline-flex justify-center items-center text-[13px] font-semibold px-4 min-w-12 min-h-[30] rounded-[10] transition-colors`;

  const createQueryString = (value?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }
    return params.toString();
  };

  return (
    <div className="flex flex-wrap gap-3.5">
      <p className="sr-only">Categories</p>
      {categories.map(({ label, value }) => (
        <Link
          key={label}
          href={`?${createQueryString(value)}`}
          className={getClassName(value)}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
