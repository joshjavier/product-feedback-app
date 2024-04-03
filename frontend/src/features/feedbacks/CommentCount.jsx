import PropTypes from 'prop-types'
import CommentsIcon from '../../assets/shared/icon-comments.svg?react'

const CommentCount = ({ count = 0 }) => {
  const zero = count === 0 ? 'opacity-50' : ''

  return (
    <div className="flex items-center gap-x-2">
      <CommentsIcon className="fill-[#CDD2EE]" />
      <span className={`font-bold text-md tracking-[-0.22px] text-base-heading ${zero}`}>{count}</span>
      <span className="sr-only"> {count === 1 ? 'comment' : 'comments'}</span>
    </div>
  )
}

CommentCount.propTypes = {
  count: PropTypes.number,
}

export default CommentCount
