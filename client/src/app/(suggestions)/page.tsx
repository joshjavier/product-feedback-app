import { Suspense } from "react";
import { SuggestionsSkeleton } from "@/components/skeletons";
import Suggestions from "./components/suggestions";
import ResponsiveSidebar from "./components/responsive-sidebar";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { category } = await searchParams;

  return (
    <div className="box-content max-w-[1110] mx-auto px-6 sm:px-10">
      <div className="flex max-lg:flex-col gap-x-[30] gap-y-10 pb-14 sm:pb-28 lg:pb-32 md:pt-14 lg:pt-[94] lg:items-start">
        <ResponsiveSidebar />
        <main className="flex flex-col grow gap-6">
          <Suspense fallback={<SuggestionsSkeleton />}>
            <Suggestions category={category} />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
