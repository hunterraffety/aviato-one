'use client'

import React from 'react'

interface SpinnerProps {
  text?: string // optional :)
}

/**
 * spinner component
 * loading spinner
 * @param text - opt
 */
const Spinner: React.FC<SpinnerProps> = ({ text }) => {
  return (
    <div
      className="flex flex-col items-center justify-center space-y-2"
      role="status"
      aria-label="Loading"
    >
      <svg
        className="animate-spin h-12 w-12 text-corporate-blue"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        ></path>
      </svg>
      {text && (
        <span className="text-lg font-medium text-corporate-blue">{text}</span>
      )}
    </div>
  )
}

export default Spinner
