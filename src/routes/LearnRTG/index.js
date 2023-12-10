import React, { useState } from 'react'
import TransitionTest from './TransitionTest'
import CSSTransitionTest from './CSSTransitionTest'
import SwitchTransitionTest from './SwitchTransitionTest'

export default function LearnRTG() {
  const [inProp, setInProp] = useState(false)

  return (
    <div>
      <div>
        <button onClick={setInProp.bind(null, !inProp)}>切换</button>
        <TransitionTest in={inProp} />
        <CSSTransitionTest in={inProp} />
      </div>
      <SwitchTransitionTest />
    </div>
  )
}
