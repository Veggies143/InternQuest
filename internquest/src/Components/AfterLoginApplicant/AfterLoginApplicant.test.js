import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AfterLoginApplicant from './AfterLoginApplicant';

describe('<AfterLoginApplicant />', () => {
  test('it should mount', () => {
    render(<AfterLoginApplicant />);
    
    const afterLoginApplicant = screen.getByTestId('AfterLoginApplicant');

    expect(afterLoginApplicant).toBeInTheDocument();
  });
});