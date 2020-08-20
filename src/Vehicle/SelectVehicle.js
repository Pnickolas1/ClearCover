import React, { useReducer } from 'react'
import SelectYear from './SelectYear'
import SelectMakeByYear from './SelectMakeByYear'
import SelectModelByMakeYear from './SelectModelByMakeYear'
import SelectBodyByYearMakeModel from './SelectBodyByYearMakeModel'
import VehicleSearch from './VehicleSearch'

const year = 'year'
const make = 'make'
const model = 'model'
const body = 'body'

export const intitialState = {
  year: '',
  make: '',
  model: '',
  body: '',
}

export const vehicleReducer = (state, action) => {
  switch (action.type) {
    case year:
      return {
        ...intitialState,
        [action.type]: action.value,
      }
    case make:
      return {
        ...state,
        model: intitialState.model,
        body: intitialState.body,
        [action.type]: action.value,
      }
    case model:
      return {
        ...state,
        [action.type]: action.value,
        body: intitialState.body,
      }
    case body:
      return {
        ...state,
        [action.type]: action.value,
      }
    default:
      return state
  }
}

function SelectVehicle() {
  const [vehicle, dispatch] = useReducer(vehicleReducer, intitialState)

  function onChange({ target }) {
    const { name, value } = target
    dispatch({ type: name, value: value })
  }

  return (
    <div className="selectVehicleWrapper">
      <div className="vehicleInputs">
        <div className="selectInput">
          <SelectYear onChange={onChange}/>
          <SelectMakeByYear onChange={onChange} year={vehicle.year} make={vehicle.make}/>
          <SelectModelByMakeYear onChange={onChange} year={vehicle.year} make={vehicle.make} model={vehicle.model}/>
          <SelectBodyByYearMakeModel onChange={onChange} year={vehicle.year} make={vehicle.make} model={vehicle.model} body={vehicle.body}/>
        </div>
      </div>
      <div className="vehicleSearchWrapper">
        <VehicleSearch year={vehicle.year} model={vehicle.model} make={vehicle.make} body={vehicle.body}/>
      </div>
    </div>
  )
}

export default SelectVehicle
