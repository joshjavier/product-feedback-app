import PropTypes from 'prop-types'

const Comment = ({ comment }) => {
  return (
    <article className="flex">
      <div className="w-10 shrink-0">
        <img className="rounded-full" src={comment.user.image} alt="" />
      </div>
      <div className="grow">
        <div className="flex justify-between align-middle">
          <div>
            <h3 className="font-bold">{comment.user.name}</h3>
            <p>{comment.user.username}</p>
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
  comment: PropTypes.shape({
    content: PropTypes.string,
    user: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      username: PropTypes.string,
    }),
  }).isRequired,
}

export default Comment
