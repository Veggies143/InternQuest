import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderForTutor from './HeaderForTutor';

describe('<HeaderForTutor />', () => {
  test('it should mount', () => {
    render(<HeaderForTutor />);
    
    const headerForTutor = screen.getByTestId('HeaderForTutor');

    expect(headerForTutor).toBeInTheDocument();
  });
});