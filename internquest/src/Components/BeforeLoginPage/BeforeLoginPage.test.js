import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BeforeLoginPage from './BeforeLoginPage';

describe('<BeforeLoginPage />', () => {
  test('it should mount', () => {
    render(<BeforeLoginPage />);
    
    const beforeLoginPage = screen.getByTestId('BeforeLoginPage');

    expect(beforeLoginPage).toBeInTheDocument();
  });
});