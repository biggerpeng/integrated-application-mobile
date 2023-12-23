import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'normalize.css'
import router from './router'

document.body.innerHTML = '<div id="root"></div>'

const root = ReactDOM.createRoot(document.getElementById('root'))
// 尝试推送
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
