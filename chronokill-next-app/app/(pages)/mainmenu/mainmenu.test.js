import { render, screen } from '@testing-library/react';
import Dashboard, { Login, MainMenu } from './page';
import '@testing-library/jest-dom'

describe('Main Menu Component', () => {
  it('Renders Header and Links', () => {
    // Render the MainMenu component
    render(<MainMenu />);
    
    // Check if header/links are rendered
    const mainMenuHeader = screen.getByText('Main Menu');
    const rootLink = screen.getByText('Root');
    const loginLink = screen.getByText('Login');
    const dashboardLink = screen.getByText('Dashboard');
    const nopageLink = screen.getByText('Page That Doesn\'t Exist');
    
    expect(mainMenuHeader).toBeInTheDocument();
    expect(rootLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    expect(dashboardLink).toBeInTheDocument();
    expect(dashboardLink).toBeInTheDocument();
  });
});