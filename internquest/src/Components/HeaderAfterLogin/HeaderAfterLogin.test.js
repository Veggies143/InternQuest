import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderAfterLogin from './HeaderAfterLogin';

describe('<HeaderAfterLogin />', () => {
  test('it should mount', () => {
    render(<HeaderAfterLogin />);
    
    const headerAfterLogin = screen.getByTestId('HeaderAfterLogin');

    expect(headerAfterLogin).toBeInTheDocument();
  });
});