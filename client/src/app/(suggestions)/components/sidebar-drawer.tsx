import IconHamburger from "@/icons/icon-hamburger.svg";
import CategoryNavigation from "./category-navigation";
import StatusSummary from "./status-summary";

export default function SidebarDrawer({ category }: { category?: string }) {
  return (
    <div className="md:flex gap-x-2.5 gap-y-6 lg:flex-col lg:max-w-[255] shrink-0">
      {/* The one checkbox to rule them all */}
      <input type="checkbox" id="drawer-toggle" className="peer hidden" />
      {/* Mobile header */}
      <div className="md:hidden fixed top-0 w-full flex gap-4 justify-between items-center bg-electric-violet bg-[url(/assets/suggestions/mobile/background-header.png)] bg-cover text-white pt-4 pb-[15] px-6 -mx-6 sm:-mx-10">
        <div>
          <p className="font-bold text-[15px] tracking-[-0.19px]">
            Frontend Mentor
          </p>
          <h1 className="opacity-75 font-medium text-[13px]">Feedback Board</h1>
        </div>
        <label htmlFor="drawer-toggle" className="cursor-pointer">
          <IconHamburger />
        </label>
      </div>
      {/* Backdrop for the drawer on mobile */}
      <div className="peer-checked:max-md:block hidden bg-black/50 fixed inset-0 top-[72]"></div>
      {/* Container for drawer (on mobile) and sidebar (on desktop) */}
      <div className="peer-checked:max-md:translate-x-0 peer-checked:max-md:z-20 translate-x-full transition-transform md:contents fixed top-[72] right-0 bottom-0 w-full max-w-[271] bg-link-water p-6 flex flex-col gap-6">
        <div className="max-md:hidden md:max-lg:flex-1 bg-electric-violet bg-cover md:bg-[url(/assets/suggestions/tablet/background-header.png)] lg:bg-[url(/assets/suggestions/desktop/background-header.png)] text-white rounded-[10] p-6 lg:min-h-[137] flex flex-col justify-end">
          <p className="font-bold text-xl/[normal] tracking-[-0.25px]">
            Frontend Mentor
          </p>
          <h1 className="opacity-75 font-medium text-[15px]">Feedback Board</h1>
        </div>
        <div className="bg-white rounded-[10] p-6 md:max-lg:flex-1">
          <CategoryNavigation selectedValue={category} />
        </div>
        <div className="bg-white rounded-[10] p-6 pt-[19] md:max-lg:flex-1">
          <StatusSummary />
        </div>
      </div>
    </div>
  );
}
