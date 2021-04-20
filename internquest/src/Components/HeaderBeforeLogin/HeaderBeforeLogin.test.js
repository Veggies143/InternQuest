import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderBeforeLogin from './HeaderBeforeLogin';

describe('<HeaderBeforeLogin />', () => {
  test('it should mount', () => {
    render(<HeaderBeforeLogin />);
    
    const headerBeforeLogin = screen.getByTestId('HeaderBeforeLogin');

    expect(headerBeforeLogin).toBeInTheDocument();
  });
});