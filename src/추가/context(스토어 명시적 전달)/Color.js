import { Component } from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import FaTrash from 'react-icons/lib/fa/trash-o'
import { rateColor, removeColor } from './actions'
import './Color.css'

class Color extends Component {
   render() {
      const { id, title, color, rating, timestamp } = this.props
      const { store } = this.context
      return (
         <section className="color" style={this.style}>
            <h1 ref="title">{title}</h1>
            <button onClick={() => store.dispatch(removeColor(id))}>
               <FaTrash />
            </button>
            <div className="color" style={{ backgroundColor: color}}></div>
            <StarRating starsSelected={rating => store.dispatch(rateColor(id, rating))} />
         </section>
      )
   }
}

Color.contextTypes = {
   store:PropTypes.object
}

Color.propTypes = {
   id: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   color: PropTypes.string.isRequired,
   rating: PropTypes.number
}

Color.defaultProps = {
   rating: 0
}

export default Color