import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <div>
        <button className='px-6 py-2 border-2  transition-all con-1 '>
          {props.title}
        </button>
    </div>
  )
}

export default Button;