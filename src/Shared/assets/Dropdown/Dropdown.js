import React from 'react'

function Dropdown({ label, name, selectedValue, options, onChange }) {
  return (
    <div className="dropdown">
      <label className="clearcover-dropdown-label" htmlFor={name}>{label}</label> 
      <select onChange={e => onChange(e)} name={name} value={selectedValue} className="select-css" id="clearcover-dropdown">
        <option value="">Select</option>
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown

