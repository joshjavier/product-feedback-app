import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { selectFeedbackById } from '../features/feedbacks/feedbacksSlice'
import Feedback from '../features/feedbacks/Feedback'
import AddComment from '../features/comments/AddComment'
import Comments from '../features/comments/Comments'
import BackButton from '../components/BackButton'

const FeedbackDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const feedback = useSelector(state => selectFeedbackById(state, id))

  if (!feedback) return

  return (
    <div className="container mx-auto mt-20 mb-[137px] md:max-w-[730px] space-y-6">
      <div className="flex items-center justify-between">
        <BackButton />
        <Link to="edit" className="btn btn-secondary btn-active w-[142px]">Edit Feedback</Link>
      </div>
      <Feedback feedback={feedback} />
      <Comments />
      <AddComment />
    </div>
  )
}

export default FeedbackDetail
