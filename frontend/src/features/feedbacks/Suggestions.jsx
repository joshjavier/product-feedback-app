import { useSelector } from 'react-redux'
import { selectSortedFeedbacks } from './feedbacksSlice'
import Feedback from './Feedback'
import { Link } from 'react-router-dom'

const Suggestions = () => {
  const suggestions = useSelector(state => selectSortedFeedbacks(state, 'suggestion'))

  if (!suggestions) {
    <div className="card bg-white card-body">
      <div>There is no feedback yet.</div>
      <div>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</div>
      <Link to="/feedback-new" className="btn btn-primary">Add Feedback</Link>
    </div>
  }

  return (
    <div className="space-y-5">
      {suggestions.map(suggestion => (
        <Feedback key={suggestion.id} feedback={suggestion} />
      ))}
    </div>
  )
}

export default Suggestions
