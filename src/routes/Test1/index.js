import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function index() {
  return (
    <div style={{ height: '100vh', backgroundColor: '#ccc' }}>
      test1
      <Link to="/test2">to test2</Link>
      <Link to="/test1/test3">to test3</Link>
      <Outlet/>
    </div>
  )
}
