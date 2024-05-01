import { Link } from 'react-router-dom'
import Feedback from '../features/feedbacks/Feedback'
import AddComment from '../features/comments/AddComment'
import Comments from '../features/comments/Comments'
import BackButton from '../components/BackButton'

const FeedbackDetail = () => {
  return (
    <div className="px-6 mx-auto mt-6 mb-[88px] space-y-6 sm:container sm:mt-14 md:px-10 lg:px-0 lg:mt-20 lg:max-w-[730px] text-[13px] sm:text-sm">
      <div className="flex items-center justify-between">
        <BackButton />
        <Link to="edit" className="btn btn-secondary btn-active w-[119px] sm:w-[142px]">Edit Feedback</Link>
      </div>
      <Feedback />
      <Comments />
      <AddComment />
    </div>
  )
}

export default FeedbackDetail
