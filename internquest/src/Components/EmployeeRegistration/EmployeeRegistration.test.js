import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployeeRegistration from './EmployeeRegistration';

describe('<EmployeeRegistration />', () => {
  test('it should mount', () => {
    render(<EmployeeRegistration />);
    
    const employeeRegistration = screen.getByTestId('EmployeeRegistration');

    expect(employeeRegistration).toBeInTheDocument();
  });
});