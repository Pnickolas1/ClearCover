import React, { useState } from 'react'


function Dropdown({ label, name, selectedValue }) {
  const [currentValue, setValue] = useState(selectedValue)
  return (
    <div className="clearcover-dropdown-wrapper">
      <label className="clearcover-dropdown-label" htmlFor={name}>{label}</label> 
      <select name={name} value={currentValue} className="select-css" id="clear-cover-dropdown">
        <option value="">Select</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
    </div>
  )
}

export default Dropdown

