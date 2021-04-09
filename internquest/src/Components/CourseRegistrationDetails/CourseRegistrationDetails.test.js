import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseRegistrationDetails from './CourseRegistrationDetails';

describe('<CourseRegistrationDetails />', () => {
  test('it should mount', () => {
    render(<CourseRegistrationDetails />);
    
    const courseRegistrationDetails = screen.getByTestId('CourseRegistrationDetails');

    expect(courseRegistrationDetails).toBeInTheDocument();
  });
});