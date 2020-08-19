import React, { useState, useReducer } from 'react'
import SelectYear from './SelectYear'
import SelectMakeByYear from './SelectMakeByYear'
import SelectModelByMakeYear from './SelectModelByMakeYear'
import SelectBodyByYearMakeModel from './SelectBodyByYearMakeModel'
import VehicleSearch from './VehicleSearch'
// function vehicleSearch = (state, )

function SelectVehicle() {
  const [year, setYear] = useState('')
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [body, setBody] = useState('')

  function onChange({ target }) {
    const { name, value } = target
    // debugger
    if (name === 'year') {
      setYear(value)
    } else if (name === 'make') {
      setMake(value)
    } else if (name === 'model') {
      setModel(value)
    } else if (name === 'body') {
      setBody(value)
    }
  }


  return (
    <div className="selectVehicleWrapper">
      <div className="vehicleInputs">
        <div className="selectInput">
          <SelectYear onChange={onChange}/>
          <SelectMakeByYear onChange={onChange} year={year} make={make}/>
          <SelectModelByMakeYear onChange={onChange} year={year} make={make} model={model}/>
          <SelectBodyByYearMakeModel onChange={onChange} year={year} make={make} model={model} body={body}/>
        </div>
      </div>
      <div className="vehicleSearchWrapper">
        <VehicleSearch year={year} model={model} make={make} body={body}/>
      </div>
    </div>
  )
}

export default SelectVehicle
