
import Greet from '../../src/components/Greet'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

describe('Greet', () => {
  it('should render hello when name is provided', () => {
    render(<Greet name="Vishwas" />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/Vishwas/i)
  })
  it('should render login button when name is not provided', () => {
    render(<Greet />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/login/i)
  })
})