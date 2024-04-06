import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from './uiSlice'
import { categories } from './index'

const filters = [{ value: null, label: 'All' }, ...categories.slice(1), categories[0]]

const Filter = () => {
  const active = useSelector(state => state.ui.filter)
  const dispatch = useDispatch()

  const onClick = (evt) => {
    const category = evt.target.value || null
    dispatch(setFilter(category))
  }

  return (
    <div className="filter-card card bg-white card-body">
      <div className="card-actions gap-3.5">
        {filters.map(({ value, label }) => (
          <button
            key={value}
            value={value}
            onClick={onClick}
            className={`btn btn-secondary btn-sm ${value === active ? 'btn-active' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filter
