import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AfterLoginTutor from './AfterLoginTutor';

describe('<AfterLoginTutor />', () => {
  test('it should mount', () => {
    render(<AfterLoginTutor />);
    
    const afterLoginTutor = screen.getByTestId('AfterLoginTutor');

    expect(afterLoginTutor).toBeInTheDocument();
  });
});