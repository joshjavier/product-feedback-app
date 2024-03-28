import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../features/ui/uiSlice'

const ALL = { value: null, label: 'All' }
const UI = { value: 'ui', label: 'UI' }
const UX = { value: 'ux', label: 'UX' }
const ENHANCEMENT = { value: 'enhancement', label: 'Enhancement' }
const BUG = { value: 'bug', label: 'Bug' }
const FEATURE = { value: 'feature', label: 'Feature' }

const filters = [ALL, UI, UX, ENHANCEMENT, BUG, FEATURE]

const Filter = () => {
  const active = useSelector(state => state.ui.filter)
  const dispatch = useDispatch()

  const onClick = (evt) => {
    const category = evt.target.value || null
    dispatch(setFilter(category))
  }

  return (
    <div className="card card-body">
      <div className="card-actions">
        {filters.map(({ value, label }) => (
          <button
            key={value}
            value={value}
            onClick={onClick}
            className={`btn btn-outline ${value === active ? 'btn-active' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filter
