import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createFeedback } from '../features/feedbacks/feedbacksSlice'
import { categories } from '../features/ui'
import BackButton from '../components/BackButton'
import Form from '../components/Form'
import Field from '../components/Field'
import NewFeedbackIcon from '../assets/shared/icon-new-feedback.svg?react'

const EMPTY = {
  title: '',
  category: categories[0].value,
  description: '',
}

const FeedbackNew = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = async (form) => {
    const { payload } = await dispatch(createFeedback(form))
    navigate(`/feedback/${payload.id}`)
  }

  return (
    <div className="mx-auto mt-[34px] sm:mt-14 md:mt-[92px] px-6 box-content max-w-[540px] text-[13px] sm:text-sm">
      <div className="mb-[55px] sm:mb-[68px]">
        <BackButton />
      </div>
      <div className="card bg-white p-6 pt-11 sm:px-[42px] sm:pt-[52px] sm:pb-10">
        <NewFeedbackIcon viewBox="0 0 56 56" className="absolute inset-0 translate-y-[-50%] ms-6 sm:ms-[42px] w-10 sm:w-14" />
        <h1 className="font-bold text-lg sm:text-2xl text-base-heading tracking-[-0.33px] mb-10">Create New Feedback</h1>
        <Form onSubmit={onSubmit} initialData={EMPTY} submitLabel="Add Feedback">
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

export default FeedbackNew
