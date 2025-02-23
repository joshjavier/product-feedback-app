import RequestCard from "@/components/request-card";
import { Request } from "product-feedback";

export default function SuggestionsList({
  suggestions,
}: {
  suggestions: Request[];
}) {
  return (
    <ul className="flex flex-col gap-4">
      {suggestions.map((suggestion) => (
        <li key={suggestion._id.toString()}>
          <RequestCard request={suggestion} />
        </li>
      ))}
    </ul>
  );
}
