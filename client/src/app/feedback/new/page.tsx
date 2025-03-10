import BackButton from "@/components/back-button";
import IconNewFeedback from "@/icons/icon-new-feedback.svg";
import CreateNewFeedback from "./components/create-new-feedback";

export default function Page() {
  return (
    <div className="box-content max-w-[540] mx-auto px-6 sm:px-10">
      <div className="pt-[34] sm:pt-14 lg:pt-[92] pb-32">
        <BackButton />
        <div className="relative mt-[55] sm:mt-[68] p-6 pt-11 sm:pt-[52] sm:pb-10 sm:px-[42] bg-white rounded-[10]">
          <IconNewFeedback
            className="absolute top-0 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14"
            aria-hidden="true"
          />
          <CreateNewFeedback />
        </div>
      </div>
    </div>
  );
}
