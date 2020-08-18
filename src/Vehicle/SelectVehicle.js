import React from 'react'
import SelectYear from './SelectYear'

function SelectVehicle() {
  return (
    <div className="selectVehicleWrapper">
      <div className="vehicleInputs">
        <SelectYear/>
        <SelectYear/>
        <SelectYear/>
      </div>

      <div className="vehicleSearchWrapper">
        test
      </div>
    </div>
  )
}

export default SelectVehicle
