import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployerApplicantDetails from './EmployerApplicantDetails';

describe('<EmployerApplicantDetails />', () => {
  test('it should mount', () => {
    render(<EmployerApplicantDetails />);
    
    const employerApplicantDetails = screen.getByTestId('EmployerApplicantDetails');

    expect(employerApplicantDetails).toBeInTheDocument();
  });
});