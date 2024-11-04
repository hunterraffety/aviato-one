'use client'

import React from 'react'

interface InputProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any
  error?: string
}

/**
 * input
 * renders a labeled input field with validation error messages
 * @param props - just props including label, name, type, placeholder, register, and error
 */
const Input: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  register,
  error,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? 'border-red-500' : ''
        }`}
        aria-invalid={error ? 'true' : 'false'} // error state
        aria-describedby={error ? `${name}-error` : undefined} // accessibility
      />
      {/* Error Message */}
      {error && (
        <p id={`${name}-error`} className="text-red-500 text-xs italic mt-1">
          {error}
        </p>
      )}
    </div>
  )
}

export default Input
