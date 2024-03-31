import { shallowEqual, useSelector } from 'react-redux'
import { selectStatusCount } from '../selectors'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const StatusCount = ({ status, count, color }) => {
  const colorVariants = {
    orange: 'badge-accent',
    purple: 'badge-primary',
    blue: 'badge-info',
  }

  return (
    <li className="flex items-center">
      <span className={`badge ${colorVariants[color]} w-2 h-2 p-0 me-4`}></span>
      <span>{status}</span>
      <strong className="ms-auto">{count}</strong>
    </li>
  )
}

StatusCount.propTypes = {
  status: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

const RoadmapSummary = () => {
  const count = useSelector(selectStatusCount, shallowEqual)

  if (Object.keys(count).length === 0) return

  return (
    <div className="card card-body p-6 pt-[19px]">
      <div className="flex justify-between items-center">
        <h2 className="card-title font-bold text-lg tracking-[-0.25px] text-base-heading">Roadmap</h2>
        <Link to="/roadmap" className="link link-secondary font-semibold text-[13px]">View</Link>
      </div>
      <ul className="space-y-2 mt-6">
        <StatusCount
          status="Planned"
          count={count['planned']}
          color="orange"
        />
        <StatusCount
          status="In-Progress"
          count={count['in-progress']}
          color="purple"
        />
        <StatusCount
          status="Live"
          count={count['live']}
          color="blue"
        />
      </ul>
    </div>
  )
}

export default RoadmapSummary
