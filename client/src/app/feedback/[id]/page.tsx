import Link from "next/link";
import client from "@/lib/client";
import { Comment } from "product-feedback";
import RequestCard from "@/components/request-card";
import BackButton from "@/components/back-button";
import CommentCard from "./components/comment-card";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const request = await client.service("requests").get(id);
  const comments = (await client
    .service("comments")
    .find({ query: { requestId: id, tree: "" } })) as unknown as Comment[];

  return (
    <div className="box-content max-w-[730] mx-auto px-6 sm:px-10">
      <div className="flex flex-col gap-6 pt-6 sm:pt-14 lg:pt-20 pb-32">
        <div className="flex items-center justify-between">
          <BackButton />
          <Link
            href={`${id}/edit`}
            className="flex items-center justify-center bg-royal-blue hover:bg-[#7c91f9] text-zircon min-w-[134] sm:min-w-[158] min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors"
          >
            Edit Feedback
          </Link>
        </div>
        <RequestCard request={request} />
        <div className="bg-white rounded-[10] p-6 sm:px-8">
          <h2 className="font-bold text-lg/[normal] tracking-[-0.25px] mb-6 sm:mb-7">
            {request.totalComments} Comments
          </h2>
          <ul>
            {comments.map((comment) => (
              <li key={comment._id.toString()}>
                <CommentCard comment={comment} />
              </li>
            ))}
          </ul>
        </div>
        <div>Add Comment</div>
      </div>
    </div>
  );
}
