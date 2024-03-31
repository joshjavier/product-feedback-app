import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from './uiSlice'
import { categories } from './index'

const filters = [{ value: null, label: 'All' }, ...categories]

const Filter = () => {
  const active = useSelector(state => state.ui.filter)
  const dispatch = useDispatch()

  const onClick = (evt) => {
    const category = evt.target.value || null
    dispatch(setFilter(category))
  }

  return (
    <div className="filter-card card card-body">
      <div className="card-actions gap-3.5">
        {filters.map(({ value, label }) => (
          <button
            key={value}
            value={value}
            onClick={onClick}
            className={`btn-filter btn btn-secondary text-[13px] font-semibold ${value === active ? 'btn-active' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filter
