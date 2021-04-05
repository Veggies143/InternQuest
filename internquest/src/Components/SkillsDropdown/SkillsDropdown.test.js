import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SkillsDropdown from './SkillsDropdown';

describe('<SkillsDropdown />', () => {
  test('it should mount', () => {
    render(<SkillsDropdown />);
    
    const skillsDropdown = screen.getByTestId('SkillsDropdown');

    expect(skillsDropdown).toBeInTheDocument();
  });
});