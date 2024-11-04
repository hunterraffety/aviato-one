import React from 'react'
import { render, screen } from '@testing-library/react'
import Users from './Users'
import useFetchUsers from '../hooks/useFetchUsers'

// mock hook
jest.mock('../hooks/useFetchUsers')

// mock the usercard component
jest.mock('../components/UserCard', () => ({
  __esModule: true,
  default: ({ user }: { user: { name: string } }) => (
    <div data-testid="user-card">{user.name}</div>
  ),
}))

// mock the Spinner component
jest.mock('./Spinner', () => ({
  __esModule: true,
  default: ({ text }: { text: string }) => (
    <div data-testid="spinner">{text}</div>
  ),
}))

describe('Users Component', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('renders loading state with Spinner', () => {
    // useFetchUsers loading state
    ;(useFetchUsers as jest.Mock).mockReturnValue({
      data: null,
      loading: true,
      error: null,
    })

    render(<Users />)

    // spinner is rendered with correct text
    const spinnerElement = screen.getByTestId('spinner')
    expect(spinnerElement).toBeInTheDocument()
    expect(spinnerElement).toHaveTextContent('Loading...')
  })

  it('renders error message when there is an error', () => {
    // useFetchUsers error state
    ;(useFetchUsers as jest.Mock).mockReturnValue({
      data: null,
      loading: false,
      error: { message: 'Failed to fetch users' },
    })

    render(<Users />)

    // error message
    const errorElement = screen.getByText(/Error: Failed to fetch users/i)
    expect(errorElement).toBeInTheDocument()
  })

  it('renders list of users when data is fetched successfully', () => {
    // mock teh data
    const mockUsers = [
      {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
      },
      {
        id: 2,
        name: 'Jane Smith',
        username: 'janesmith',
        email: 'jane@example.com',
      },
    ]
    // mock fetch
    ;(useFetchUsers as jest.Mock).mockReturnValue({
      data: { users: mockUsers },
      loading: false,
      error: null,
    })

    render(<Users />)

    // render components
    const userCards = screen.getAllByTestId('user-card')
    expect(userCards).toHaveLength(mockUsers.length)
    expect(userCards[0]).toHaveTextContent('John Doe')
    expect(userCards[1]).toHaveTextContent('Jane Smith')
  })

  it('renders no users message when user list is empty', () => {
    // grab fake users
    ;(useFetchUsers as jest.Mock).mockReturnValue({
      data: { users: [] },
      loading: false,
      error: null,
    })
    // render cards
    render(<Users />)
    const userCards = screen.queryAllByTestId('user-card')
    expect(userCards).toHaveLength(0)
  })
})
