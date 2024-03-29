import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { upvoteFeedback } from './feedbacksSlice'
import { Link } from 'react-router-dom'

const Feedback = ({ feedback }) => {
  const upvotedFeedbacks = useSelector(state => state.currentUser?.upvotedFeedbacks)
  const isUpvoted = upvotedFeedbacks?.includes(feedback.id)
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(upvoteFeedback(feedback.id))
  }

  return (
    <div className="card card-body">
      <div className="card-title">
        <Link to={`/feedback/${feedback.id}`}>{feedback.title}</Link>
      </div>
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
