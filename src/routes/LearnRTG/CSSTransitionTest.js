import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import './CSSTransitionTest.less'

export default function CSSTransitionTest(props) {
  const nodeRef = useRef(null)
  return (
    <CSSTransition nodeRef={nodeRef} in={props.in} timeout={200} classNames="my-node" unmountOnExit>
      <div ref={nodeRef}>{"I'll receive my-node-* classes"}</div>
    </CSSTransition>
  )
}
