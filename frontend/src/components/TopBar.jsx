import SortSelect from '../features/ui/SortSelect'
import { Link } from 'react-router-dom'
import SuggestionCount from './SuggestionCount'

const TopBar = () => {
  return (
    <div className="flex items-center gap-x-[38px] rounded-[10px] py-3.5 ps-6 pe-4 bg-neutral text-white">
      <SuggestionCount />
      <SortSelect />
      <Link to="/feedback-new" className="btn btn-primary font-bold hover:bg-[#C75AF6] hover:border-[#C75AF6] w-[158px] h-11 min-h-11 ms-auto">
        <span aria-hidden="true">+</span> Add Feedback
      </Link>
    </div>
  )
}

export default TopBar
