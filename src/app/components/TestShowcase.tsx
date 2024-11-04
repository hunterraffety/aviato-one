'use client'

import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const TestShowcase: React.FC = () => {
  const inputTest = `
import React from 'react'
import { render, screen } from '@testing-library/react'
import Input from './Input'
import userEvent from '@testing-library/user-event'

describe('input component', () => {
  it('renders label and input correctly', () => {
    render(
      <Input
        label="Name"
        name="name"
        register={{ onChange: jest.fn(), value: '' }}
        placeholder="Enter your name"
      />
    )

    // label
    const labelElement = screen.getByLabelText('Name')
    expect(labelElement).toBeInTheDocument()

    // input
    const inputElement = screen.getByPlaceholderText('Enter your name')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('type', 'text')
  })

  it('displays error message when error prop is there', () => {
    render(
      <Input
        label="Email"
        name="email"
        register={{ onChange: jest.fn(), value: '' }}
        error="Invalid email"
        type="email"
        placeholder="Enter your email"
      />
    )

    // error message
    const errorElement = screen.getByText('Invalid email')
    expect(errorElement).toBeInTheDocument()

    // accessibility
    const inputElement = screen.getByLabelText('Email')
    expect(inputElement).toHaveAttribute('aria-invalid', 'true')
    expect(inputElement).toHaveAttribute('aria-describedby', 'email-error')
  })
})
`

  const usersTest = `
import React from 'react'
import { render, screen } from '@testing-library/react'
import users from './users'
import useFetchUsers from '../hooks/useFetchUsers'

// mock hook
jest.mock('../hooks/useFetchUsers')

// mock usercard
jest.mock('../components/UserCard', () => ({
  __esModule: true,
  default: ({ user }: { user: { name: string } }) => (
    <div data-testid="user-card">{user.name}</div>
  ),
}))

// mock spinner
jest.mock('./Spinner', () => ({
  __esModule: true,
  default: ({ text }: { text: string }) => <div data-testid="spinner">{text}</div>,
}))

describe('users component', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('renders loading state with spinner', () => {
    // loading state
    (useFetchUsers as jest.Mock).mockReturnValue({
      data: null,
      loading: true,
      error: null,
    })

    render(<users />)

    // spinner is rendered with correct text
    const spinnerElement = screen.getByTestId('spinner')
    expect(spinnerElement).toBeInTheDocument()
    expect(spinnerElement).toHaveTextContent('Loading...')
  })

  it('renders error message when there is an error', () => {
    // hook error state
    (useFetchUsers as jest.Mock).mockReturnValue({
      data: null,
      loading: false,
      error: { message: 'Failed to fetch users' },
    })

    render(<users />)

    // error message is rendered
    const errorElement = screen.getByText(/Error: Failed to fetch users/i)
    expect(errorElement).toBeInTheDocument()
  })

  it('renders list of users when data is fetched successfully', () => {
    // mock data
    const mockUsers = [
      { id: 1, name: 'John Doe', username: 'johndoe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', username: 'janesmith', email: 'jane@example.com' },
    ]

    // mock to return data from hook
    (useFetchUsers as jest.Mock).mockReturnValue({
      data: { users: mockUsers },
      loading: false,
      error: null,
    })

    render(<users />)

    // comps rendered
    const userCards = screen.getAllByTestId('user-card')
    expect(userCards).toHaveLength(mockUsers.length)
    expect(userCards[0]).toHaveTextContent('John Doe')
    expect(userCards[1]).toHaveTextContent('Jane Smith')
  })

  it('renders no users message when user list is empty', () => {
    // empty usefetchusers
    (useFetchUsers as jest.Mock).mockReturnValue({
      data: { users: [] },
      loading: false,
      error: null,
    })

    render(<users />)

    // no card is rendered
    const userCards = screen.queryAllByTestId('user-card')
    expect(userCards).toHaveLength(0)
  })
})
`

  const heroTest = `
import React from 'react'
import { render, screen, act } from '@testing-library/react'
import Hero from './Hero'

// framer mock
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...rest }: any) => <div {...rest}>{children}</div>,
    span: ({ children, ...rest }: any) => <span {...rest}>{children}</span>,
    a: ({ children, ...rest }: any) => <a {...rest}>{children}</a>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('hero comp', () => {
  const phrases = [
    \`Jian-Yang: I don't smoke. Except for special occasions.\`,
    \`Erlich: So you do smoke? Wait, have you been smoking in my house?\`,
    \`Jian-Yang: No. There's no special occasions that ever happen in your house.\`,
  ]

  beforeAll(() => {
    // fake timers for controlling setInterval
    jest.useFakeTimers()
  })

  afterAll(() => {
    // real timers after tests
    jest.useRealTimers()
  })

  it('renders welcome message and initial phrase', () => {
    render(<Hero />)

    // welcome message
    const welcomeMessage = screen.getByText(/Welcome to Aviato/i)
    expect(welcomeMessage).toBeInTheDocument()

    // initial phrase
    const initialPhrase = screen.getByText(phrases[0])
    expect(initialPhrase).toBeInTheDocument()

    // button
    const button = screen.getByRole('link', { name: /Founder Profiles/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/')
  })

  it('cycles through phrases every 3 seconds', () => {
    render(<Hero />)

    // initial first quote
    expect(screen.getByText(phrases[0])).toBeInTheDocument()

    // +timers by 3 seconds
    act(() => {
      jest.advanceTimersByTime(3000)
    })

    // 2nd quote
    expect(screen.getByText(phrases[1])).toBeInTheDocument()

    // +timers by another 3 seconds
    act(() => {
      jest.advanceTimersByTime(3000)
    })

    // third quote
    expect(screen.getByText(phrases[2])).toBeInTheDocument()

    // (loop back)
    act(() => {
      jest.advanceTimersByTime(3000)
    })

    // check at start again
    expect(screen.getByText(phrases[0])).toBeInTheDocument()
  })

  it('renders founder profiles button with correct link', () => {
    render(<Hero />)

    const button = screen.getByRole('link', { name: /Founder Profiles/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/')
  })
})
`

  return (
    <>
      <div style={{ maxWidth: '100%', display: 'flex' }}>
        <div className="mx-auto flex justify-center flex-col w-3/4 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">input comp test</h2>
            <SyntaxHighlighter
              language="typescript"
              style={dracula}
              showLineNumbers
            >
              {inputTest}
            </SyntaxHighlighter>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">users comp test</h2>
            <SyntaxHighlighter
              language="typescript"
              style={dracula}
              showLineNumbers
            >
              {usersTest}
            </SyntaxHighlighter>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">hero comp test</h2>
            <SyntaxHighlighter
              language="typescript"
              style={dracula}
              showLineNumbers
            >
              {heroTest}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestShowcase
