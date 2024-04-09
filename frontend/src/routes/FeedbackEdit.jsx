import { useDispatch, useSelector } from 'react-redux'
import { selectFeedbackById, updateFeedback } from '../features/feedbacks/feedbacksSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { categories, status } from '../features/ui'
import Form from '../components/Form'
import Field from '../components/Field'
import BackButton from '../components/BackButton'
import EditFeedbackIcon from '../assets/shared/icon-edit-feedback.svg?react'

const FeedbackEdit = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const { id, upvotes, comments, ...feedback } = useSelector(state => selectFeedbackById(state, params.id))

  const onSubmit = (formData) => {
    dispatch(updateFeedback({ id, ...formData }))
    navigate(-1)
  }

  return (
    <div className="mx-auto mt-[34px] sm:mt-14 md:mt-[92px] px-6 box-content max-w-[540px] text-[13px] sm:text-sm">
      <div className="mb-[55px] sm:mb-[68px]">
        <BackButton />
      </div>
      <div className="card bg-white p-6 pt-11 sm:px-[42px] sm:pt-[52px] sm:pb-10">
        <EditFeedbackIcon viewBox="0 0 40 40" className="absolute inset-0 translate-y-[-50%] ms-6 sm:ms-[42px] w-10 sm:w-14 h-auto" />
        <h1 className="font-bold text-lg sm:text-2xl text-base-heading tracking-[-0.33px] mb-6 sm:mb-[75px]">Editing &lsquo;{feedback.title}&rsquo;</h1>
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
