import { useDispatch, useSelector } from 'react-redux'
import { selectFeedbackById, updateFeedback } from '../features/feedbacks/feedbacksSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { categories, status } from '../features/ui'
import Form from '../components/Form'
import Field from '../components/Field'
import LeftArrowIcon from '../assets/shared/icon-arrow-left.svg?react'

const FeedbackEdit = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id, upvotes, comments, ...feedback } = useSelector(state => selectFeedbackById(state, params.id))

  const onSubmit = (formData) => {
    console.log(formData)
    dispatch(updateFeedback({ id, ...formData }))
    navigate(-1)
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
      <div className="card pt-[52px] px-[42px] pb-10 text-base-heading text-sm">
        <h1 className="font-bold text-2xl tracking-[-0.33px] mb-[75px]">Editing &lsquo;{feedback.title}&rsquo;</h1>
        <Form onSubmit={onSubmit} initialData={feedback} submitLabel="Save Changes">
          <Field
            name="title"
            label="Feedback Title"
            description="Add a short, descriptive headline"
          />
          <Field
            type="select"
            name="category"
            label="Category"
            description="Choose a category for your feedback"
            items={categories}
          />
          <Field
            type="select"
            name="status"
            label="Update Status"
            description="Change feedback state"
            items={status}
          />
          <Field
            type="textarea"
            name="description"
            label="Feedback Detail"
            description="Include any specific comments on what should be improved, added, etc."
          />
        </Form>
      </div>
    </div>
  )
}

export default FeedbackEdit
