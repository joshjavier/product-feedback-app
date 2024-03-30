import PropTypes from 'prop-types'
import Comment from './Comment'

const Comments = ({ comments }) => {
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

Comments.propTypes = {
  comments: PropTypes.array,
}

export default Comments
