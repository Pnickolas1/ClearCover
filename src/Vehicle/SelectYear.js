import React, { useState, useEffect } from 'react'
import Dropdown from '../Shared/assets/Dropdown/Dropdown'
import { getYears } from '../Services/vehicle'

function SelectYear({ onChange, year }) {
  const [options, setOptions] = useState([])

  useEffect(() => {
    async function fetchVehicleYears() {
      const years = await getYears()
      setOptions(years)
    }
    fetchVehicleYears()
  }, [])
  return (
    <Dropdown onChange={onChange} label="Year" name="year" options={options} selectedValue={year} />
  )
}

export default SelectYear
