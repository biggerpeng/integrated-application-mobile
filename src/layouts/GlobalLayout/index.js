import React from 'react'
import { useNavigationType, Outlet } from 'react-router-dom'
import globalState from '@/stores/globalState'

function GlobalLayout() {
  const navigationType = useNavigationType()

  // 判断页面跳转的方向
  const judgeHistoryDirection = () => {
    // 对于浏览器前进后退按钮，navigationType都是POP，需要通过history.state.idx才能准确判断
    // idx越大，越靠近历史记录栈顶部
    const currentIdx = window.history.state.idx // 当前历史记录idx
    const { historyIdxCache, updateIsHistoryForward, updateHistoryIdxCache } = globalState

    if (currentIdx !== historyIdxCache) {
      // idx不相等即不是同一条历史记录
      let isForward

      if (navigationType === 'PUSH' || navigationType === 'REPLACE') {
        // PUSH\REPLACE使用前进动画
        isForward = true
      } else if (navigationType === 'POP') {
        isForward = currentIdx >= historyIdxCache
      }

      updateIsHistoryForward(isForward)
      updateHistoryIdxCache(currentIdx)
    }
  }

  judgeHistoryDirection()

  return <Outlet />
}

export default GlobalLayout
