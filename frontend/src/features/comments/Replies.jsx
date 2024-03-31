import PropTypes from 'prop-types'

const Reply = ({ reply, onReply }) => {
  return (
    <article className="flex">
      <div className="w-10 shrink-0">
        <img className="rounded-full" src={reply.user.image} alt="" />
      </div>
      <div className="grow">
        <div className="flex justify-between align-middle">
          <div>
            <h3 className="font-bold">{reply.user.name}</h3>
            <p>{reply.user.username}</p>
          </div>
          <button
            className="btn btn-ghost"
            onClick={onReply}
          >
            Reply
          </button>
        </div>
        <div>
          <p>
            <strong>@{reply.replyingTo}</strong>
            <span>{reply.content}</span>
          </p>
        </div>
      </div>
    </article>
  )
}

const Replies = ({ replies, handleReplyTo }) => {
  return (
    <ul>
      {replies.map(reply => (
        <li key={reply.content + reply.replyingTo}>
          <Reply reply={reply} onReply={handleReplyTo(reply.user.username)} />
        </li>
      ))}
    </ul>
  )
}

Reply.propTypes = {
  reply: PropTypes.shape({
    content: PropTypes.string,
    replyingTo: PropTypes.string,
    user: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      username: PropTypes.string,
    }),
  }).isRequired,
  onReply: PropTypes.func,
}

Replies.propTypes = {
  replies: PropTypes.array,
  handleReplyTo: PropTypes.func,
}

export default Replies
