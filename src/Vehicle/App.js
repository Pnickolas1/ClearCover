import React from 'react'
import './App.css'
import Clearcover from './Clearcover'
import SelectVehicle from './SelectVehicle'


import { getYears, getModelsByMakeYear, getBodyStylesByModelYearMake,
getMakesByYear, getVehicle, } from '../Services/vehicle'


function App() {
  return (
    <div className="App">
      <div className="clearcover">
      <Clearcover/>
      <SelectVehicle/>
      </div>
    </div>
  );
}

export default App;
