import React from 'react'

const Select = ({ data }) =>
    <select>
        {data.map(item => <option value={item}>{item}</option>)}
    </select>

export default Select
