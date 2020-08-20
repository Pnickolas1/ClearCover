import React from 'react'
import { render, fireEvent, getByTestId, screen } from '@testing-library/react'
import App from './Vehicle/App'


describe('Vehicle inputs render', () => {
  test('SelectYear renders', () => {
    render(<App />);
    expect(screen.getByText('Year')).toBeInTheDocument()
  });

  test('SelectMakeByYear renders', () => {
    render(<App />);
    expect(screen.getByText('Make')).toBeInTheDocument()
  });

  test('SelectModelByMakeYear renders', () => {
    render(<App />);
    expect(screen.getByText('Model')).toBeInTheDocument()
  });

  test('SelectBodyByYearMakeModel renders', () => {
    render(<App />);
    expect(screen.getByText('Body')).toBeInTheDocument()
  });
});