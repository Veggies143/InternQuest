import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TutorProfile from './TutorProfile';

describe('<TutorProfile />', () => {
  test('it should mount', () => {
    render(<TutorProfile />);
    
    const tutorProfile = screen.getByTestId('TutorProfile');

    expect(tutorProfile).toBeInTheDocument();
  });
});