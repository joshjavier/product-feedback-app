import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { selectFeedbackById, upvoteFeedback } from './feedbacksSlice'
import UpArrowIcon from '../../assets/shared/icon-arrow-up.svg?react'

const UpvoteButton = ({ id, direction = 'col' }) => {
  const dispatch = useDispatch()
  const { upvotes } = useSelector(state => selectFeedbackById(state, id))
  const upvotedFeedbacks = useSelector(state => state.currentUser?.upvotedFeedbacks)
  const isUpvoted = upvotedFeedbacks?.includes(id)

  const onClick = () => {
    dispatch(upvoteFeedback(id))
  }

  const col = direction === 'col' ? 'flex-col' : ''
  const active = isUpvoted ? 'btn-active' : ''

  return (
    <button
      onClick={onClick}
      className={`btn btn-secondary btn-upvote ${col} ${active}`}
      title={`${upvotes} upvotes`}
    >
      <UpArrowIcon className="fill-none stroke-current" />
      <span>{upvotes}</span>
    </button>
  )
}

UpvoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  direction: PropTypes.string,
}

export default UpvoteButton
