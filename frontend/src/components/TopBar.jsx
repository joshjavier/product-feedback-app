import { useSelector } from 'react-redux'
import { selectSortedFeedbacks } from '../features/feedbacks/feedbacksSlice'
import SortSelect from '../features/ui/SortSelect'
import { Link } from 'react-router-dom'

const TopBar = () => {
  const suggestions = useSelector(state => selectSortedFeedbacks(state, 'suggestion'))

  return (
    <div className="card card-body">
      <div>
        {suggestions.length}
        {' '}
        {suggestions.length === 1 ? 'Suggestion' : 'Suggestions'}
      </div>
      <SortSelect />
      <Link to="/feedback-new" className="btn btn-primary">Add Feedback</Link>
    </div>
  )
}

export default TopBar
