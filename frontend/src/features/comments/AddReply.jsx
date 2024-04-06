import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addReply } from '../feedbacks/feedbacksSlice'
import PropTypes from 'prop-types'

const AddReply = ({ to, close, replyingTo }) => {
  const dispatch = useDispatch()
  const [content, setContent] = useState('')
  const ref = useRef()

  useEffect(() => {
    ref.current.focus()
  }, [])

  const onSubmit = (evt) => {
    evt.preventDefault()
    dispatch(addReply({ to, content, replyingTo }))
    close()
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex gap-4">
        <textarea
          className="textarea h-20 resize-none grow text-base-heading"
          ref={ref}
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button className="btn btn-primary w-[117px]" type="submit">Post Reply</button>
      </div>
    </form>
  )
}

AddReply.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  close: PropTypes.func,
  replyingTo: PropTypes.string,
}

export default AddReply
