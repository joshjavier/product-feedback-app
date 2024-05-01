import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectCommentById } from './commentsSlice'
import { selectUserByUsername } from '../users/usersSlice'
import { useRef, useState } from 'react'
import AddReply from './AddReply'
import Replies from './Replies'
import Avatar from '../../components/Avatar'

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
    <article className="flex items-start">
      <div className="me-8">
        <Avatar user={user} />
      </div>
      <div className="grow">
        <div className="flex justify-between items-center mb-[17px]">
          <div>
            <h3 className="font-bold tracking-[-0.19px] text-base-heading">{user.name}</h3>
            <p>{user.username}</p>
          </div>
          <button
            className="link link-hover link-secondary font-semibold text-[13px]"
            onClick={handleReplyTo(user.username)}
          >
            Reply
          </button>
        </div>
        <div className="md:text-[15px]">
          <p>{comment.content}</p>
        </div>
        {comment.replies && (
          <Replies
            replies={comment.replies}
            handleReplyTo={handleReplyTo}
          />
        )}
        {isReplying && (
          <div className={`mt-6 ${comment.replies ? 'ms-[45px]' : ''}`}>
            <AddReply
              to={commentId}
              close={() => setReplying(false)}
              replyingTo={replyingTo.current}
            />
          </div>
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
