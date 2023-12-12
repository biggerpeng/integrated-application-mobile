import React, { useState, createRef } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { v4 as uuid } from 'uuid'
import './TransitionGroupTest.less'

export default function TodoList() {
  const [items, setItems] = useState(() => [
    {
      id: uuid(),
      text: 'Buy eggs',
      nodeRef: createRef(null)
    },
    {
      id: uuid(),
      text: 'Pay bills',
      nodeRef: createRef(null)
    },
    {
      id: uuid(),
      text: 'Invite friends over',
      nodeRef: createRef(null)
    },
    {
      id: uuid(),
      text: 'Fix the TV',
      nodeRef: createRef(null)
    }
  ])
  return (
    <div>
      <TransitionGroup className="todo-list">
        {items.map(({ id, text, nodeRef }) => (
          <CSSTransition key={id} nodeRef={nodeRef} timeout={500} classNames="item">
            <div ref={nodeRef}>
              <button className="remove-btn" variant="danger" size="sm" onClick={() => setItems(items => items.filter(item => item.id !== id))}>
                &times;
              </button>
              {text}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <button
        onClick={() => {
          setItems(items => [
            ...items,
            {
              id: uuid(),
              text: Math.random(),
              nodeRef: createRef(null)
            }
          ])
        }}
      >
        Add Item
      </button>
    </div>
  )
}
