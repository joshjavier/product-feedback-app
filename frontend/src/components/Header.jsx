import { useState } from 'react'
import PropTypes from 'prop-types'
import CloseIcon from '../assets/shared/mobile/icon-close.svg?react'
import HamburgerIcon from '../assets/shared/mobile/icon-hamburger.svg?react'
import {
  useFloating,
  useInteractions,
  useDismiss,
  FloatingFocusManager,
  FloatingPortal,
  FloatingOverlay,
} from '@floating-ui/react'
import Filter from '../features/ui/Filter'
import RoadmapSummary from './RoadmapSummary'

const Toggle = ({ open, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`btn btn-ghost rounded-full w-11 p-0 me-[-12px] swap swap-rotate md:hidden ${open ? 'swap-active' : ''}`}
    >
      <CloseIcon aria-hidden className="swap-on fill-current" />
      <HamburgerIcon aria-hidden className="swap-off fill-current" />
      <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
    </button>
  )
}

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom-end',
    open: isOpen,
    onOpenChange: setOpen,
  })

  const dismiss = useDismiss(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
  ])

  const overlayOffset = refs.reference.current?.getBoundingClientRect().height

  return (
    <div className="header max-md:sticky top-0 z-10">
      <div
        ref={refs.setReference}
        className="content bg-primary text-white py-4 px-6 flex justify-between md:card md:h-full lg:h-[137px]"
        {...getReferenceProps()}
      >
        <div className="md:mt-auto">
          <span className="text-[15px] md:text-xl font-bold tracking-[-0.25px]">Frontend Mentor</span>
          <h1 className="opacity-75 text-[13px] md:text-[15px] font-medium">Feedback Board</h1>
        </div>
        <Toggle open={isOpen} onToggle={() => setOpen(!isOpen)} />
      </div>
      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager context={context}>
            <FloatingOverlay
              className="bg-black/50"
              style={{ top: overlayOffset }}
              lockScroll
            />
            <div
              ref={refs.setFloating}
              className="side bg-base-100 w-[271px] h-screen p-6 space-y-6"
              style={floatingStyles}
              {...getFloatingProps()}
            >
              <Filter />
              <RoadmapSummary />
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </div>
  )
}

Toggle.propTypes = {
  open: PropTypes.bool,
  onToggle: PropTypes.func,
}

export default Header
