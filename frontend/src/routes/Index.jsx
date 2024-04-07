import Filter from '../features/ui/Filter'
import TopBar from '../components/TopBar'
import RoadmapSummary from '../components/RoadmapSummary'
import Suggestions from '../features/feedbacks/Suggestions'
import Header from '../components/Header'

const Index = () => {
  const tabletLayout = 'md:grid-cols-3 md:mt-14 md:px-10 md:mb-[113px] md:gap-x-2.5 md:gap-y-10'
  const desktopLayout = 'lg:grid-cols-[255px_minmax(0,_1fr)] lg:grid-rows-[137px_166px_178px_repeat(auto-fit,_minmax(0,_1fr))] xl:max-w-[1110px] lg:mt-[94px] lg:mb-[129px] lg:gap-x-[30px] lg:gap-y-6'

  return (
    <div className={`md:container mx-auto mb-[55px] grid ${tabletLayout} ${desktopLayout}`}>
      <Header />
      <div className="lg:col-start-1 max-md:hidden">
        <Filter />
      </div>
      <div className="lg:col-start-1 max-md:hidden">
        <RoadmapSummary />
      </div>
      {/* <header className="sidebar grid md:grid-cols-3 lg:grid-cols-1 lg:auto-rows-min lg:max-w-[255px] gap-x-2.5 gap-y-6 shrink-0">
        <div className="header md:card py-4 px-6 bg-primary md:h-full lg:h-[137px] auto-rows-min justify-end gap-0 text-base-heading">
          <span className="text-white text-[15px] md:text-xl font-bold tracking-[-0.25px]">Frontend Mentor</span>
          <h1 className="text-white/75 text-[13px] md:text-[15px] font-medium">Feedback Board</h1>
        </div>
      </header> */}
      <div className="col-span-full lg:col-start-2 lg:row-span-full space-y-6">
        <TopBar />
        <Suggestions />
      </div>
    </div>
  )
}

export default Index
