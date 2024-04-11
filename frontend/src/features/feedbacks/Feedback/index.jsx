import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { categories } from '../../ui'
import UpvoteButton from '../UpvoteButton'
import CommentCount from '../CommentCount'
import './style.css'

const Feedback = ({ feedback }) => {
  return (
    <div className="card bg-white">
      <div className="feedback">
        <div className="feedback-text">
          <h3 className="feedback-title">
            <Link to={`/feedback/${feedback.id}`}>{feedback.title}</Link>
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
