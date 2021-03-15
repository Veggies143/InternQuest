import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApplicationForm from './ApplicationForm';

describe('<ApplicationForm />', () => {
  test('it should mount', () => {
    render(<ApplicationForm />);
    
    const applicationForm = screen.getByTestId('ApplicationForm');

    expect(applicationForm).toBeInTheDocument();
  });
});