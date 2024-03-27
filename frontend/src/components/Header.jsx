import { useSelector } from 'react-redux'
import { selectSortedFeedbacks } from '../features/feedbacks/feedbacksSlice'
import SortSelect from './SortSelect'
import { Link } from 'react-router-dom'

const Header = () => {
  const suggestions = useSelector(state => selectSortedFeedbacks(state, 'suggestion'))

  return (
    <div className="card card-body">
      <div>
        {suggestions.length}
        {' '}
        Suggestions
      </div>
      <SortSelect />
      <Link to="/feedback-new" className="btn btn-primary">Add Feedback</Link>
    </div>
  )
}

export default Header
