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
