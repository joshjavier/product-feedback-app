import PropTypes from 'prop-types'
import { useListItem } from '@floating-ui/react'
import { useSelectContext } from './Select'
import CheckIcon from '../assets/shared/icon-check.svg?react'

const Option = ({ label, value }) => {
  const { ref, index } = useListItem({ label })
  const {
    activeIndex,
    selectedIndex,
    getItemProps,
    handleSelect,
  } = useSelectContext()

  const isActive = activeIndex === index
  const isSelected = selectedIndex === index

  return (
    <div
      className="label hover:text-primary py-3 px-6 border-[#3A4374]/15"
      tabIndex={isActive ? 0 : -1}
      ref={ref}
      data-value={value}
      {...getItemProps({
        active: isActive,
        selected: isSelected,
        onClick() {
          handleSelect(index)
        },
        onKeyDown(evt) {
          if (evt.key === 'Enter' || evt.key === ' ') {
            evt.preventDefault()
            handleSelect(index)
          }
        },
      })}
    >
      <span className="text-sm sm:text-base">{label}</span>
      {isSelected && <CheckIcon className="fill-none stroke-primary" />}
    </div>
  )
}

Option.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Option
