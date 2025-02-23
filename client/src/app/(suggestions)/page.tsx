import CategoryRadioGroup from "./components/category-radio-group";
import SuggestionsList from "./components/suggestions-list";

export default function Suggestions() {
  return (
    <div className="box-content max-w-[1110] mx-auto px-6 sm:px-10">
      <div className="flex max-lg:flex-col gap-x-[30] gap-y-10 py-14 lg:pt-[94] pb-[129]">
        <div className="switcher lg:w-[255px] gap-x-[10] gap-y-6">
          <div className="bg-electric-violet text-white rounded-[10] p-6 min-h-[137] flex flex-col justify-end">
            <p className="font-bold text-xl/[normal] tracking-[-0.25px]">
              Frontend Mentor
            </p>
            <h1 className="font-medium text-[15px] opacity-75">
              Feedback Board
            </h1>
          </div>
          <div className="bg-white rounded-[10] p-6">
            <CategoryRadioGroup />
          </div>
          <div className="bg-white rounded-[10] p-6 pt-[19]">
            <p>Roadmap</p>
            <ul>
              <li>Planned 2</li>
              <li>In-Progress 3</li>
              <li>Live 1</li>
            </ul>
          </div>
        </div>
        <main className="flex flex-col grow gap-6">
          <div className="rounded-[10] bg-rhino text-white py-3.5 px-3 md:px-4">
            SuggestionsHeader
          </div>
          <div>
            <SuggestionsList />
          </div>
        </main>
      </div>
    </div>
  );
}
