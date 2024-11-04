'use client'

import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Button from './Button'

interface ToastMessage {
  id: number
  title: string
  message: string
  type: 'success' | 'error' | 'info'
}

interface ToastProps {
  toast: ToastMessage
  onClose: () => void
}

const typeStyles: Record<string, string> = {
  success: 'bg-green-100 border-green-500 text-green-700',
  error: 'bg-red-100 border-red-500 text-red-700',
  info: 'bg-blue-100 border-blue-500 text-blue-700',
}

/**
 *toast component
 * displays a toast message
 * @param toast - toast message to display.
 * @param onClose - fn to close the toast.
 */
const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  return (
    <div
      className={`max-w-sm w-full sm:max-w-md shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 ${typeStyles[toast.type]}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      {/* container */}
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          {/* icon based on type */}
          <div className="flex-shrink-0">
            {toast.type === 'success' && (
              <svg
                className="h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
            {toast.type === 'error' && (
              <svg
                className="h-6 w-6 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            {toast.type === 'info' && (
              <svg
                className="h-6 w-6 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>
            )}
          </div>
          {/* toast text */}
          <div className="ml-3 flex-1">
            <p className="text-sm sm:text-base font-medium">{toast.title}</p>
            <p className="mt-1 text-sm sm:text-base break-words">
              {toast.message}
            </p>
          </div>
        </div>
      </div>
      {/* close button */}
      <div className="flex border-l border-gray-200">
        <Button
          onClick={onClose}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close notification"
        >
          <span className="sr-only">Close</span>
          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}

export default Toast
