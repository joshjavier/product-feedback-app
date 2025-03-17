import { Suspense } from "react";
import { SuggestionsSkeleton } from "@/components/skeletons";
import Suggestions from "./components/suggestions";
import SidebarDrawer from "./components/sidebar-drawer";
import { cookies } from "next/headers";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { category, sort } = await searchParams;
  const cookieStore = await cookies();
  const user = cookieStore.get("feathers-user")?.value;
  const upvotedIds: string[] = user ? JSON.parse(user).upvotedIds ?? [] : [];

  return (
    <div className="box-content max-w-[1110] mx-auto px-6 sm:px-10">
      <div className="max-md:mt-[72] md:flex max-lg:flex-col gap-x-[30] gap-y-10 md:py-14 lg:pt-[94] pb-[129]">
        <SidebarDrawer />
        <main className="flex flex-col grow gap-6">
          <Suspense fallback={<SuggestionsSkeleton />}>
            <Suggestions
              category={category}
              sort={sort}
              upvotedIds={upvotedIds}
            />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
