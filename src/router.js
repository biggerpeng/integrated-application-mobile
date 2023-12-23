import React, { createRef, lazy } from 'react'
import PageToggleAnimationLayout from './layouts/PageToggleAnimationLayout'
import GlobalLayout from './layouts/GlobalLayout'
import { createBrowserRouter } from 'react-router-dom'

const Home = lazy(() => import('./routes/Home'))
const LearnRTG = lazy(() => import('./routes/LearnRTG'))
const Test1 = lazy(() => import('./routes/Test1'))
const Test2 = lazy(() => import('./routes/Test2'))
const Test3 = lazy(() => import('./routes/Test3'))
const Test4 = lazy(() => import('./routes/Test4'))

const routerConfig = [
  {
    element: <GlobalLayout />,
    children: [
      {
        element: <PageToggleAnimationLayout />,
        children: [
          {
            path: '/',
            element: <Home />,
            handle: {
              nodeRef: createRef(),
              animationType: 'default'
            }
          },
          {
            path: '/learnRTG',
            element: <LearnRTG />,
            handle: {
              nodeRef: createRef(),
              animationType: 'default'
            }
          },
          {
            path: '/test1',
            element: <Test1 />,
            handle: {
              nodeRef: createRef(),
              animationType: 'default'
            },
            children: [
              {
                path: 'test3',
                element: <Test3 />,
                handle: {
                  nodeRef: createRef(),
                  animationType: 'default'
                }
              },
              {
                path: 'test4',
                element: <Test4 />,
                handle: {
                  nodeRef: createRef(),
                  animationType: 'default'
                }
              }
            ]
          },
          {
            path: '/test2',
            element: <Test2 />,
            handle: {
              nodeRef: createRef(),
              animationType: 'default'
            }
          }
        ]
      }
    ]
  }
]

const router = createBrowserRouter(routerConfig)
export default router
