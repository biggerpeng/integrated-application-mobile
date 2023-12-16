import React from 'react'
import { Link } from 'react-router-dom'

export default function Component() {
  return (
    <div style={{ height: '100vh', backgroundColor: 'skyblue' }}>
      test2
      <Link to="/test1">to test1</Link>
    </div>
  )
}
