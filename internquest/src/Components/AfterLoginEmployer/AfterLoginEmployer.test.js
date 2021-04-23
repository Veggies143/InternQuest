import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AfterLoginEmployer from './AfterLoginEmployer';

describe('<AfterLoginEmployer />', () => {
  test('it should mount', () => {
    render(<AfterLoginEmployer />);
    
    const afterLoginEmployer = screen.getByTestId('AfterLoginEmployer');

    expect(afterLoginEmployer).toBeInTheDocument();
  });
});