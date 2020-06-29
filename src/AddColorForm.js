import React from 'react'
import propTypes from 'prop-types'
import './AddColorForm.css'

const AddColorForm = ({onNewColor= f=>f}) => {
   let _title, _color
   const submit = e => {
      e.preventDefault()
      onNewColor(_title.value, _color.value)
      _title.value=''
      _color.value='#000000'
      _title.focus()
   }

   return(
      <form onSubmit={submit}>
         <input ref={input => _title = input} type="text" placeholder="색 이름..." required />
         <input ref={input => _color = input} type="color" required />
         <button>추가</button>
      </form>
   )
}

AddColorForm.propTypes = {
   onNewColor: propTypes.func
}

AddColorForm.defaultProps = {
   onNewColor: f=>f //자신이 받은 첫번째 인자 다시 반환
}

export default AddColorForm