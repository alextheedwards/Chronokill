import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
 
describe('Counter Test Suite', () => {
  test('renders a counter component', () => {
    render(<Counter />)

    const title = screen.getByText("Counter")
    const counter = screen.getByText("0")
    const button = screen.getByText("Count")

    expect(title).toBeInTheDocument()
    expect(counter).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test('clicking button increments the counter', async () => {
    render(<Counter />)

    await screen.findByText("0")
    userEvent.click(screen.getByText("Count"))
    await screen.findByText("1")
  })
})