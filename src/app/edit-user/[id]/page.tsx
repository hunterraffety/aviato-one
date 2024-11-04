'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useQuery, useMutation } from '@apollo/client'
import { GET_USER_BY_ID } from '@/app/graphql/queries/getUserById'
import { UPDATE_USER } from '@/app/graphql/mutations/updateUser'
import { GetUserData, GetUserVars } from '@/app/graphql/types'
import Spinner from '@/app/components/Spinner'

interface UserInput {
  name: string
  username: string
  email: string
}

const EditUser = () => {
  const router = useRouter()
  const params = useParams()
  const userId = parseInt(params.id as string, 10)

  const { data, loading, error } = useQuery<GetUserData, GetUserVars>(
    GET_USER_BY_ID,
    {
      variables: { id: userId },
      skip: isNaN(userId),
      fetchPolicy: 'network-only', // ensure fresh data
    }
  )

  const [updateUser] = useMutation(UPDATE_USER)

  const [userInput, setUserInput] = useState<UserInput | null>(null)

  useEffect(() => {
    if (data && data.user) {
      const { name, username, email } = data.user
      setUserInput({ name, username, email })
    }
  }, [data])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (userInput) {
      setUserInput({ ...userInput, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (userInput) {
      await updateUser({ variables: { id: userId, input: userInput } })
      router.push('/')
    }
  }

  if (loading || !userInput) return <Spinner text="Loading..." />
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Edit User</h1>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            className="w-full border p-2 rounded"
            type="text"
            name="name"
            value={userInput.name}
            onChange={handleChange}
            required
            title="Name"
          />
        </div>
        {/* username */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Username</label>
          <input
            className="w-full border p-2 rounded"
            placeholder="username"
            type="text"
            name="username"
            value={userInput.username}
            onChange={handleChange}
            required
          />
        </div>
        {/* email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            className="w-full border p-2 rounded"
            placeholder="email"
            type="email"
            name="email"
            value={userInput.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* submit */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          Update User
        </button>
      </form>
    </div>
  )
}

export default EditUser
