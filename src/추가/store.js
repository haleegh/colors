import { createStore, combineReducers, applyMiddleware } from 'redux'
import { colors, sort } from './reducer'
import stateData from './initialState'

const logger = store => next => action => {
   let result
   console.groupCollapsed("디스패칭", action.type) //새 콘솔그룹 열기
   console.log('이전 상태', store.getState())
   console.log('액션', action)
   result = next(action)
   console.log('다음 상태', store.getState())
   console.groupEnd()
}

const saver = store => next => action => {
   let result = next(action)
   localStorage['redux-store'] = JSON.stringify(store.getState())
   //JSON 객체(store.getState())를 string객체로 변환(stringify)한 것을 'redux-store'키인 localStorage에 담음
   return result
}

const storeFactory = (initialState=stateData) =>
   applyMiddleware(logger, saver)(createStore)(
      combineReducers({colors, sort}),
      (localStorage['redux-store'])?
         JSON.parse(localStorage['redux-store']):initialState
   )

export default storeFactory

//스토어는 리덕스의 상태 데이터를 저장, 관리
//상태 데이터를 변경하는 유일한 방법: 스토어를 통해 액션을 디스패치

