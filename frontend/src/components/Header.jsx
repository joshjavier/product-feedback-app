import { useSelector } from 'react-redux'
import { selectSuggestions } from '../selectors'
import SortSelect from './SortSelect'

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
      <button className="btn btn-primary">Add Feedback</button>
    </div>
  )
}

export default Header
