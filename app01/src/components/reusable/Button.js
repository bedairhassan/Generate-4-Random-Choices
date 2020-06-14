import React from 'react'

const Button = ({onClick,name})=>
<button onClick={onClick}>{name || `Submit`}</button>

export default Button
