import React, { useState, useEffect } from 'react'
import Dropdown from '../Shared/assets/Dropdown/Dropdown'
import { getModelsByMakeYear } from '../Services/vehicle'


function SelectModelByMakeYear({ onChange, year, make, model }) {
  const [options, setOptions] = useState([])

  useEffect(() => {
    async function fetchModelMakeByYear(year, make) {
      const models = await getModelsByMakeYear(year, make)
      setOptions(models)
    }
    if (year && make) {
      fetchModelMakeByYear(year, make)
    }
  }, [year, make])
  return (
    <Dropdown onChange={onChange} label="Model" name="model" options={options} selectedValue={model}/>
  )
}

export default SelectModelByMakeYear
