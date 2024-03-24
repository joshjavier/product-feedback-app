import { useDispatch, useSelector } from 'react-redux'
import { sortBy } from '../reducers/sortReducer'
import { selectSort } from '../selectors'

const options = [
  { value: 'mostUpvotes', label: 'Most Upvotes' },
  { value: 'leastUpvotes', label: 'Least Upvotes' },
  { value: 'mostComments', label: 'Most Comments' },
  { value: 'leastComments', label: 'Least Comments' },
]

const SortSelect = () => {
  const sort = useSelector(selectSort)
  const dispatch = useDispatch()

  const onChange = (evt) => {
    dispatch(sortBy(evt.target.value))
  }

  return (
    <label className="form-control">
      <div className="label">Sort by:</div>
      <select className="select select-ghost" value={sort} onChange={onChange}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </label>
  )
}

export default SortSelect
