/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from "@apollo/client"
import { RestLink } from "apollo-link-rest"
import { onError } from "@apollo/client/link/error"

const restLink = new RestLink({
  uri: "https://jsonplaceholder.typicode.com/", // Base URL for JSONPlaceholder
  endpoints: {
    users: "/users",
  },
})

// in case of error
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
  }
})

// interface w/ api endpoint
const httpLink = new HttpLink({
  uri: "https://jsonplaceholder.typicode.com/", // typicode
  credentials: "same-origin",
})

const link = ApolloLink.from([errorLink, restLink, httpLink])

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          users: {
            // no cache
            merge(existing = [], incoming: any[]) {
              return incoming
            },
          },
          user: {
            //no cache
            keyArgs: false,
            merge(existing = {}, incoming: any) {
              return incoming
            },
          },
        },
      },
    },
  }),
})

export default client
