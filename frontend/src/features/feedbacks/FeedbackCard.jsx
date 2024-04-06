import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectFeedbackById } from './feedbacksSlice'
import { categories } from '../ui'
import StatusBadge from '../../components/StatusBadge'
import UpvoteButton from './UpvoteButton'
import CommentCount from './CommentCount'
import { Link } from 'react-router-dom'

const colorVariants = {
  'planned': 'bg-accent',
  'in-progress': 'bg-primary',
  'live': 'bg-info',
}

const FeedbackCard = ({ id }) => {
  const feedback = useSelector(state => selectFeedbackById(state, id))

  if (!feedback) return

  return (
    <div className="feedback-card card p-8 bg-white relative">
      <div className={`absolute inset-0 h-1.5 rounded-t-[5px] ${colorVariants[feedback.status]}`}></div>
      <StatusBadge status={feedback.status} />
      <h3 className="mt-2 font-bold text-lg tracking-[-0.25px] text-base-heading">
        <Link to={`/feedback/${id}`} className="hover:text-secondary">{feedback.title}</Link>
      </h3>
      <p className="mt-1">{feedback.description}</p>
      <div className="btn btn-secondary btn-sm pointer-events-none mt-4 self-start">
        {categories.find(({ value }) => value === feedback.category).label}
      </div>
      <div className="flex mt-4 justify-between items-center">
        <UpvoteButton id={id} direction="row" />
        <CommentCount count={feedback.comments?.length} />
      </div>
    </div>
  )
}

FeedbackCard.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}

export default FeedbackCard
