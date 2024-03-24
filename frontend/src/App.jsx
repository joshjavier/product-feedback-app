import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeFeedbacks } from './reducers/feedbacksReducer'
import Suggestions from './components/Suggestions'

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
        <div className="card card-body">
          <div className="card-actions">
            <button className="btn btn-outline">All</button>
            <button className="btn btn-outline">UI</button>
            <button className="btn btn-outline">UX</button>
            <button className="btn btn-outline">Enhancement</button>
            <button className="btn btn-outline">Bug</button>
            <button className="btn btn-outline">Feature</button>
          </div>
        </div>
        <div className="card card-body">
          <div className="card-title">Roadmap</div>
          <div>Planned 0</div>
          <div>In-Progress 0</div>
          <div>Live 0</div>
        </div>
      </div>
      <div>
        <div className="card card-body">
          <div>0 Suggestions</div>
          <div>Sort by: Most Upvotes</div>
          <button className="btn btn-primary">Add Feedback</button>
        </div>
        <Suggestions />
      </div>
    </div>
  )
}

export default App
