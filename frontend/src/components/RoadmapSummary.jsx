import { useSelector } from 'react-redux'
import { selectStatusCount } from '../selectors'

const RoadmapSummary = () => {
  const count = useSelector(selectStatusCount)

  return (
    <div className="card card-body">
      <div className="card-title">Roadmap</div>
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
