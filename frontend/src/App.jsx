import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeFeedbacks } from './reducers/feedbacksReducer'
import Suggestions from './components/Suggestions'
import Filter from './components/Filter'
import Header from './components/Header'
import RoadmapSummary from './components/RoadmapSummary'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeFeedbacks())
  }, [dispatch])

  return (
    <div className="container mx-auto px-4 max-w-[1110px] flex flex-col md:flex-row gap-[30px]">
      <div className="sidebar md:max-w-[255px]">
        <div className="card card-body">
          <div>Frontend Mentor</div>
          <div>Feedback Board</div>
        </div>
        <Filter />
        <RoadmapSummary />
      </div>
      <div className="w-full">
        <Header />
        <Suggestions />
      </div>
    </div>
  )
}

export default App
