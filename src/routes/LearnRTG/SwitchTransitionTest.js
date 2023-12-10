import React, { useRef, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './SwitchTransitionTest.less'

export default function SwitchTransitionTest() {
  const [state, setState] = useState(false)
  const helloRef = useRef(null)
  const goodbyeRef = useRef(null)
  const nodeRef = state ? goodbyeRef : helloRef
  return (
    <SwitchTransition mode="in-out">
      <CSSTransition
        key={state ? 'Goodbye, world!' : 'Hello, world!'}
        nodeRef={nodeRef}
        addEndListener={done => {
          nodeRef.current.addEventListener('transitionend', done, false)
        }}
        classNames="fade"
      >
        <div ref={nodeRef}>
          <button onClick={() => setState(state => !state)}>
            {state ? 'Goodbye, world!' : 'Hello, world!'}
          </button>
          {state ? <div style={{ color: 'red' }}>a</div> : <div style={{ color: 'blue' }}>b</div>}
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}
