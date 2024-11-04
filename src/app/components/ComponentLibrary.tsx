'use client' // Ensure this is a Client Component if necessary

import React from 'react'
import PropsTable from './PropsTable'

export const userCardProps = [
  {
    name: 'user',
    type: 'User',
    description: 'The user data to display in the card.',
    required: true,
  },
  {
    name: 'onDelete',
    type: '(id: number) => void',
    description: 'Function to handle deleting the user.',
    required: true,
  },
  {
    name: 'isSubmitting',
    type: 'boolean',
    description: 'Indicates if a delete operation is in progress.',
    required: false,
  },
] as const

export const buttonProps = [
  {
    name: 'variant',
    type: `"primary" | "secondary" | "danger"`,
    description: 'Determines the styling variant of the button.',
    required: false,
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    description: 'The content inside the button.',
    required: true,
  },
] as const

export const heroProps = [
  {
    name: 'phrases',
    type: 'string[]',
    description: 'An array of phrases to display in the hero section.',
    required: true,
  },
  {
    name: 'animationDuration',
    type: 'number',
    description:
      'Duration each phrase is displayed before transitioning (in milliseconds).',
    required: false,
  },
] as const

export const toastProps = [
  {
    name: 'toast',
    type: 'ToastMessage',
    description: 'The toast message to display.',
    required: true,
  },
  {
    name: 'onClose',
    type: '(id: number) => void',
    description: 'Function to handle closing the toast.',
    required: true,
  },
] as const

const inputProps = [
  {
    name: 'placeholder',
    type: 'string',
    description: 'Placeholder text displayed in the input field.',
    required: false,
  },
  {
    name: 'type',
    type: '"text" | "password" | "email"',
    description: 'Specifies the type of input field.',
    required: false,
  },
  {
    name: 'value',
    type: 'string',
    description: 'The current value of the input field.',
    required: true,
  },
  {
    name: 'onChange',
    type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
    description: 'Event handler called when the input value changes.',
    required: true,
  },
]

export const propsTableProps = [
  {
    name: 'props',
    type: 'PropItem[]',
    description: 'An array of prop items to display in the table.',
    required: true,
  },
] as const

const ComponentLibrary: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">button component</h1>
      <PropsTable props={buttonProps} />
      <br />
      <h1 className="text-3xl font-bold mb-4">usercard component</h1>
      <PropsTable props={userCardProps} />
      <br />
      <h1 className="text-3xl font-bold mb-4">hero component</h1>
      <PropsTable props={heroProps} />
      <br />
      <h1 className="text-3xl font-bold mb-4">input component</h1>
      <PropsTable props={inputProps} />
      <br />
      <h1 className="text-3xl font-bold mb-4">toast components</h1>
      <PropsTable props={toastProps} />
      <br />
      <h1 className="text-3xl font-bold mb-4">this table</h1>
      <PropsTable props={propsTableProps} />
    </div>
  )
}

export default ComponentLibrary
