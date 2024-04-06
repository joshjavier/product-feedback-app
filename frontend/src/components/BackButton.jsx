import { useNavigate } from 'react-router-dom'
import LeftArrowIcon from '../assets/shared/icon-arrow-left.svg?react'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className="link link-hover text-sm font-bold flex items-center gap-x-4"
    >
      <LeftArrowIcon className="fill-none stroke-secondary" />
      <span>Go Back</span>
    </button>
  )
}

export default BackButton
