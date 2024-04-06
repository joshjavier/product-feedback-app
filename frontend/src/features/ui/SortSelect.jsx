import { useDispatch, useSelector } from 'react-redux'
import { sortBy } from './uiSlice'
import {
  autoUpdate,
  offset,
  useFloating,
  useInteractions,
  useClick,
  useRole,
  useDismiss,
  useListNavigation,
  FloatingFocusManager,
  FloatingPortal,
} from '@floating-ui/react'
import { useRef, useState } from 'react'
import CheckIcon from '../../assets/shared/icon-check.svg?react'
import DownArrowIcon from '../../assets/shared/icon-arrow-down.svg?react'
import UpArrowIcon from '../../assets/shared/icon-arrow-up.svg?react'

const options = [
  { value: 'mostUpvotes', label: 'Most Upvotes' },
  { value: 'leastUpvotes', label: 'Least Upvotes' },
  { value: 'mostComments', label: 'Most Comments' },
  { value: 'leastComments', label: 'Least Comments' },
]

const SortSelect = () => {
  const sort = useSelector(state => state.ui.sort)
  const dispatch = useDispatch()

  const [isOpen, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(options.findIndex(({ value }) => value === sort))
  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    open: isOpen,
    onOpenChange: setOpen,
    middleware: [
      offset({ mainAxis: 42, crossAxis: 2 }),
    ],
  })
  const listRef = useRef([])
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
  })
  const click = useClick(context)
  const role = useRole(context, { role: 'select' })
  const dismiss = useDismiss(context)
  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    click,
    role,
    dismiss,
    listNav,
  ])

  const handleSelect = (index, sortValue) => {
    setSelectedIndex(index)
    setOpen(false)
    dispatch(sortBy(sortValue))
  }

  const arrowIcon = 'stroke-white'

  return (
    <>
      <button
        className="flex items-center gap-[9px] text-primary-content"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        Sort by : <strong>{options[selectedIndex].label}</strong>
        {isOpen ? (
          <UpArrowIcon className={arrowIcon} />
        ) : (
          <DownArrowIcon className={arrowIcon} />
        )}
      </button>

      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              className="card bg-white divide-y w-[255px] shadow-xl"
              style={floatingStyles}
              {...getFloatingProps()}
            >
              {options.map((item, index) => (
                <div
                  key={item.value}
                  className="label hover:text-primary cursor-pointer py-3 px-6 border-[#3A4374]/15"
                  tabIndex={activeIndex === index ? 0 : -1}
                  ref={(node) => {
                    listRef.current[index] = node
                  }}
                  {...getItemProps({
                    onClick() {
                      handleSelect(index, item.value)
                    },
                    onKeyDown(evt) {
                      if (evt.key === 'Enter' || evt.key === ' ') {
                        evt.preventDefault()
                        handleSelect(index, item.value)
                      }
                    },
                    active: activeIndex === index,
                    selected: selectedIndex === index,
                  })}
                >
                  <span>{item.label}</span>
                  {selectedIndex === index && <CheckIcon className="fill-none stroke-primary" />}
                </div>
              ))}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  )
}

export default SortSelect
