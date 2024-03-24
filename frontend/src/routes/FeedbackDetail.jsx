import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Feedback from '../components/Feedback'
import Comment from '../components/Comment'

const FeedbackDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const feedback = useSelector(state => state.productRequests.find(item => item.id === id))

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
        <button className="btn btn-primary">Edit Feedback</button>
      </div>
      <Feedback feedback={feedback} />
      <div className="card card-body">
        <h2 className="card-title">
          {feedback.comments?.length || 0}
          {' '}
          {feedback.comments?.length === 1 ? 'Comment' : 'Comments'}
        </h2>
        {feedback.comments && (
          <ul>
            {feedback.comments.map(comment => (
              <li key={comment.id}>
                <Comment comment={comment} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default FeedbackDetail
