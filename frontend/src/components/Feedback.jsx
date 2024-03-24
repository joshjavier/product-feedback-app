import PropTypes from 'prop-types'

const Feedback = ({ feedback }) => {
  return (
    <div className="card card-body">
      <div className="card-title">{feedback.title}</div>
      <div>{feedback.description}</div>
      <div className="badge badge-info">{feedback.category}</div>
      <div>
        Comments
        {' '}
        {feedback.comments?.length || 0}
      </div>
      <div>
        Upvotes
        {' '}
        {feedback.upvotes}
        {' '}
        <button className="btn">Upvote</button>
      </div>
    </div>
  )
}

Feedback.propTypes = {
  feedback: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    upvotes: PropTypes.number,
    description: PropTypes.string,
    comments: PropTypes.array,
  }).isRequired,
}

export default Feedback
