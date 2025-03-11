import client from "@/lib/client";
import BackButton from "@/components/back-button";
import IconEditFeedback from "@/icons/icon-edit-feedback.svg";
import EditFeedback from "./edit-feedback";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const request = await client.service("requests").get(id);

  return (
    <div className="box-content max-w-[540] mx-auto px-6 sm:px-10">
      <div className="pt-[34] sm:pt-14 lg:pt-[92] pb-32">
        <BackButton />
        <div className="relative mt-[55] sm:mt-[68] p-6 pt-11 sm:pt-[52] sm:pb-10 sm:px-[42] bg-white rounded-[10]">
          <IconEditFeedback
            className="absolute top-0 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14"
            aria-hidden="true"
          />
          <EditFeedback request={request} />
        </div>
      </div>
    </div>
  );
}
