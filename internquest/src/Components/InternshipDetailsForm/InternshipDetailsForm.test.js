import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InternshipDetailsForm from './InternshipDetailsForm';

describe('<InternshipDetailsForm />', () => {
  test('it should mount', () => {
    render(<InternshipDetailsForm />);
    
    const internshipDetailsForm = screen.getByTestId('InternshipDetailsForm');

    expect(internshipDetailsForm).toBeInTheDocument();
  });
});