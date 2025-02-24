"use client";

import Link from "next/link";
import { Request } from "product-feedback";
import { useState } from "react";

function CategoryLink({
  value,
  children,
}: {
  value?: Request["category"];
  children: React.ReactNode;
}) {
  const href = value ? `/?category=${value}` : "/";
  return (
    <Link
      href={href}
      className="inline-flex justify-center items-center bg-zircon hover:bg-periwinkle text-royal-blue text-[13px] font-semibold px-4 min-w-12 min-h-[30] rounded-[10] transition-colors"
    >
      {children}
    </Link>
  );
}

export default function CategoryRadioGroup() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-wrap gap-3.5">
      <p className="sr-only">Categories</p>
      <CategoryLink>All</CategoryLink>
      <CategoryLink value="ui">UI</CategoryLink>
      <CategoryLink value="ux">UX</CategoryLink>
      <CategoryLink value="enhancement">Enhancement</CategoryLink>
      <CategoryLink value="feature">Feature</CategoryLink>
      <CategoryLink value="bug">Bug</CategoryLink>
    </div>
  );
}
