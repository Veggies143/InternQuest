import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApplicantProfileForEmployer from './ApplicantProfileForEmployer';

describe('<ApplicantProfileForEmployer />', () => {
  test('it should mount', () => {
    render(<ApplicantProfileForEmployer />);
    
    const applicantProfileForEmployer = screen.getByTestId('ApplicantProfileForEmployer');

    expect(applicantProfileForEmployer).toBeInTheDocument();
  });
});