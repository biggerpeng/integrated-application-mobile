import React, { useRef, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './animate.less'

export default function Animate(props) {
  const nodeRef = useRef(null)
  const [instr, setinstr] = useState(false)
  useEffect(() => {
    setinstr(true)
    return () => {
      debugger
      setinstr(false)
    }
  }, [])
  return (
    <CSSTransition nodeRef={nodeRef} in={instr} timeout={3000} classNames="my-node" unmountOnExit>
      <div ref={nodeRef}>{props.children}</div>
    </CSSTransition>
  )
}
