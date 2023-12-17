import React, { Suspense } from 'react'
import { useOutlet, useLocation, useNavigationType, useMatches } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './index.less'

export default function PageToggleAnimation() {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const navigationType = useNavigationType()
  const matches = useMatches()

  const currentMatch = matches.find(item => item.pathname === location.pathname)
  const currentNodeRef = currentMatch.handle?.nodeRef
  const animationClass = navigationType === 'POP' ? 'back' : 'forward'

  return (
    <TransitionGroup
      className="PageToggleAnimation-TransitionGroup"
      childFactory={child =>
        React.cloneElement(child, {
          classNames: animationClass
        })
      }
    >
      <CSSTransition key={location.pathname} nodeRef={currentNodeRef} timeout={500}>
        {state => (
          <div ref={currentNodeRef} className="routeWrapper">
            <Suspense fallback={<div>loading</div>}>{currentOutlet}</Suspense>
          </div>
        )}
      </CSSTransition>
    </TransitionGroup>
  )
}
