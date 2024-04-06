import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import LeftArrowIcon from '../assets/shared/icon-arrow-left.svg?react'

const BackButton = ({ theme = 'light' }) => {
  const navigate = useNavigate()
  const darkMode = theme === 'dark'

  return (
    <button
      onClick={() => navigate(-1)}
      className="link link-hover text-sm font-bold flex items-center gap-x-4"
    >
      <LeftArrowIcon className={`fill-none ${darkMode ? 'stroke-[#CDD2EE]' : 'stroke-secondary'}`} />
      <span>Go Back</span>
    </button>
  )
}

BackButton.propTypes = {
  theme: PropTypes.string,
}

export default BackButton
