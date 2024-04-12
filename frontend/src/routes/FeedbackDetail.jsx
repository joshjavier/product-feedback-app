import { Link } from 'react-router-dom'
import Feedback from '../features/feedbacks/Feedback'
import AddComment from '../features/comments/AddComment'
import Comments from '../features/comments/Comments'
import BackButton from '../components/BackButton'

const FeedbackDetail = () => {
  return (
    <div className="container mx-auto mt-20 mb-[137px] md:max-w-[730px] space-y-6">
      <div className="flex items-center justify-between">
        <BackButton />
        <Link to="edit" className="btn btn-secondary btn-active w-[142px]">Edit Feedback</Link>
      </div>
      <Feedback />
      <Comments />
      <AddComment />
    </div>
  )
}

export default FeedbackDetail
