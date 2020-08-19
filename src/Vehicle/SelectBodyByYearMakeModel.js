import React, { useEffect, useState } from 'react'
import Dropdown from '../Shared/assets/Dropdown/Dropdown'
import { getBodyStylesByModelYearMake } from '../Services/vehicle'

function SelectBodyByYearMakeModel({ onChange, year, make, model, body }) {
  const [options, setOptions] = useState([])

  useEffect(() => {
    async function fetchBodyStyleByYearMakeModel() {
      const makesByYear = await getBodyStylesByModelYearMake(year, make, model)
      setOptions(makesByYear)
    }
    if (year, make, model) {
      fetchBodyStyleByYearMakeModel()
    }
  }, [year, make, model])

  return (
    <Dropdown onChange={onChange} label="Body Type" name="body" options={options} selectedValue={body}/>
  )
}

export default SelectBodyByYearMakeModel
