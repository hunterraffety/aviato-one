'use client'

import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  children: React.ReactNode
}

const variantStyles: Record<string, string> = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  danger: 'bg-red-500 hover:bg-red-600 text-white',
}

/**
 * button component
 * reusable button component with variants
 * @param variant - variant of the button
 * @param children - button content
 * @param rest - additional props
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  ...rest
}) => {
  return (
    <button
      className={`px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-${
        variant === 'primary'
          ? 'blue'
          : variant === 'secondary'
            ? 'gray'
            : 'red'
      }-400 ${variantStyles[variant]}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
