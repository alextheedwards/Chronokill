import { render, screen } from '@testing-library/react';
import { Register } from './page';
import '@testing-library/jest-dom'

describe('Register Component', () => {
  it('Renders Header and Links', () => {
    // Render the Login component
    render(<Register />);
    
    // Check if header/links are rendered
    const registerHeader = screen.getByText('Register');
    const homeLink = screen.getByText('Home');
    const mainMenuLink = screen.getByText('Main');
    
    expect(registerHeader).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(mainMenuLink).toBeInTheDocument();
  });
});
