import Filter from '../components/Filter'
import Header from '../components/Header'
import RoadmapSummary from '../components/RoadmapSummary'
import Suggestions from '../components/Suggestions'

const Index = () => {
  return (
    <div className="container mx-auto px-4 xl:max-w-[1110px] flex flex-col md:flex-row gap-[30px]">
      <div className="sidebar md:max-w-[255px] shrink-0">
        <div className="card card-body">
          <div>Frontend Mentor</div>
          <div>Feedback Board</div>
        </div>
        <Filter />
        <RoadmapSummary />
      </div>
      <div className="grow">
        <Header />
        <Suggestions />
      </div>
    </div>
  )
}

export default Index
