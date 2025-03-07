"use client";

import { useRouter } from "next/navigation";
import IconArrowLeft from "@/icons/icon-arrow-left.svg";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="cursor-pointer flex items-center gap-4 font-bold text-[13px] sm:text-sm/[normal] text-lynch hover:underline"
    >
      <IconArrowLeft />
      <span>Go Back</span>
    </button>
  );
}
