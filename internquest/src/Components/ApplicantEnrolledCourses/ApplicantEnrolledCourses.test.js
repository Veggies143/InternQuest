import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApplicantEnrolledCourses from './ApplicantEnrolledCourses';

describe('<ApplicantEnrolledCourses />', () => {
  test('it should mount', () => {
    render(<ApplicantEnrolledCourses />);
    
    const applicantEnrolledCourses = screen.getByTestId('ApplicantEnrolledCourses');

    expect(applicantEnrolledCourses).toBeInTheDocument();
  });
});