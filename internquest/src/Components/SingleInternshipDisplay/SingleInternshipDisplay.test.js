import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SingleInternshipDisplay from './SingleInternshipDisplay';

describe('<SingleInternshipDisplay />', () => {
  test('it should mount', () => {
    render(<SingleInternshipDisplay />);
    
    const singleInternshipDisplay = screen.getByTestId('SingleInternshipDisplay');

    expect(singleInternshipDisplay).toBeInTheDocument();
  });
});