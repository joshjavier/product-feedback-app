import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { categories } from '../ui'
import UpvoteButton from './UpvoteButton'

const Feedback = ({ feedback }) => {
  return (
    <div className="card px-8 py-7 flex-row gap-x-10">
      <div className="shrink-0">
        <UpvoteButton id={feedback.id} />
      </div>
      <div>
        <h3 className="font-bold text-lg tracking-[-0.25px] text-base-heading mb-1">
          <Link to={`/feedback/${feedback.id}`}>{feedback.title}</Link>
        </h3>
        <div>{feedback.description}</div>
        <div className="btn btn-secondary pointer-events-none mt-3">
          {categories.find(({ value }) => value === feedback.category).label}
        </div>
      </div>
      <div>
        Comments
        {' '}
        {feedback.comments?.length || 0}
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
