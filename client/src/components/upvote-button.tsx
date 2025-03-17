"use client";

import clsx from "clsx";
import { useOptimistic } from "react";
import ArrowUp from "@/icons/icon-arrow-up.svg";

interface Props {
  total?: number;
  upvoted?: boolean;
  upvote: (votes?: number) => void;
  className?: string;
  "data-lock"?: string;
}

type State = {
  upvoted: boolean;
  total: number;
};

export default function UpvoteButton({
  total = 0,
  upvoted = false,
  upvote,
  className,
  ...props
}: Props) {
  const [optimisticState, setOptimistic] = useOptimistic<State, boolean>(
    { upvoted, total },
    (state, upvoted) => ({
      upvoted: !upvoted,
      total: upvoted ? state.total + 1 : state.total - 1,
    })
  );

  const formAction = async () => {
    if (optimisticState.upvoted) {
      setOptimistic(false);
      await upvote(-1);
    } else {
      setOptimistic(true);
      await upvote();
    }
  };

  return (
    <form action={formAction} className="contents">
      <button
        aria-pressed={optimisticState.upvoted}
        className={clsx(
          className,
          "group w-[69] h-8 sm:not-data-[lock=horizontal]:w-10 sm:not-data-[lock=horizontal]:h-[53] lg:data-[lock=horizontal]:h-10 flex sm:not-data-[lock=horizontal]:flex-col items-center justify-center gap-2 rounded-[10] bg-zircon hover:bg-periwinkle aria-pressed:bg-royal-blue aria-pressed:text-white transition-colors"
        )}
        {...props}
      >
        <ArrowUp className="group-not-aria-pressed:text-royal-blue" />
        <span className="font-bold text-[13px] tracking-[-0.18px]">
          {optimisticState.total}
        </span>
      </button>
    </form>
  );
}
