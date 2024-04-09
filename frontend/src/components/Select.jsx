import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import {
  autoUpdate,
  useFloating,
  useInteractions,
  useClick,
  useRole,
  useDismiss,
  useListNavigation,
  useTypeahead,
  FloatingFocusManager,
  FloatingPortal,
  FloatingList,
  size,
  offset,
} from '@floating-ui/react'
import DownArrowIcon from '../assets/shared/icon-arrow-down.svg?react'
import UpArrowIcon from '../assets/shared/icon-arrow-up.svg?react'

const SelectContext = createContext({})

// eslint-disable-next-line react-refresh/only-export-components
export const useSelectContext = () => {
  const value = useContext(SelectContext)
  return value
}

const Select = ({ children, name, initialIndex, updateField }) => {
  const labelsRef = useRef([])
  const elementsRef = useRef([])
  const [isOpen, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(initialIndex > 0 ? initialIndex : 0)
  const [selectedLabel, setSelectedLabel] = useState(null)

  const { refs, floatingStyles, context, elements, update } = useFloating({
    placement: 'bottom-start',
    open: isOpen,
    onOpenChange: setOpen,
    middleware: [
      offset(16),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          })
        },
      }),
    ],
  })

  useEffect(() => {
    if (isOpen && elements.reference && elements.floating) {
      const cleanup = autoUpdate(
        elements.reference,
        elements.floating,
        update,
      )
      return cleanup
    }
  }, [elements, isOpen, update])

  const handleSelect = (index) => {
    setSelectedIndex(index)
    setOpen(false)
    if (index !== null) {
      setSelectedLabel(labelsRef.current[index])
      updateField(name, elementsRef.current[index].dataset.value)
    }
  }

  const handleTypeaheadMatch = (index) => {
    if (isOpen) {
      setActiveIndex(index)
    } else {
      handleSelect(index)
    }
  }

  const click = useClick(context)
  const role = useRole(context, { role: 'select' })
  const dismiss = useDismiss(context)
  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
  })
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    onMatch: handleTypeaheadMatch,
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    click,
    role,
    dismiss,
    listNav,
    typeahead,
  ])

  const selectContext = { activeIndex, selectedIndex, getItemProps, handleSelect }

  const arrowIcon = 'fill-none stroke-secondary'

  return (
    <>
      <button
        type="button"
        id={name}
        ref={refs.setReference}
        className={`select ${isOpen ? 'border-secondary' : ''}`}
        {...getReferenceProps()}
      >
        <span>{selectedLabel || labelsRef.current[selectedIndex]}</span>
        {isOpen ? (
          <UpArrowIcon className={arrowIcon} />
        ) : (
          <DownArrowIcon className={arrowIcon} />
        )}
      </button>
      <SelectContext.Provider value={selectContext}>
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              className={`card bg-white divide-y shadow-xl ${isOpen ? '' : 'hidden'}`}
              style={floatingStyles}
              {...getFloatingProps()}
            >
              <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                {children}
              </FloatingList>
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      </SelectContext.Provider>
    </>
  )
}

Select.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  name: PropTypes.string,
  initialIndex: PropTypes.number,
  updateField: PropTypes.func,
}

export default Select
