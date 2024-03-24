import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { upvoteFeedback, downvoteFeedback } from '../reducers/feedbacksReducer'
import { selectUpvotes } from '../selectors'

const Feedback = ({ feedback }) => {
  const upvotes = useSelector(selectUpvotes)
  const isUpvoted = upvotes?.includes(feedback.id)
  const dispatch = useDispatch()

  const onClick = () => {
    if (isUpvoted) {
      dispatch(downvoteFeedback(feedback.id))
    } else {
      dispatch(upvoteFeedback(feedback.id))
    }
  }

  return (
    <div className="card card-body">
      <div className="card-title">{feedback.title}</div>
      <div>{feedback.description}</div>
      <div className="badge badge-info">{feedback.category}</div>
      <div>
        Comments
        {' '}
        {feedback.comments?.length || 0}
      </div>
      <div>
        Upvotes
        {' '}
        {feedback.upvotes}
        {' '}
        <button
          onClick={onClick}
          className={`btn ${isUpvoted ? 'btn-active' : ''}`}
        >
          Upvote
        </button>
      </div>
    </div>
  )
}

Feedback.propTypes = {
  feedback: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    upvotes: PropTypes.number,
    description: PropTypes.string,
    comments: PropTypes.array,
  }).isRequired,
}

export default Feedback
