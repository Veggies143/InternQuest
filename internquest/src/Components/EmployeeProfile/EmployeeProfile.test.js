import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployeeProfile from './EmployeeProfile';

describe('<EmployeeProfile />', () => {
  test('it should mount', () => {
    render(<EmployeeProfile />);
    
    const employeeProfile = screen.getByTestId('EmployeeProfile');

    expect(employeeProfile).toBeInTheDocument();
  });
});