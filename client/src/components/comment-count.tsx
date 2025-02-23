import IconComments from "@/icons/icon-comments.svg";
import clsx from "clsx";

interface Props {
  total?: number;
  className?: string;
}

export default function CommentCount({ total = 0, className }: Props) {
  return (
    <div
      className={`${className ? className + " " : ""}flex items-center gap-2`}
    >
      <IconComments />
      <span
        className={clsx("font-bold tracking-[-0.18px] sm:tracking-[-0.22px]", {
          "opacity-50": total === 0,
        })}
      >
        {total}
      </span>
      <span className="sr-only">comments</span>
    </div>
  );
}
