
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import UserAccount from '../../src/components/UserAccount'

describe('Greet', () => {

  it('should render edit button when user is not the admin', () => {
    render(<UserAccount />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/login/i)
  })
})