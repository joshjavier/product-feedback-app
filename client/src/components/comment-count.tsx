import IconComments from "@/icons/icon-comments.svg";

interface Props {
  total: number;
}

export default function CommentCount({ total }: Props) {
  return (
    <div className="flex items-center gap-2">
      <IconComments />
      <span className="font-bold">{total}</span>
      <span className="sr-only">comments</span>
    </div>
  );
}
