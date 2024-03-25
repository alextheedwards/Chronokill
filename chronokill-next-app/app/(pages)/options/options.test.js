import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Options from './Options';

describe('Options component', () => {
  test('renders Options component', () => {
    render(<Options />);

   
    const optionsHeading = screen.getByText(/OPTIONS/i);
    expect(optionsHeading).toBeInTheDocument();

    
    const mainMenuButton = screen.getByText(/Main Menu/i);
    expect(mainMenuButton).toBeInTheDocument();

    
    const volumeInput = screen.getByLabelText(/Volume/i);
    expect(volumeInput).toBeInTheDocument();
    expect(volumeInput).toHaveAttribute('type', 'range');
  });

  test('Mute toggle state on change', () => {
    render(<Options />);
 
    const muteCheckbox = screen.getByLabelText(/Mute/i);
    expect(muteCheckbox).toBeInTheDocument();
    fireEvent.click(muteCheckbox);
    expect(muteCheckbox).toBeChecked();

  });
});
