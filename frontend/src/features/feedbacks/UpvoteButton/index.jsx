import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { selectFeedbackById, upvoteFeedback } from '../feedbacksSlice'
import UpArrowIcon from '../../../assets/shared/icon-arrow-up.svg?react'
import './style.css'

const UpvoteButton = ({ id }) => {
  const dispatch = useDispatch()
  const { upvotes } = useSelector(state => selectFeedbackById(state, id))
  const upvotedFeedbacks = useSelector(state => state.currentUser?.upvotedFeedbacks)
  const isUpvoted = upvotedFeedbacks?.includes(id)

  const onClick = () => {
    dispatch(upvoteFeedback(id))
  }

  const active = isUpvoted ? 'btn-active' : ''

  return (
    <button
      onClick={onClick}
      className={`btn btn-secondary btn-upvote ${active}`}
      title={`${upvotes} upvotes`}
    >
      <UpArrowIcon aria-hidden className="fill-none stroke-current" />
      <span>{upvotes}</span>
      <span className="sr-only"> {upvotes === 1 ? 'upvote' : 'upvotes'}</span>
    </button>
  )
}

UpvoteButton.propTypes = {
  id: PropTypes.string.isRequired,
}

export default UpvoteButton
