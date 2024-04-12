import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectFeedbackById } from '../feedbacksSlice'
import { categories } from '../../ui'
import UpvoteButton from '../UpvoteButton'
import CommentCount from '../CommentCount'
import StatusBadge from '../../../components/StatusBadge'
import './style.css'

const colorVariants = {
  'planned': 'bg-accent',
  'in-progress': 'bg-primary',
  'live': 'bg-info',
}

const Feedback = ({ id }) => {
  const params = useParams()
  const feedback = useSelector(state => selectFeedbackById(state, id || params.id))

  if (!feedback) return

  return (
    <div className="card bg-white">
      <div className="feedback">
        <div className="feedback-text">
          {feedback.status !== 'suggestion' && (
            <div className="feedback-status">
              <div className={`absolute inset-0 h-1.5 rounded-t-[5px] ${colorVariants[feedback.status]}`}></div>
              <StatusBadge status={feedback.status} />
            </div>
          )}
          <h3 className="feedback-title">
            {id ? (
              <Link to={`/feedback/${feedback.id}`}>{feedback.title}</Link>
            ) : (
              feedback.title
            )}
          </h3>
          <p className="feedback-description">{feedback.description}</p>
          <div className="feedback-category btn btn-secondary btn-sm pointer-events-none">
            {categories.find(({ value }) => value === feedback.category).label}
          </div>
        </div>
        <UpvoteButton id={feedback.id} />
        <CommentCount count={feedback.comments?.length} />
      </div>
    </div>
  )
}

Feedback.propTypes = {
  id: PropTypes.string,
}

export default Feedback
