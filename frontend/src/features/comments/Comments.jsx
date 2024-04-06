import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectFeedbackById } from '../feedbacks/feedbacksSlice'
import Comment from './Comment'

const Comments = () => {
  const { id } = useParams()
  const { comments } = useSelector(state => selectFeedbackById(state, id))

  return (
    <div className="card pt-6 px-8 pb-12">
      <h2 className="mb-7 px-0.5 font-bold text-lg tracking-[-0.25px] text-base-heading">
        {comments?.length || 0}
        {' '}
        {comments?.length === 1 ? 'Comment' : 'Comments'}
      </h2>
      {comments && (
        <ul className="divide-y divide-[#8C92B3]/[.25]">
          {comments.map(commentId => (
            <li key={commentId} className="py-8 first:pt-0 last:pb-0">
              <Comment commentId={commentId} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Comments
