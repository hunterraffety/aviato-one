'use client'

import UserCard from '../components/UserCard'
import Spinner from './Spinner'
import useFetchUsers from '../hooks/useFetchUsers'

interface User {
  id: number
  name: string
  username: string
  email: string
}

/**
 * iser list component
 * grabs a list of users w hook
 */
const UsersList = () => {
  const { data, loading, error } = useFetchUsers()

  if (loading)
    return (
      <div
        className="flex justify-center items-center h-screen"
        role="status"
        aria-label="Loading"
      >
        <Spinner text="Loading..." />
      </div>
    )
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">Error: {error.message}</p>
    )

  const users: User[] = data?.users || []

  return (
    <div className="container mx-auto px-4 py-8" id="founders">
      <h1 className="text-4xl font-bold text-corporate-blue mb-8 text-center">
        Founders
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map(user => (
          <div key={user.id} className="h-full">
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsersList
