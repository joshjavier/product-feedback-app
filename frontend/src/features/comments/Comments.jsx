import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectFeedbackById } from '../feedbacks/feedbacksSlice'
import Comment from './Comment'

const Comments = () => {
  const { id } = useParams()
  const { comments } = useSelector(state => selectFeedbackById(state, id))

  return (
    <div className="card card-body">
      <h2 className="card-title">
        {comments?.length || 0}
        {' '}
        {comments?.length === 1 ? 'Comment' : 'Comments'}
      </h2>
      {comments && (
        <ul>
          {comments.map(commentId => (
            <li key={commentId}>
              <Comment commentId={commentId} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Comments
