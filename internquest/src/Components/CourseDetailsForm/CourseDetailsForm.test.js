import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseDetailsForm from './CourseDetailsForm';

describe('<CourseDetailsForm />', () => {
  test('it should mount', () => {
    render(<CourseDetailsForm />);
    
    const courseDetailsForm = screen.getByTestId('CourseDetailsForm');

    expect(courseDetailsForm).toBeInTheDocument();
  });
});