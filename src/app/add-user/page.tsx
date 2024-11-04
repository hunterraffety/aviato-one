'use client'

import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'

import { gql } from '@apollo/client'
import Button from '../components/Button'

interface UserInput {
  name: string
  username: string
  email: string
}

const ADD_USER_MUTATION = gql`
  mutation AddUser($input: UserInput!) {
    addUser(input: $input) {
      id
      name
      username
      email
    }
  }
`

const AddUser = () => {
  const router = useRouter()
  const [addUser, { loading, error }] = useMutation(ADD_USER_MUTATION)
  const [userInput, setUserInput] = useState<UserInput>({
    name: '',
    username: '',
    email: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await addUser({ variables: { input: userInput } })
      router.push('/')
    } catch (err) {
      console.log('Error adding user:', err)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">add founder</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={userInput.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter full name"
          />
        </div>
        {/* username */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={userInput.username}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter username"
          />
        </div>
        {/* email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={userInput.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter email address"
          />
        </div>
        {/* button */}
        <div>
          <Button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              loading ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {loading ? 'Adding...' : 'add founder'}
          </Button>
        </div>
        {/* error state */}
        {error && (
          <div className="text-red-500 text-sm">
            Error adding user. Please try again.
          </div>
        )}
      </form>
    </div>
  )
}

export default AddUser
