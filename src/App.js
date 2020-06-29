import React, { Component } from 'react'
import AddColorForm from './AddColorForm'
import ColorList from './ColorList'
import { v4 } from 'uuid'
import './App.css'

class App extends Component {
   constructor(props) {
      super(props)
      this.state= {
         colors: [
            {
               "id": "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
               "title": "바닷빛 파랑",
               "color": "#0070ff",
               "rating": 3,
               "timestamp": "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
             },
             {
               "id": "8658c1d0-9eda-4a90-95e1-8001e8eb6038",
               "title": "토마토",
               "color": "#d10012",
               "rating": 2,
               "timestamp": "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
             },
             {
               "id": "58d9caee-6ea6-4d7b-9984-65b145031979",
               "title": "잔디",
               "color": "#67bf4f",
               "rating": 1,
               "timestamp": "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
             },
             {
               "id": "a5685c39-6bdc-4727-9188-6c9a00bf7f95",
               "title": "파티 핑크",
               "color": "#ff00f7",
               "rating": 5,
               "timestamp": "Wed Mar 9 2016 03:26:00 GMT-0800 (PST)"
             }
         ]
      }
      this.addColor = this.addColor.bind(this) //addColor 메소드를 this(Component-상태를 다룸)와 바인딩 해줌으로써
      this.rateColor = this.rateColor.bind(this)
      this.removeColor = this.removeColor.bind(this)
   }

   addColor(title, color) { //addColor 메소드에서 this.state와 this.setState()가 사용 가능해짐
      const colors = [
         ...this.state.colors, //새로운 배열로 갱신
         {
            id: v4(), title, color, rating:0
         }
      ]
      this.setState({colors})
   }

   rateColor(id, rating) {
      const colors = this.state.colors.map(color => 
         (color.id !== id )?
            color : {...color, rating}
      )
      this.setState({colors})
   }

   removeColor(id) {
      const colors = this.state.colors.filter(color => //모든원소에 filter를 한 번씩 호출하여 술어가 반환하는 값이 true면 해당 원소를 배열에 넣음
         color.id !== id //즉 color.id와 인자로 받은 id가 같지 않을 경우만을 필터링하여 배열에 넣음(즉 같으면 삭제한다는 뜻)
      )
      this.setState({colors})
   }
   
   render() {
      const { addColor, rateColor, removeColor } = this
      const { colors } = this.state
      return(
         <div className="app">
            <AddColorForm onNewColor={addColor} />
            <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
         </div>
      )
   }
}

export default App