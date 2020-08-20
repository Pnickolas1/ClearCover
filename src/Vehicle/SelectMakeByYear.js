import React, { useState, useEffect } from 'react'
import Dropdown from '../Shared/assets/Dropdown/Dropdown'
import { getMakesByYear } from '../Services/vehicle'

function SelectMakeByYear({ year, onChange, make }) {
  const [options, setMakesByYear] = useState([])

  useEffect(() => {
    async function fetchMakeByYear(year) {
      const makesByYear = await getMakesByYear(year)
      setMakesByYear(makesByYear)
    }
    if (year) {
      fetchMakeByYear(year)
    }
  }, [year])
  return (
    <Dropdown onChange={onChange} label="Make" name="make" options={options} selectedValue={make}/>
  )
}

export default SelectMakeByYear
