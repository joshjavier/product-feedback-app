import RequestCard from "@/components/request-card";
import client from "@/lib/client";

export default async function SuggestionsList() {
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await sleep(5000);
  const { data } = await client
    .service("requests")
    .find({ query: { status: "suggestion" } });

  return (
    <ul className="flex flex-col gap-4">
      {data.map((suggestion) => (
        <li key={suggestion._id.toString()}>
          <RequestCard request={suggestion} />
        </li>
      ))}
    </ul>
  );
}
