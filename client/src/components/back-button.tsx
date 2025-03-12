"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import IconArrowLeft from "@/icons/icon-arrow-left.svg";

export default function BackButton({ lightOnDark }: { lightOnDark?: boolean }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={clsx(
        lightOnDark ? "text-white" : "text-lynch",
        "cursor-pointer flex items-center gap-4 font-bold text-[13px] sm:text-sm/[normal] hover:underline"
      )}
    >
      <IconArrowLeft
        className={lightOnDark ? "text-white" : "text-royal-blue"}
      />
      <span>Go Back</span>
    </button>
  );
}
