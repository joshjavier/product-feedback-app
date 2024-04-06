import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addComment } from '../feedbacks/feedbacksSlice'

const AddComment = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [content, setContent] = useState('')
  const remaining = 250 - content.length

  const onSubmit = (evt) => {
    evt.preventDefault()
    dispatch(addComment({ id, content }))
    setContent('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="card pt-6 ps-[34px] pe-8 pb-8">
        <h2 className="mb-6 font-bold text-lg tracking-[-0.25px] text-base-heading">Add Comment</h2>
        <textarea
          className="textarea resize-none h-20 text-base-heading"
          maxLength={250}
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <div className="flex justify-between items-center mt-4">
          <span className="text-[15px]">{remaining} {remaining === 1 ? 'character' : 'characters'} left</span>
          <button type="submit" className="btn btn-primary w-[142px] font-bold">Post Comment</button>
        </div>
      </div>
    </form>
  )
}

export default AddComment
