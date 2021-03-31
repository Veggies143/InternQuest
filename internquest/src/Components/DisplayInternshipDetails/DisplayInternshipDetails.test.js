import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DisplayInternshipDetails from './DisplayInternshipDetails';

describe('<DisplayInternshipDetails />', () => {
  test('it should mount', () => {
    render(<DisplayInternshipDetails />);
    
    const displayInternshipDetails = screen.getByTestId('DisplayInternshipDetails');

    expect(displayInternshipDetails).toBeInTheDocument();
  });
});