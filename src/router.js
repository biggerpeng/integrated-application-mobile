import React from 'react'
import Home from './routes/Home'
import LearnRTG from './routes/LearnRTG'

const routerConfig = [
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/learnRTG',
    element: <LearnRTG/>
  },
]

export default routerConfig
