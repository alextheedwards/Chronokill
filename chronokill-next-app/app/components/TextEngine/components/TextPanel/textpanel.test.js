import { render, waitFor } from '@testing-library/react';
import {TextPanel} from './TextPanel';
import '@testing-library/jest-dom'

describe('Dashboard Component', () => {
  it('renders TextPanel components', () => {
    const {container} = render(<TextPanel />);
    
    const displayedTextDiv = container.firstChild;
    console.log(container);

    expect(displayedTextDiv).toBeInTheDocument();
    expect(displayedTextDiv.textContent).toBe("");
  });

  it('Update Text Display', async () => {
    const {container} = render(<TextPanel displayText='a'/>);

    const displayedTextDiv = container.firstChild;
    // Wait for the state to be updated asynchronously
    await waitFor(() => {
      expect(displayedTextDiv).toBeInTheDocument();
      expect(displayedTextDiv.textContent).toBe('a');
    });
  });
});
