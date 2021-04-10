import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployeeResumeDetails from './EmployeeResumeDetails';

describe('<EmployeeResumeDetails />', () => {
  test('it should mount', () => {
    render(<EmployeeResumeDetails />);
    
    const employeeResumeDetails = screen.getByTestId('EmployeeResumeDetails');

    expect(employeeResumeDetails).toBeInTheDocument();
  });
});