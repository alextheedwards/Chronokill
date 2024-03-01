import { render, screen } from '@testing-library/react';
import { MainMenu } from './page';
import '@testing-library/jest-dom'

describe('Main Menu Component', () => {
  it('Renders Header and Links', () => {
    // Render the MainMenu component
    render(<MainMenu />);
    
    // Check if header/links are rendered
    const mainMenuHeader = screen.getByText('MAIN MENU'); 
    const ingameLink = screen.getByText('Start/Continue');
    const optionMenu = screen.getByTest('Options')
    const quitLink = screen.getByTest('Quit')

    expect(mainMenuHeader).toBeInTheDocument();
    expect(ingameLink).toBeInTheDocument();
    expect(optionMenu).toBeInTheDocument();
    expect(quitLink).toBeInTheDocument();

  });
});