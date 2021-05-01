import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutInternQuest from './AboutInternQuest';

describe('<AboutInternQuest />', () => {
  test('it should mount', () => {
    render(<AboutInternQuest />);
    
    const aboutInternQuest = screen.getByTestId('AboutInternQuest');

    expect(aboutInternQuest).toBeInTheDocument();
  });
});