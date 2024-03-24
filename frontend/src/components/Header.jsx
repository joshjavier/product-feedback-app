import { useSelector } from 'react-redux'
import { selectSuggestions } from '../selectors'
import SortSelect from './SortSelect'
import { Link } from 'react-router-dom'

const Header = () => {
  const suggestions = useSelector(selectSuggestions)

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
