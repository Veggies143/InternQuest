import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployerProfile from './EmployerProfile';

describe('<EmployerProfile />', () => {
  test('it should mount', () => {
    render(<EmployerProfile />);
    
    const employerProfile = screen.getByTestId('EmployerProfile');

    expect(employerProfile).toBeInTheDocument();
  });
});