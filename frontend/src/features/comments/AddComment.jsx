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
      <div className="card card-body">
        <h2 className="card-title">Add Comment</h2>
        <textarea
          className="textarea textarea-bordered"
          maxLength={250}
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <div className="flex justify-between items-center">
          <span>{remaining} {remaining === 1 ? 'character' : 'characters'} left</span>
          <button type="submit" className="btn btn-primary">Post Comment</button>
        </div>
      </div>
    </form>
  )
}

export default AddComment
