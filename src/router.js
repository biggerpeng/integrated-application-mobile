import React, { createRef, lazy } from 'react'
import PageToggleAnimation from './layouts/PageToggleAnimation'
import { createBrowserRouter } from 'react-router-dom'

const Home = lazy(() => import('./routes/Home'))
const LearnRTG = lazy(() => import('./routes/LearnRTG'))
const Test1 = lazy(() => import('./routes/Test1'))
const Test2 = lazy(() => import('./routes/Test2'))

const routerConfig = [
  {
    element: <PageToggleAnimation />,
    children: [
      {
        path: '/',
        element: <Home />,
        handle: {
          nodeRef: createRef()
        }
      },
      {
        path: '/learnRTG',
        element: <LearnRTG />,
        handle: {
          nodeRef: createRef()
        }
      },
      {
        path: '/test1',
        element: <Test1 />,
        handle: {
          nodeRef: createRef()
        }
      },
      {
        path: '/test2',
        element: <Test2 />,
        handle: {
          nodeRef: createRef()
        }
      }
    ]
  }
]

const router = createBrowserRouter(routerConfig)
export default router
