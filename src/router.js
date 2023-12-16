import React, { lazy } from 'react'
import PageToggleAnimation from './layouts/PageToggleAnimation'

const Home = lazy(() => import('./routes/Home'))
const LearnRTG = lazy(() => import('./routes/LearnRTG'))
const Test1 = lazy(() => import('./routes/Test1'))
const Test2 = lazy(() => import('./routes/Test2'))
const Animate = lazy(() => import('./animate'))

const routerConfig = [
  {
    element: <PageToggleAnimation />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/learnRTG',
        element: <LearnRTG />
      },
      {
        path: '/test1',
        element: (
          <Animate key='test1'>
            <Test1 />
          </Animate>
        )
      },
      {
        path: '/test2',
        element: (
          <Animate key='test2'>
            <Test2 />
          </Animate>
        )
      }
    ]
  }
]

export default routerConfig
