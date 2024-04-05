import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createFeedback } from '../features/feedbacks/feedbacksSlice'
import { categories } from '../features/ui'
import LeftArrowIcon from '../assets/shared/icon-arrow-left.svg?react'
import Select from '../components/Select'
import Option from '../components/Option'

const EMPTY = {
  title: '',
  category: categories[0].value,
  description: '',
}

const FeedbackNew = () => {
  const [form, setForm] = useState(EMPTY)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleUpdateField = (name, value) => {
    setForm(state => ({ ...state, [name]: value }))
  }

  const onChange = (evt) => {
    handleUpdateField(evt.target.name, evt.target.value)
  }

  const onSubmit = async (evt) => {
    evt.preventDefault()
    const { payload } = await dispatch(createFeedback(form))
    navigate(`/feedback/${payload.id}`)
  }

  return (
    <div className="mx-auto mt-[92px] px-6 box-content max-w-[540px]">
      <button
        onClick={() => navigate(-1)}
        className="link link-hover text-sm font-bold flex items-center gap-x-4 mb-10"
      >
        <LeftArrowIcon className="fill-none stroke-secondary" />
        <span>Go Back</span>
      </button>
      <form onSubmit={onSubmit}>
        <div className="card pt-[52px] px-[42px] pb-10 text-base-heading text-sm">
          <h1 className="font-bold text-2xl tracking-[-0.33px] mb-10">Create New Feedback</h1>

          <div className="space-y-6">
            <div className="form-control">
              <label className="font-bold mb-0.5 tracking-[-0.19px]" htmlFor="title">Feedback Title</label>
              <p id="title-description" className="mb-4 text-base-content">Add a short, descriptive headline</p>
              <input
                type="text"
                className="input"
                aria-describedby="title-description"
                id="title"
                name="title"
                value={form.title}
                onChange={onChange}
              />
            </div>
            <div className="form-control">
              <label className="font-bold mb-0.5 tracking-[-0.19px]" htmlFor="category">Category</label>
              <p id="category-description" className="mb-4 text-base-content">Choose a category for your feedback</p>
              <Select name="category" updateField={handleUpdateField}>
                {categories.map(({ label, value }) => (
                  <Option key={value} label={label} value={value} />
                ))}
              </Select>
            </div>
            <div className="form-control">
              <label className="font-bold mb-0.5 tracking-[-0.19px]" htmlFor="detail">Feedback Detail</label>
              <p id="detail-description" className="mb-4 text-base-content">Include any specific comments on what should be improved, added, etc.</p>
              <textarea
                className="textarea h-24 resize-none"
                aria-describedby="detail-description"
                id="detail"
                name="description"
                value={form.description}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              className="btn btn-neutral font-bold w-[93px]"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary font-bold w-36"
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
