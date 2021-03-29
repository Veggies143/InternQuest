import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployerRegistration from './EmployerRegistration';

describe('<EmployerRegistration />', () => {
  test('it should mount', () => {
    render(<EmployerRegistration />);
    
    const employerRegistration = screen.getByTestId('EmployerRegistration');

    expect(employerRegistration).toBeInTheDocument();
  });
});