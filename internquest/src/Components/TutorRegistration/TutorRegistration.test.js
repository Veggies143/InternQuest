import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TutorRegistration from './TutorRegistration';

describe('<TutorRegistration />', () => {
  test('it should mount', () => {
    render(<TutorRegistration />);
    
    const tutorRegistration = screen.getByTestId('TutorRegistration');

    expect(tutorRegistration).toBeInTheDocument();
  });
});