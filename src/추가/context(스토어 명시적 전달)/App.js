import { Component } from 'react'
import PropTypes from 'react-type'
import { Menu, NewColor, Colors } from './NewColor'
import { sortFunction } from '../lib/array-helpers'

class App extends Component {
   getChildContext() {
      return {
         store: this.props.store
      }
   }

   componentWillMount() {
      this.unsubscribe = store.subscribe(
         () => this.forceUpdate()
      )
   }

   componentWillUnmount() {
      this.unsubscribe()
   }

   render() {
      const { colors, sort } = store.getState()
      const sortedColors = [...colors].sort(sortFunction(sort))
      return (
         <div className="app">
            <Menu />
            <NewColor />
            <Colors />
         </div>
      )
   }
}

App.propTypes = {
   store: PropTypes.object.isRequired
}

App.childContextTypes = {
   store: PropTypes.object.isRequired
}

export default App
