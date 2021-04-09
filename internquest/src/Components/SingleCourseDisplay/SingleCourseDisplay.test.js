import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SingleCourseDisplay from './SingleCourseDisplay';

describe('<SingleCourseDisplay />', () => {
  test('it should mount', () => {
    render(<SingleCourseDisplay />);
    
    const singleCourseDisplay = screen.getByTestId('SingleCourseDisplay');

    expect(singleCourseDisplay).toBeInTheDocument();
  });
});