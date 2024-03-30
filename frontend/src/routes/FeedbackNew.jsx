import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createFeedback } from '../features/feedbacks/feedbacksSlice'

const EMPTY = {
  title: '',
  category: 'feature',
  description: '',
}

const UI = { value: 'ui', label: 'UI' }
const UX = { value: 'ux', label: 'UX' }
const ENHANCEMENT = { value: 'enhancement', label: 'Enhancement' }
const BUG = { value: 'bug', label: 'Bug' }
const FEATURE = { value: 'feature', label: 'Feature' }

const categories = [FEATURE, UI, UX, ENHANCEMENT, BUG]

const FeedbackNew = () => {
  const [form, setForm] = useState(EMPTY)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onChange = (evt) => {
    setForm(state => ({
      ...state,
      [evt.target.name]: evt.target.value,
    }))
  }

  const onSubmit = async (evt) => {
    evt.preventDefault()
    const { payload } = await dispatch(createFeedback(form))
    navigate(`/feedback/${payload.id}`)
  }

  return (
    <div className="mx-auto px-4 max-w-[540px]">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-ghost"
      >
        Go Back
      </button>
      <form onSubmit={onSubmit}>
        <div className="card card-body">
          <h1 className="card-title">Create New Feedback</h1>
          <div className="form-control">
            <label className="label" htmlFor="title">Feedback Title</label>
            <p id="title-description">Add a short, descriptive headline</p>
            <input
              type="text"
              className="input input-bordered"
              aria-describedby="title-description"
              id="title"
              name="title"
              value={form.title}
              onChange={onChange}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="category">Category</label>
            <p id="category-description">Choose a category for your feedback</p>
            <select
              className="select select-ghost"
              aria-describedby="category-description"
              name="category"
              id="category"
              value={form.category}
              onChange={onChange}
            >
              {categories.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="label" htmlFor="detail">Feedback Detail</label>
            <p id="detail-description">Include any specific comments on what should be improved, added, etc.</p>
            <textarea
              className="textarea textarea-bordered"
              aria-describedby="detail-description"
              id="detail"
              name="description"
              value={form.detail}
              onChange={onChange}
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="btn"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary"
              type="submit"
            >
              Add Feedback
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FeedbackNew
