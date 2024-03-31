import Filter from '../features/ui/Filter'
import Header from '../components/Header'
import RoadmapSummary from '../components/RoadmapSummary'
import Suggestions from '../features/feedbacks/Suggestions'

const Index = () => {
  return (
    <div className="container mx-auto mt-24 px-6 xl:max-w-[1110px] flex flex-col md:flex-row gap-[30px]">
      <header className="sidebar md:max-w-[255px] shrink-0 space-y-6">
        <div className="card card-body h-[137px] justify-end gap-0 text-base-heading">
          <span className="text-xl font-bold tracking-[-0.25px]">Frontend Mentor</span>
          <h1 className="text-[15px] font-medium">Feedback Board</h1>
        </div>
        <Filter />
        <RoadmapSummary />
      </header>
      <div className="grow">
        <Header />
        <Suggestions />
      </div>
    </div>
  )
}

export default Index
