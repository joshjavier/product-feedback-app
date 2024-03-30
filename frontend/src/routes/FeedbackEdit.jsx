import { useDispatch, useSelector } from 'react-redux'
import { selectFeedbackById, updateFeedback } from '../features/feedbacks/feedbacksSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { categories, status } from '../data/ui'

const FeedbackEdit = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id, upvotes, comments, ...feedback } = useSelector(state => selectFeedbackById(state, params.id))
  const [form, setForm] = useState(feedback)

  const onSubmit = (evt) => {
    evt.preventDefault()
    dispatch(updateFeedback({ id, ...form }))
    navigate(-1)
  }

  const onChange = (evt) => {
    setForm(state => ({
      ...state,
      [evt.target.name]: evt.target.value,
    }))
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
          <h1 className="card-title">Editing &lsquo;{feedback.title}&rsquo;</h1>

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
            <label className="label" htmlFor="status">Update Status</label>
            <p id="status-description">Change feedback state</p>
            <select
              className="select select-ghost"
              aria-describedby="status-description"
              name="status"
              id="status"
              value={form.status}
              onChange={onChange}
            >
              {status.map(({ value, label }) => (
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
              value={form.description}
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary sm:order-last" type="submit">Save Changes</button>
            <button className="btn btn-neutral sm:ms-auto" onClick={() => navigate(-1)}>Cancel</button>
            <button className="btn btn-error sm:order-first">Delete</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FeedbackEdit
