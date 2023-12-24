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
const TestInternationalization = lazy(() => import('./routes/TestInternationalization'))

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
              animationType: 'default'
            }
          },
          {
            path: '/learnRTG',
            element: <LearnRTG />,
            handle: {
              animationType: 'default'
            }
          },
          {
            path: '/test1',
            element: <Test1 />,
            handle: {
              animationType: 'default'
            },
            children: [
              {
                path: 'test3',
                element: <Test3 />,
                handle: {
                  animationType: 'default'
                }
              },
              {
                path: 'test4',
                element: <Test4 />,
                handle: {
                  animationType: 'default'
                }
              }
            ]
          },
          {
            path: '/test2',
            element: <Test2 />,
            handle: {
              animationType: 'default'
            }
          },
          {
            path: '/testInternationalization',
            element: <TestInternationalization />,
            handle: {
              animationType: 'default'
            }
          }
        ]
      }
    ]
  }
]

// 自动创建nodeRef
function autoCreateRef(array) {
  array.forEach(item => {
    // 判断添加 handle 对象
    !item.handle && (item.handle = {})
    // 为每个路由添加nodeRef
    item.handle.nodeRef = createRef()
    // 递归创建
    item.children && autoCreateRef(item.children)
  })
}

autoCreateRef(routerConfig)
const router = createBrowserRouter(routerConfig)
export default router
