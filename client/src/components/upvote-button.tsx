"use client";

import ArrowUp from "@/icons/icon-arrow-up.svg";
import { useState } from "react";

interface Props {
  total: number;
}

export default function UpvoteButton({ total }: Props) {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      aria-pressed={active}
      className="group w-10 h-[53] flex flex-col items-center justify-center gap-2 rounded-[10] bg-zircon hover:bg-periwinkle aria-pressed:bg-royal-blue aria-pressed:text-white transition-colors"
    >
      <ArrowUp className="group-not-aria-pressed:text-royal-blue" />
      <span className="font-bold text-[13px] tracking-[-0.18px]">{total}</span>
    </button>
  );
}
