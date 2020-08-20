import React from 'react'
import { render } from '@testing-library/react'
import App from './Vehicle/App'

describe('App renders with header', () => {
  test('renders clearcover tagline text', () => {
    const { getByText } = render(<App />);
    const clearcoverTagline = getByText(/Better coverage for less money/i);
    expect(clearcoverTagline).toBeInTheDocument();
  })
})

describe('Vehicle input labels render', () => {
  test('All select input labels render', () => {
    const { getByText } = render(<App />);
    expect(getByText('Year')).toBeInTheDocument()
    expect(getByText('Make')).toBeInTheDocument()
    expect(getByText('Model')).toBeInTheDocument()
    expect(getByText('Body')).toBeInTheDocument()
  });
});

