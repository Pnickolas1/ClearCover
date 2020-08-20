import { vehicleReducer, initialState } from './Vehicle/SelectVehicle'

it('Vehicle Reducer - update year', () => {
  const updateAction = {type: 'year', value: 2015 };
  const updatedState = vehicleReducer(initialState, updateAction);
  expect(updatedState.year).toEqual(2015);
  expect(updatedState.make).toEqual('');
  expect(updatedState.model).toEqual('');
  expect(updatedState.body).toEqual('');
});


it('Vehicle Reducer - update year and make', () => {
  const updateYear = {type: 'year', value: 2015 };
  const state = vehicleReducer(initialState, updateYear);
  const updateMake = {type: 'make', value: 'Aston Martin' };
  const stateWithYearAndMake = vehicleReducer(state, updateMake);
  expect(stateWithYearAndMake.year).toEqual(2015);
  expect(stateWithYearAndMake.make).toEqual('Aston Martin');
  expect(stateWithYearAndMake.model).toEqual('');
  expect(stateWithYearAndMake.body).toEqual('');
});

it('Vehicle Reducer - update year, make & model', () => {
  const updateYear = {type: 'year', value: 2015 };
  const state = vehicleReducer(initialState, updateYear);
  const updateMake = {type: 'make', value: 'Aston Martin' };
  const stateWithYearAndMake = vehicleReducer(state, updateMake);
  const updateModel = {type: 'model', value: 'V8 Vantage' };
  const stateWithYearAndMakeAndModel = vehicleReducer(stateWithYearAndMake, updateModel);
  expect(stateWithYearAndMakeAndModel.year).toEqual(2015);
  expect(stateWithYearAndMakeAndModel.make).toEqual('Aston Martin');
  expect(stateWithYearAndMakeAndModel.model).toEqual('V8 Vantage');
  expect(stateWithYearAndMakeAndModel.body).toEqual('');
});


it('Vehicle Reducer - update year, make & model, body', () => {
  const updateYear = {type: 'year', value: 2015 };
  const state = vehicleReducer(initialState, updateYear);
  const updateMake = {type: 'make', value: 'Aston Martin' };
  const stateWithYearAndMake = vehicleReducer(state, updateMake);
  const updateModel = {type: 'model', value: 'V8 Vantage' };
  const stateWithYearAndMakeAndModel = vehicleReducer(stateWithYearAndMake, updateModel);
  const updateBody = {type: 'body', value: 'CONV 2D' }
  const stateWithYearAndMakeAndModelAndBody = vehicleReducer(stateWithYearAndMakeAndModel, updateBody);
  expect(stateWithYearAndMakeAndModelAndBody.year).toEqual(2015);
  expect(stateWithYearAndMakeAndModelAndBody.make).toEqual('Aston Martin');
  expect(stateWithYearAndMakeAndModelAndBody.model).toEqual('V8 Vantage');
  expect(stateWithYearAndMakeAndModelAndBody.body).toEqual('CONV 2D');
});

it('Vehicle Reducer - update year, make & model, body', () => {
  const updateYear = {type: 'year', value: 2015 };
  const state = vehicleReducer(initialState, updateYear);
  const updateMake = {type: 'make', value: 'Aston Martin' };
  const stateWithYearAndMake = vehicleReducer(state, updateMake);
  const updateModel = {type: 'model', value: 'V8 Vantage' };
  const stateWithYearAndMakeAndModel = vehicleReducer(stateWithYearAndMake, updateModel);
  const updateYearAgain = {type: 'year', value: 2020 }
  const updateFinal = vehicleReducer(stateWithYearAndMakeAndModel, updateYearAgain);
  expect(updateFinal.year).toEqual(2020);
  expect(updateFinal.make).toEqual('');
  expect(updateFinal.model).toEqual('');
  expect(updateFinal.body).toEqual('');
});