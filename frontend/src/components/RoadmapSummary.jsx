import { shallowEqual, useSelector } from 'react-redux'
import { selectStatusCount } from '../selectors'
import { Link } from 'react-router-dom'

const RoadmapSummary = () => {
  const count = useSelector(selectStatusCount, shallowEqual)

  return (
    <div className="card card-body">
      <div className="flex justify-between">
        <div className="card-title">Roadmap</div>
        <Link to="/roadmap" className="btn btn-link">View</Link>
      </div>
      <div>
        Planned
        {' '}
        {count['planned']}
      </div>
      <div>
        In-Progress
        {' '}
        {count['in-progress']}
      </div>
      <div>
        Live
        {' '}
        {count['live']}
      </div>
    </div>
  )
}

export default RoadmapSummary
