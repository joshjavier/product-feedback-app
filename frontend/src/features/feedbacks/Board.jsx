import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectFeedbacksByStatus } from './feedbacksSlice'
import Feedback from './Feedback'

const Board = ({ status, title, description }) => {
  const feedbacks = useSelector(state => selectFeedbacksByStatus(state, status))

  return (
    <div>
      <h2>{title} ({feedbacks.length})</h2>
      <p>{description}</p>
      <ul>
        {feedbacks.map(feedback => (
          <li key={feedback.id}>
            <Feedback feedback={feedback} />
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
