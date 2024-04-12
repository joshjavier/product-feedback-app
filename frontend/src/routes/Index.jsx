import Filter from '../features/ui/Filter'
import TopBar from '../components/TopBar'
import RoadmapSummary from '../components/RoadmapSummary'
import Suggestions from '../features/feedbacks/Suggestions'
import Header from '../components/Header'

const Index = () => {
  const spacing = 'md:px-10 md:mt-14 md:mb-[113px] lg:mt-[94px] lg:mb-[129px]'
  const gap = 'gap-y-10 gap-x-[30px]'
  const flex = 'md:flex md:flex-col lg:flex-row'
  const grid = 'grid md:grid-cols-3 lg:grid-cols-1 lg:content-start'

  return (
    <div className={`md:container mx-auto xl:max-w-[1110px] ${flex} ${gap} ${spacing}`}>
      <div className={`lg:w-[255px] ${grid} gap-x-2.5 gap-y-6 flex-none max-md:sticky top-0 z-10`}>
        <Header />
        <div className="max-md:hidden">
          <Filter />
        </div>
        <div className="max-md:hidden">
          <RoadmapSummary />
        </div>
      </div>
      <div className="grow space-y-6">
        <TopBar />
        <Suggestions />
      </div>
    </div>
  )
}

export default Index
