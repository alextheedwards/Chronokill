// import React from 'react';
import { render, screen } from '@testing-library/react';
import Ingame from './page';
import '@testing-library/jest-dom'

describe('Dashboard Component', () => {
  it('renders TopPanel and TextEngine components', () => {
    // Render the Ingame page
    render(<Ingame />);
    
    // Check if TopPanel is rendered
    const homeLink = screen.getByText('Home');
    const loginLink = screen.getByText('Login');

    expect(homeLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();

    // Check if TextEngine is rendered
    
    const leftPanel = screen.getByText('Left Panel');
    const rightPanel = screen.getByText('Right Panel');

    expect(leftPanel).toBeInTheDocument();
    expect(rightPanel).toBeInTheDocument();
  });
});
