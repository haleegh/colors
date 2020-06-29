import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import './Color.css'

class Color extends Component {
   //마운팅 생애주기-렌더링 되기 전 호출, setState호출해서 렌더링 직전의 state 변경 가능 
   componentWillMount() {
      this.style = { backgroundColor: "#aaa", color:"#fff"}
   }

   //갱신 생애주기-불필요한 갱신을 막을 수 있음, 문지기격
   shouldComponentUpdate(nextProps) {
      return this.props.rating !== nextProps.rating
      //true면 갱신, false면 그냥 넘어감
   }

   //갱신 생애주기-setState를 호출할 수 있는 유일한 갱신생애주기 메서드
   componentWillUpdate(nextProps) {
      const { title, rating, color } = this.props
      alert(`${title}: 평점 ${rating} -> ${nextProps.rating}`)
      this.style = {backgroundColor:null, color:null}
      this._title.style.color = color
   }

   //갱신 생애주기-매번 갱신이 일어난 후 render호출 다음에 호출됌
   componentDidUpdate(prevProps) {
      const { title, rating } = this.props
      const status = (rating> prevProps.rating)?'좋아짐':'나빠짐'
      console.log(`${title} 평점이 ${status}`)
   }

   render() {
      const { title, color, rating, onRate, onRemove } = this.props
      return (
         <section className="color" style={this.style}>
            <h1 ref={input => this._title = input}>{title}</h1>
            <button onClick={onRemove}>X</button>
            <div className="color" style={{ backgroundColor: color}}></div>
            <StarRating starsSelected={rating} onRate={onRate} />
         </section>
      )
   }
}

Color.propTypes = {
   title: PropTypes.string,
   color: PropTypes.string,
   rating: PropTypes.number,
   onRate: PropTypes.func,
   onRemove: PropTypes.func
}

//마운팅생애주기-디폴트 프로퍼티 설정
Color.defaultProps = {
   title: undefined,
   rating: 0,
   color: "#000000",
   onRate: f=>f //자신이 받은 첫번째 함수(인자) 다시 반환
}

export default Color