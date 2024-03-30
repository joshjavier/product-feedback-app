import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { selectFeedbackById } from '../features/feedbacks/feedbacksSlice'
import Feedback from '../features/feedbacks/Feedback'
import AddComment from '../features/comments/AddComment'
import Comments from '../features/comments/Comments'

const FeedbackDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const feedback = useSelector(state => selectFeedbackById(state, id))

  if (!feedback) return

  return (
    <div className="container px-4 md:max-w-[730px] mx-auto">
      <div className="flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-ghost"
        >
          Go Back
        </button>
        <Link to="edit" className="btn btn-primary">Edit Feedback</Link>
      </div>
      <Feedback feedback={feedback} />
      <Comments />
      <AddComment />
    </div>
  )
}

export default FeedbackDetail
