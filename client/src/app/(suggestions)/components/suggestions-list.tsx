import RequestCard from "@/components/request-card";

export default async function SuggestionsList() {
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await sleep(5000);
  const result = await fetch(
    "http://localhost:3030/requests?status=suggestion"
  );
  const { data } = await result.json();

  return (
    <ul className="flex flex-col gap-4">
      {data.map((suggestion: any) => (
        <li key={suggestion._id}>
          <RequestCard request={suggestion} />
        </li>
      ))}
    </ul>
  );
}
