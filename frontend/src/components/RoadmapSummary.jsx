import { shallowEqual, useSelector } from 'react-redux'
import { selectStatusCount } from '../selectors'
import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'

const RoadmapSummary = () => {
  const count = useSelector(selectStatusCount, shallowEqual)

  if (Object.keys(count).length === 0) return

  delete count['suggestion']

  return (
    <div className="card bg-white p-6 pt-[19px]">
      <div className="flex justify-between items-center">
        <h2 className="card-title font-bold text-lg tracking-[-0.25px] leading-[26px] text-base-heading">Roadmap</h2>
        <Link to="/roadmap" className="link link-secondary font-semibold text-[13px] hover:text-[#8397F8]">View</Link>
      </div>
      <ul className="space-y-2 mt-6 leading-[23px]">
        {Object.keys(count).map(status => (
          <li key={status} className="flex justify-between">
            <StatusBadge status={status} />
            <strong>{count[status]}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RoadmapSummary
