'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import Toast from '../components/Toast'

type ToastType = 'success' | 'error' | 'info'

interface ToastMessage {
  id: number
  title: string
  message: string
  type: ToastType
}

interface ToastContextProps {
  addToast: (toast: Omit<ToastMessage, 'id'>) => void
  removeToast: (id: number) => void
}

/**
 * context provider for toast
 * provides functions to add and remove toast notifications.
 */
const ToastContext = createContext<ToastContextProps | undefined>(undefined)

let toastId = 0

/**
 * toastprovider component
 * wraps the application and manages the toast notifications, think of <Router> or any other similar wrapper
 */
export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  /**
   * adds a new toast to the list and times out its removal from ui
   * @param toast - toast message to display
   */
  const addToast = (toast: Omit<ToastMessage, 'id'>) => {
    const id = toastId++
    setToasts(prevToasts => [...prevToasts, { id, ...toast }])
    // knock it off after 3 seconds
    setTimeout(() => removeToast(id), 3000)
  }

  /**
   * removes toast from the list based on its id
   * @param id - user id
   */
  const removeToast = (id: number) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {/* container for toasts */}
      <div
        className="fixed top-5  z-50 w-max space-y-2"
        aria-live="assertive"
        aria-atomic="true"
        style={{ width: '100%' }}
      >
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            toast={toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

/**
 * custom hook to access toast functions within components
 */
export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
