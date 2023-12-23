import React from 'react'
import { Link } from 'react-router-dom'

export default function Component() {
  return (
    <div style={{ height: '100vh', backgroundColor: 'skyblue' }}>
      test3
      <Link to="../test4">to test4</Link>
    </div>
  )
}
