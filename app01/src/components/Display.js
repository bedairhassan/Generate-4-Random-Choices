import React from 'react'

const Display = ({ list }) =>
    <ul>
        {list.map(item => <li>{item}</li>)}
    </ul>

export default Display
