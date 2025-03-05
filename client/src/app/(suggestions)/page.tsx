import { SuggestionsSkeleton } from "@/components/skeletons";
import CategoryNavigation from "./components/category-navigation";
import Suggestions from "./components/suggestions";
import { Suspense } from "react";
import SidebarDrawer from "./components/sidebar-drawer";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { category } = await searchParams;

  return (
    <div className="box-content max-w-[1110] mx-auto px-6 sm:px-10">
      <div className="max-md:mt-[72] md:flex max-lg:flex-col gap-x-[30] gap-y-10 md:py-14 lg:pt-[94] pb-[129]">
        <SidebarDrawer category={category} />
        <main className="flex flex-col grow gap-6">
          <Suspense fallback={<SuggestionsSkeleton />}>
            <Suggestions category={category} />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
