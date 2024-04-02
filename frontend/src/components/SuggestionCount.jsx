import { useSelector } from 'react-redux'
import { selectSortedFeedbacks } from '../features/feedbacks/feedbacksSlice'
import BulbIcon from '../assets/suggestions/icon-suggestions.svg?react'

const SuggestionCount = () => {
  const suggestions = useSelector(state => selectSortedFeedbacks(state, 'suggestion'))

  return (
    <div className="flex items-center gap-4">
      <BulbIcon className="fill-current" />
      <span className="font-bold text-lg tracking-[-0.25px]">
        {suggestions.length}&nbsp;{suggestions.length === 1 ? 'Suggestion' : 'Suggestions'}
      </span>
    </div>
  )
}

export default SuggestionCount
