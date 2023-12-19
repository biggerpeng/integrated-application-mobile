import React, { Suspense } from 'react'
import { useOutlet, useLocation, useMatches } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import globalState from '@/stores/globalState'
import config from '@/config'
import './index.less'
import '@/animation/defaultPageToggle.less'

export default function PageToggleAnimationLayout() {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const matches = useMatches()
  const currentMatch = matches.find(item => item.pathname === location.pathname)
  const currentNodeRef = currentMatch.handle?.nodeRef
  const animationType = currentMatch.handle?.animationType || 'default'
  const animationClass = `${animationType}-${globalState.isHistoryForward ? 'forward' : 'back'}`

  return (
    <TransitionGroup
      className="PageToggleAnimationLayout-TransitionGroup"
      childFactory={child =>
        React.cloneElement(child, {
          classNames: animationClass
        })
      }
    >
      <CSSTransition key={location.pathname} nodeRef={currentNodeRef} timeout={config.pageToggleTime}>
        {state => (
          <div ref={currentNodeRef} className="routeWrapper">
            <Suspense fallback={<div>loading</div>}>{currentOutlet}</Suspense>
          </div>
        )}
      </CSSTransition>
    </TransitionGroup>
  )
}
