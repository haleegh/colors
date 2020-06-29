import { createStore, combineReducers } from 'redux'
import { colors, sort } from './reducer'

const initialState = {
   colors: [
      {
         id: "3315e1p5-3abl-0p523-30e4-8001l8yf3036",
         title: "과격한 빨강",
         color: "#FF0000",
         rating: 3,
         timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
      },
      {
         id: "3315e1p5-3abl-0p523-30e4-8001l8yf4457",
         title: "미친 녹색",
         color: "#00FF00",
         rating: 0,
         timestamp: "Fri Mar 11 2016 12:00:00 GMR-0800 (PST)"
      },
      {
         id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412",
         title: "큰 파랑",
         color: "#0000FF",
         rating: 5,
         timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
      }
    ],
    sort: "SORTED_BY_TITLE"
}

const store = createStore(
   combineReducers({colors, sort}), initialState
)

console.log(store.getState().color.length)
console.log(store.getState.sort)