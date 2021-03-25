import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DispalyApplicationDetails from './DispalyApplicationDetails';

describe('<DispalyApplicationDetails />', () => {
  test('it should mount', () => {
    render(<DispalyApplicationDetails />);
    
    const dispalyApplicationDetails = screen.getByTestId('DispalyApplicationDetails');

    expect(dispalyApplicationDetails).toBeInTheDocument();
  });
});