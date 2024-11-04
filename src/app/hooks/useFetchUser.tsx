'use client'

import { useQuery } from '@apollo/client'

import { GetUserData, GetUserVars } from '../graphql/types'
import { GET_USER_BY_ID } from '../graphql/queries/getUserById'

/**
 * custom hook -- useFetchUser
 * fetches single user by id
 * @param id - id of the user to fetch.
 * @returns result containing data, loading, and error states
 */
const useFetchUser = (id: number | undefined) => {
  const { data, loading, error } = useQuery<GetUserData, GetUserVars>(
    GET_USER_BY_ID,
    {
      variables: { id: id! },
      skip: id === undefined,
    }
  )
  return { data, loading, error }
}

export default useFetchUser
