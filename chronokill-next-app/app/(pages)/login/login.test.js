import { render, screen } from '@testing-library/react';
import { Login } from './page';
import '@testing-library/jest-dom'

describe('Login Component', () => {
  it('Renders Header and Links', () => {
    // Render the Login component
    render(<Login />);
    
    // Check if header/links are rendered
    const loginHeader = screen.getByText('Login');
    const homeLink = screen.getByText('Home');
    const mainMenuLink = screen.getByText('Main');
    
    expect(loginHeader).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(mainMenuLink).toBeInTheDocument();
  });
});
