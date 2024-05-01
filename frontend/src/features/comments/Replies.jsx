import PropTypes from 'prop-types'
import Avatar from '../../components/Avatar'

const Reply = ({ reply, onReply }) => {
  return (
    <article className="flex">
      <div className="me-8">
        <Avatar user={reply.user} />
      </div>
      <div className="grow">
        <div className="flex justify-between items-center mb-[17px]">
          <div>
            <h3 className="font-bold tracking-[-0.19px] text-base-heading">{reply.user.name}</h3>
            <p>{reply.user.username}</p>
          </div>
          <button
            className="link link-hover link-secondary font-semibold text-[13px]"
            onClick={onReply}
          >
            Reply
          </button>
        </div>
        <div className="md:text-[15px]">
          <p>
            <strong className="text-primary">@{reply.replyingTo}</strong>
            {' '}
            <span>{reply.content}</span>
          </p>
        </div>
      </div>
    </article>
  )
}

const Replies = ({ replies, handleReplyTo }) => {
  return (
    <ul className="ms-[-27px]">
      {replies.map(reply => (
        <li key={reply.content + reply.replyingTo} className="my-8 last:mb-0">
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
