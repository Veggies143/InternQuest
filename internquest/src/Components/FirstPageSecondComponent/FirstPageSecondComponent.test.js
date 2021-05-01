import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FirstPageSecondComponent from './FirstPageSecondComponent';

describe('<FirstPageSecondComponent />', () => {
  test('it should mount', () => {
    render(<FirstPageSecondComponent />);
    
    const firstPageSecondComponent = screen.getByTestId('FirstPageSecondComponent');

    expect(firstPageSecondComponent).toBeInTheDocument();
  });
});