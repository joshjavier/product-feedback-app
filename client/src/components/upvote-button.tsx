"use client";

import ArrowUp from "@/icons/icon-arrow-up.svg";
import { useState } from "react";

interface Props {
  total?: number;
  className?: string;
  "data-lock"?: string;
}

export default function UpvoteButton({
  total = 0,
  className,
  ...props
}: Props) {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      aria-pressed={active}
      className={`${
        className ? className + " " : ""
      }group w-[69] h-8 sm:not-data-[lock=horizontal]:w-10 sm:not-data-[lock=horizontal]:h-[53] lg:data-[lock=horizontal]:h-10 flex sm:not-data-[lock=horizontal]:flex-col items-center justify-center gap-2 rounded-[10] bg-zircon hover:bg-periwinkle aria-pressed:bg-royal-blue aria-pressed:text-white transition-colors`}
      {...props}
    >
      <ArrowUp className="group-not-aria-pressed:text-royal-blue" />
      <span className="font-bold text-[13px] tracking-[-0.18px]">{total}</span>
    </button>
  );
}
