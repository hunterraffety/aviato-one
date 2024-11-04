/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { render, screen, act } from '@testing-library/react'
import Hero from './Hero'

// mock the library for framer
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...rest }: any) => <div {...rest}>{children}</div>,
    span: ({ children, ...rest }: any) => <span {...rest}>{children}</span>,
    a: ({ children, ...rest }: any) => <a {...rest}>{children}</a>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('Hero Component', () => {
  beforeAll(() => {
    // fake timers for controlling setInterval
    jest.useFakeTimers()
  })

  afterAll(() => {
    // restore timers after tests
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

    // first slide at beginning
    expect(screen.getByText(phrases[0])).toBeInTheDocument()

    // +timers by 3 seconds
    act(() => {
      jest.advanceTimersByTime(3000)
    })

    // next quote
    expect(screen.getByText(phrases[1])).toBeInTheDocument()

    // +timers by 3 seconds
    act(() => {
      jest.advanceTimersByTime(3000)
    })

    // next quote
    expect(screen.getByText(phrases[2])).toBeInTheDocument()

    // loop
    act(() => {
      jest.advanceTimersByTime(3000)
    })

    // first quote
    expect(screen.getByText(phrases[0])).toBeInTheDocument()
  })

  it('renders the "founder profiles" button with correct link', () => {
    render(<Hero />)

    const button = screen.getByRole('link', { name: /Founder Profiles/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/')
  })
})

// silicon valley joke
const phrases = [
  `Jian-Yang: I don't smoke. Except for special occasions.`,
  `Erlich: So you do smoke? Wait, have you been smoking in my house?`,
  `Jian-Yang: No. There's no special occasions that ever happen in your house.`,
]
