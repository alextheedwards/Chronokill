import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuitPage from './QuitPage';

describe('QuitPage component', () => {
  test('renders QuitPage component', () => {
    render(<QuitPage />);

    
    const quitHeading = screen.getByText(/QUIT/i);
    expect(quitHeading).toBeInTheDocument();

    
    const quitText = screen.getByText(/Are you sure you want to quit!/i);
    expect(quitText).toBeInTheDocument();

    
    const yesButton = screen.getByText(/Yes/i);
    expect(yesButton).toBeInTheDocument();
    expect(yesButton).toHaveAttribute('href', 'https://www.google.co.uk/');

    
    const noButton = screen.getByText(/No/i);
    expect(noButton).toBeInTheDocument();
    expect(noButton).toHaveAttribute('href', '../mainmenu');
  });

  test('clicking "Yes" button redirects to the correct URL', () => {
    render(<QuitPage />);

    
    const yesButton = screen.getByText(/Yes/i);
    fireEvent.click(yesButton);

   
    expect(window.location.href).toBe('https://www.google.co.uk/');
  });

  test('clicking "No" button redirects to the correct URL', () => {
    render(<QuitPage />);

    
    const noButton = screen.getByText(/No/i);
    fireEvent.click(noButton);


    expect(window.location.href).toBe('../ingame');
  });

  
});
