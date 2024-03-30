import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectCommentById } from './commentsSlice'
import { selectUserByUsername } from '../users/usersSlice'

const Comment = ({ commentId }) => {
  const comment = useSelector(state => selectCommentById(state, commentId))
  const user = useSelector(state => selectUserByUsername(state, comment.user))

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
          <button className="btn btn-ghost">Reply</button>
        </div>
        <div>
          <p>{comment.content}</p>
        </div>
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
