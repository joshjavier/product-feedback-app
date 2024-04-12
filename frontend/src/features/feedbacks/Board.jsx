import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectFeedbackIdsByStatus } from './feedbacksSlice'
import Feedback from './Feedback'

const Board = ({ status, title, description }) => {
  const feedbackIds = useSelector(state => selectFeedbackIdsByStatus(state, status))

  return (
    <div>
      <h2 className="font-bold text-lg tracking-[-0.25px] text-base-heading">{title} ({feedbackIds.length})</h2>
      <p>{description}</p>
      <ul className="mt-8 space-y-6">
        {feedbackIds.map(id => (
          <li key={id}>
            <Feedback id={id} />
          </li>
        ))}
      </ul>
    </div>
  )
}

Board.propTypes = {
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default Board
