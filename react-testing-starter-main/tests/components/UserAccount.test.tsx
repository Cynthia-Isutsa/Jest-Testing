
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import UserAccount from '../../src/components/UserAccount'
import { User } from '../../src/entities'

describe('UserAccount', () => {

  it('should render user name ', () => {
    const user: User = {
      id: 1,
      name: 'Vishwas',
    }
    render(<UserAccount user={user} />)
    expect(screen.getByText(user.name)).toBeInTheDocument()
  })
  it('should render not render edit button when isAdmin is false', () => {
    const user: User = {
      id: 1,
      name: 'Vishwas',
      isAdmin: false,
    }
    render(<UserAccount user={user} />)
    const button = screen.queryByRole('button')
    expect(button).not.toBeInTheDocument()
  })

 
 })