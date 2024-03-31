import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectCommentById } from './commentsSlice'
import { selectUserByUsername } from '../users/usersSlice'
import { useRef, useState } from 'react'
import AddReply from './AddReply'
import Replies from './Replies'

const Comment = ({ commentId }) => {
  const comment = useSelector(state => selectCommentById(state, commentId))
  const user = useSelector(state => selectUserByUsername(state, comment.user))
  const [isReplying, setReplying] = useState(false)
  const replyingTo = useRef(user.username)

  const handleReplyTo = username => () => {
    if (isReplying && replyingTo.current === username) {
      setReplying(false)
    } else {
      setReplying(true)
      replyingTo.current = username
    }
  }

  return (
    <article className="flex">
      <div className="w-10 shrink-0">
        <img className="rounded-full" src={user.image} alt="" />
      </div>
      <div className="grow">
        <div className="flex justify-between align-middle">
          <div>
            <h3 className="font-bold">{user.name}</h3>
            <p>{user.username}</p>
          </div>
          <button
            className="btn btn-ghost"
            onClick={handleReplyTo(user.username)}
          >
            Reply
          </button>
        </div>
        <div>
          <p>{comment.content}</p>
        </div>
        {comment.replies && (
          <Replies
            replies={comment.replies}
            handleReplyTo={handleReplyTo}
          />
        )}
        {isReplying && (
          <AddReply
            to={commentId}
            close={() => setReplying(false)}
            replyingTo={replyingTo.current}
          />
        )}
      </div>
    </article>
  )
}

Comment.propTypes = {
  commentId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}

export default Comment
