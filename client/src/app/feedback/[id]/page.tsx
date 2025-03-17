import Link from "next/link";
import client from "@/lib/client";
import { cookies } from "next/headers";
import { Comment } from "product-feedback";
import RequestCard from "@/components/request-card";
import BackButton from "@/components/back-button";
import CommentCard from "./components/comment-card";
import AddComment from "./components/add-comment";

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
  const cookieStore = await cookies();
  const user = cookieStore.get("feathers-user")?.value;
  const upvotedIds: string[] = user ? JSON.parse(user).upvotedIds ?? [] : [];

  return (
    <div className="box-content max-w-[730] mx-auto px-6 sm:px-10">
      <div className="flex flex-col gap-6 pt-6 sm:pt-14 lg:pt-20 pb-32">
        <div className="flex items-center justify-between">
          <BackButton />
          <Link
            href={`${id}/edit`}
            className="flex items-center justify-center bg-royal-blue hover:bg-[#7c91f9] text-zircon min-w-[119] sm:min-w-[142] min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors"
          >
            Edit Feedback
          </Link>
        </div>
        <RequestCard request={request} upvoted={upvotedIds.includes(id)} />
        <div className="bg-white rounded-[10] p-6 sm:px-8 sm:pb-12">
          <h2 className="font-bold text-lg/[normal] tracking-[-0.25px] mb-6 sm:mb-7">
            {request.totalComments} Comments
          </h2>
          <ul className="divide-y divide-[#8c92b340]">
            {comments.map((comment) => (
              <li
                key={comment._id.toString()}
                className="py-6 sm:py-8 first:pt-0 last:pb-0"
              >
                <CommentCard comment={comment} />
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-[10] p-6 sm:pl-[34] sm:pr-8 sm:pb-8">
          <AddComment />
        </div>
      </div>
    </div>
  );
}
