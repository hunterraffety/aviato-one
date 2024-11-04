import { gql } from "@apollo/client";

// fetch all users
export const GET_USERS = gql`
  query GetUsers {
    users @rest(type: "User", path: "/users") {
      id
      name
      username
      email
    }
  }
`
