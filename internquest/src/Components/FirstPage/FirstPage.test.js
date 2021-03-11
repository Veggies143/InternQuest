import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FirstPage from './FirstPage';

describe('<FirstPage />', () => {
  test('it should mount', () => {
    render(<FirstPage />);
    
    const firstPage = screen.getByTestId('FirstPage');

    expect(firstPage).toBeInTheDocument();
  });
});