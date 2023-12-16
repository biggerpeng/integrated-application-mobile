import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <div style={{ height: '100vh', backgroundColor: '#ccc' }}>
      test1
      <Link to="/test2">to test2</Link>
    </div>
  )
}
