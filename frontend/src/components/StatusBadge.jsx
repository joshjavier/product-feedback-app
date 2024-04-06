import PropTypes from 'prop-types'
import { status as statusList } from '../features/ui'

const StatusBadge = ({ status }) => {
  const colorVariants = {
    'planned': 'badge-accent',
    'in-progress': 'badge-primary',
    'live': 'badge-info',
  }

  return (
    <div className="flex items-center">
      <span className={`badge ${colorVariants[status]} w-2 h-2 p-0 me-4`}></span>
      <span>{statusList.find(({ value }) => value === status).label}</span>
    </div>
  )
}

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
}

export default StatusBadge
