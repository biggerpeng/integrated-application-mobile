import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function PageToggleAnimation() {
  return (
    <div>
      PageToggleAnimation
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}
