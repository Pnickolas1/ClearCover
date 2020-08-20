import React from 'react'
import { render } from '@testing-library/react'
import Dropdown from './Shared/assets/Dropdown/Dropdown'



describe('Dropdown handle onChange events correctly', () => {
  test('SelectYear Year Implementation', () => {
    const onChange = jest.fn();
    const options = [{ label: '2016', value: 2016 }, {label: '2015', value: 2015 }]
    const { getByText } = render(
      <Dropdown selectedValue={2015} label="Year" name="year" options={options} onChange={onChange}/>
    );
    expect(getByText('2015')).toBeInTheDocument()
  })

  test('SelectMakeByYear Implementation', () => {
    const onChange = jest.fn();
    const options = [{ label: 'Acura', value: 'Acura' }, {label: 'BMW', value: 'BMW' }, {label: 'Audi', value: 'Audi' }]
    const { getByText } = render(
      <Dropdown selectedValue={'BMW'} label="Make" name="make" options={options} onChange={onChange}/>
    );
    expect(getByText('BMW')).toBeInTheDocument()
  })

  test('SelectModelByMakeYear Implementation', () => {
    const onChange = jest.fn();
    const options = [{label: "A8 L QUATTRO", value: "A8 L QUATTRO"}, {label: "A8 L QUATTRO SPORT", value: "A8 L QUATTRO SPORT"}]
    const { getByText } = render(
      <Dropdown selectedValue={'A8 L QUATTRO'} label="Model" name="model" options={options} onChange={onChange}/>
    );
    expect(getByText('A8 L QUATTRO')).toBeInTheDocument()
  })

  test('SelectModelByMakeYear Implementation', () => {
    const onChange = jest.fn();
    const options = [ {label: "4-Door Sedan", value: "SEDAN 4D"}, {label: "Convertible 2-Door", value: "CONV  2D"}]
    const { getByText } = render(
      <Dropdown selectedValue={'SEDAN 4D'} label="Body" name="body" options={options} onChange={onChange}/>
    );
    expect(getByText('4-Door Sedan')).toBeInTheDocument()
  })
});