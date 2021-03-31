import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DisplayCourseDetails from './DisplayCourseDetails';

describe('<DisplayCourseDetails />', () => {
  test('it should mount', () => {
    render(<DisplayCourseDetails />);
    
    const displayCourseDetails = screen.getByTestId('DisplayCourseDetails');

    expect(displayCourseDetails).toBeInTheDocument();
  });
});