import React from 'react'
import { render, screen } from '@testing-library/react'
import Input from './Input'

describe('Input Component', () => {
  it('renders label and input correctly', () => {
    render(
      <Input
        label="Name"
        name="name"
        register={{ onChange: jest.fn(), value: '' }}
        placeholder="Enter your name"
      />
    )

    // label check
    const labelElement = screen.getByLabelText('Name')
    expect(labelElement).toBeInTheDocument()

    // input check
    const inputElement = screen.getByPlaceholderText('Enter your name')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('type', 'text')
  })

  it('displays error message when error prop is provided', () => {
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

    // check for accessibility
    const inputElement = screen.getByLabelText('Email')
    expect(inputElement).toHaveAttribute('aria-invalid', 'true')
    expect(inputElement).toHaveAttribute('aria-describedby', 'email-error')
  })
})
