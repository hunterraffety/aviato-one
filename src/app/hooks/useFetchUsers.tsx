'use client'

import { useQuery } from '@apollo/client'

import { GetUsersData } from '../graphql/types'
import { GET_USERS } from '../graphql/queries/getUsers'

/**
 * custom hook -- useFetchUsers
 * Fetches all users from api
 * @returns data, loading, and errora
 */
const useFetchUsers = () => {
  const { data, loading, error } = useQuery<GetUsersData>(GET_USERS)
  return { data, loading, error }
}

export default useFetchUsers
