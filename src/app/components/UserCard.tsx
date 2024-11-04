'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from './Button'

interface User {
  id: number
  name: string
  username: string
  email: string
}

interface UserCardProps {
  user: User
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const router = useRouter()
  /**
   * handles the edit action
   * redirs to the edit page when the edit button is clicked
   * @param e - mouse event from clicking the edit button
   */
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    router.push('/')
    console.log(`Edit user with ID: ${user.id}`)
  }

  /**
   * handles the delete action
   * prompts for confirmation and deletes the user if confirmed (but not really), it can't
   * @param e - mouse event from clicking the delete button
   */
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      console.log(`User with ID ${user.id} deleted.`)
      router.push('/')
    }
  }

  return (
    <Link href={`/edit-user/${user.id}`}>
      <span className="block h-full">
        <div
          className="
            bg-white
            rounded-lg
            border-2 border-transparent
            shadow-md
            hover:shadow-lg
            hover:border-corporate-blue
            transition-all
            duration-300
            overflow-hidden
            cursor-pointer
            transform
            hover:scale-105
            h-full
            flex flex-col
          "
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.currentTarget.click()
            }
          }}
        >
          {/* fake ph avatar */}
          <div className="bg-light-grey flex items-center justify-center p-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded-full shadow-lg"
              src={`https://i.pravatar.cc/150?img=${user.id}`}
              alt={`${user.name} avatar`}
              width={128}
              height={128}
            />
          </div>

          {/* user info */}
          <div className="p-6 flex-1 flex flex-col">
            <h2 className="text-xl font-semibold text-corporate-blue mb-2">
              {user.name}
            </h2>
            <p className="text-slate-blue mb-1">@{user.username}</p>
            <p className="text-gray-700 mb-4 break-all">Email: {user.email}</p>
            {/* pushes content up */}
            <div className="flex-grow"></div>
            {/* user actions */}
            <div className="flex space-x-4">
              <Button
                onClick={handleEdit}
                className="text-slate-blue font-medium hover:underline focus:outline-none"
                aria-label={`Edit ${user.name}`}
              >
                Edit
              </Button>
              <Button
                onClick={handleDelete}
                className="text-red-500 font-medium hover:underline focus:outline-none"
                aria-label={`Delete ${user.name}`}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </span>
    </Link>
  )
}

export default UserCard
