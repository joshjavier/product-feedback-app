import { useSelector } from 'react-redux'
import { selectSuggestions } from '../selectors'
import Feedback from './Feedback'

const Suggestions = () => {
  const suggestions = useSelector(selectSuggestions)

  if (!suggestions) {
    <div className="card card-body">
      <div>There is no feedback yet.</div>
      <div>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</div>
      <button className="btn btn-primary">Add Feedback</button>
    </div>
  }

  return (
    <div>
      {suggestions.map(suggestion => (
        <Feedback key={suggestion.id} feedback={suggestion} />
      ))}
    </div>
  )
}

export default Suggestions
