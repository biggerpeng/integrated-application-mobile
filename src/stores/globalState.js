import { makeObservable, observable, action } from 'mobx'

class GlobalState {
  isHistoryForward = false // 页面跳转是否是前进
  historyIdxCache = 0 // 每条历史记录都包含history.state.idx，由react-router维护，可用于准确判断页面是前进还是后退

  constructor() {
    makeObservable(this, {
      isHistoryForward: observable,
      historyIdxCache: observable,
      updateIsHistoryForward: action,
      updateHistoryIdxCache: action
    })
  }

  updateIsHistoryForward = value => {
    this.isHistoryForward = value
  }

  updateHistoryIdxCache = value => {
    this.historyIdxCache = value
  }
}

const globalState = new GlobalState()
export default globalState
