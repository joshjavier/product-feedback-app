import { useSelector } from 'react-redux'
import { selectFilter } from '../reducers/filterReducer'
import { selectSuggestions } from '../reducers/feedbacksReducer'
import Feedback from './Feedback'

const Suggestions = () => {
  const suggestions = useSelector(selectSuggestions)
  const filter = useSelector(selectFilter)

  if (!suggestions) {
    <div className="card card-body">
      <div>There is no feedback yet.</div>
      <div>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</div>
      <button className="btn btn-primary">Add Feedback</button>
    </div>
  }

  const filteredSuggestions = filter
    ? suggestions.filter(item => item.category === filter)
    : suggestions

  return (
    <div>
      {filteredSuggestions.map(suggestion => (
        <Feedback key={suggestion.id} feedback={suggestion} />
      ))}
    </div>
  )
}

export default Suggestions
