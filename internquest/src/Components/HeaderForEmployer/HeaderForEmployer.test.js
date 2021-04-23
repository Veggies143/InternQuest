import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderForEmployer from './HeaderForEmployer';

describe('<HeaderForEmployer />', () => {
  test('it should mount', () => {
    render(<HeaderForEmployer />);
    
    const headerForEmployer = screen.getByTestId('HeaderForEmployer');

    expect(headerForEmployer).toBeInTheDocument();
  });
});