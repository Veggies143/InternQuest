import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderForApplicant from './HeaderForApplicant';

describe('<HeaderForApplicant />', () => {
  test('it should mount', () => {
    render(<HeaderForApplicant />);
    
    const headerForApplicant = screen.getByTestId('HeaderForApplicant');

    expect(headerForApplicant).toBeInTheDocument();
  });
});