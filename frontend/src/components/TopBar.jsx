import { useSelector } from 'react-redux'
import { selectSortedFeedbacks } from '../features/feedbacks/feedbacksSlice'
import SortSelect from '../features/ui/SortSelect'
import { Link } from 'react-router-dom'
import bulb from '../../public/assets/suggestions/icon-suggestions.svg'

const TopBar = () => {
  const suggestions = useSelector(state => selectSortedFeedbacks(state, 'suggestion'))

  return (
    <div className="flex items-center rounded-[10px] py-3.5 ps-6 pe-4 bg-neutral text-white">
      <div className="flex items-center gap-4 me-[38px]">
        <div>
          <img src={bulb} alt="" />
        </div>
        <span className="font-bold text-lg tracking-[-0.25px]">
          {suggestions.length} {suggestions.length === 1 ? 'Suggestion' : 'Suggestions'}
        </span>
      </div>
      <SortSelect />
      <Link to="/feedback-new" className="btn btn-primary text-white w-[158px] h-11 min-h-11 ms-auto">
        <span aria-hidden="true">+</span> Add Feedback
      </Link>
    </div>
  )
}

export default TopBar
