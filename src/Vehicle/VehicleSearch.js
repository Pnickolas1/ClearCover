import React, { useEffect, useState } from 'react'
import { getVehicle } from '../Services/vehicle'
import checkmark from '../Shared/assets/checkmark.svg'


function VehicleFound({ vehicle }) {
  return (
    <div className="vehicleFoundWrapper">
      <img src={checkmark} className="checkmark" alt="checkmark" />
      <div className="vehicleFound">
        <div className="vehicleHeader">Vehicle Id Found</div>
        <div className="vehicleId">{vehicle.vehicle_services_id}</div>
      </div>
    </div>
  )
}

function VehicleNotFound({ vehicle }) {
  return (
    <div className="vehicleFoundWrapper">
      <div className="vehicleHeader">No vehicle found</div>
    </div>
  )
}

function VehicleSearch({ year, model, make, body }) {
  const [currentVehicle, setVehicle] = useState('')
  const [isFound, setIsFound] = useState(null)

  useEffect(() => {
    async function fetchVehicle(year, model, make, body) {
      setIsFound(null)
      try {
        const vehicle = await getVehicle(year, make, model, body)
        setVehicle(vehicle)
        setIsFound(true)
      } catch (e) {
        setVehicle({})
        setIsFound(false)
      }
    }
    if (year && make && model && body) {
      fetchVehicle(year, model, make, body)
    } else {
      setIsFound(null)
    }
  }, [year, model, make, body])
  return (
    <div>
      {isFound ? <VehicleFound vehicle={currentVehicle}/> : isFound === null ? null :  <VehicleNotFound vehicle={currentVehicle}/>}
    </div>
  )
}

export default VehicleSearch
