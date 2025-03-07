import BackButton from "@/components/back-button";
import client from "@/lib/client";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const request = await client.service("requests").get(id);

  return (
    <div>
      <BackButton />
      <div>Edit Feedback {id}</div>
      <div>{JSON.stringify(request)}</div>
    </div>
  );
}
