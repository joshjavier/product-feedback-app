import Link from "next/link";

const categories = [
  { label: "All", value: undefined },
  { label: "UI", value: "ui" },
  { label: "UX", value: "ux" },
  { label: "Enhancement", value: "enhancement" },
  { label: "Feature", value: "feature" },
  { label: "Bug", value: "bug" },
];

export default function CategoryRadioGroup({
  selectedValue,
}: {
  selectedValue?: string;
}) {
  const getClassName = (value?: string) =>
    `${
      value === selectedValue
        ? "bg-royal-blue text-white "
        : "bg-zircon hover:bg-periwinkle text-royal-blue "
    }inline-flex justify-center items-center text-[13px] font-semibold px-4 min-w-12 min-h-[30] rounded-[10] transition-colors`;

  return (
    <div className="flex flex-wrap gap-3.5">
      <p className="sr-only">Categories</p>
      {categories.map(({ label, value }) => (
        <Link
          key={value}
          href={value ? `/?category=${value}` : "/"}
          className={getClassName(value)}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
