import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResumeUploadPage from './ResumeUploadPage';

describe('<ResumeUploadPage />', () => {
  test('it should mount', () => {
    render(<ResumeUploadPage />);
    
    const resumeUploadPage = screen.getByTestId('ResumeUploadPage');

    expect(resumeUploadPage).toBeInTheDocument();
  });
});