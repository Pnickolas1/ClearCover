import React, { useState } from 'react'
import Dropdown from '../Shared/assets/Dropdown/Dropdown'

const defaultState = ''

function SelectYear() {
  const [selectedYear, setYear] = useState(defaultState)

  return (
    <div className="selectInput">
      <Dropdown label="Year" name="year" selectedValue={selectedYear} />
    </div>
  )
}

export default SelectYear
