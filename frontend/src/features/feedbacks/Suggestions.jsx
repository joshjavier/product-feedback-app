import { useSelector } from 'react-redux'
import { selectSortedFeedbacks } from './feedbacksSlice'
import Feedback from './Feedback'
import { Link } from 'react-router-dom'

const Suggestions = () => {
  const suggestions = useSelector(state => selectSortedFeedbacks(state, 'suggestion'))
  const suggestionIds = suggestions.map(({ id }) => id)

  if (!suggestionIds) {
    <div className="card bg-white card-body">
      <div>There is no feedback yet.</div>
      <div>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</div>
      <Link to="/feedback-new" className="btn btn-primary">Add Feedback</Link>
    </div>
  }

  return (
    <div className="max-md:my-8 max-md:mx-6 space-y-4 lg:space-y-5">
      {suggestionIds.map(id => (
        <Feedback key={id} id={id} />
      ))}
    </div>
  )
}

export default Suggestions
