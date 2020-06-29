import PropTypes from 'prop-types'
import AddColorForm from './ui/AddColorForm'
import SortMenu from './ui/SortMenu'
import ColorList from './ui/ColorList'
import { addColor, sortColors, rateColor, removeColor } from '../actions'
import { sortFunction } from '../lib/array-helpers'
import Color from './Color'

export const NewColor = (props, { store }) => 
   <AddColorForm onNewColor={(title, color) =>
      store.dispatch(addColor(title, color))} />

NewColor.contextTypes = {
   store: PropTypes.object
}

export const Menu = (props, {store}) =>
   <SortMenu sort={store.getState().sort}
      onSelect={sortBy => store.dispatch(sortColor(sortBy))}
   />

Menu.contextTypes = {
   store: PropTypes.object
}

export const Colors = (props, {store}) => {
   const { colors, sort } = store.getState()
   const sortedColors = [...colors].sort(sortFunction(sort))
   return (
      <ColorList colors={sortedColors}
         onRemove={id => store.dispatch(removeColor(id))}
         onRate={(id, rating) => store.dispatch(rateColor(id, rating))} 
      />
   )
}

Color.contextTypes = {
   store: PropTypes.object
}

//NewColor는 컨테이너 컴포넌트로 UI를 자체 렌더링(표현 컴포넌트)하지 않으며, AddColorForm 컴포넌트를 리덕스 스토어와 연결함
//모든 리덕스 기능은 이 파일에 연결됌. store.dispatch, store.getState를 호출하는 유일한 파일