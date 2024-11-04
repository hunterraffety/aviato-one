import { gql } from "@apollo/client";

// single user by id
export const GET_USER_BY_ID = gql`
  query GetUser($id: Int!) {
    user(id: $id) @rest(type: "User", path: "/users/{args.id}") {
      id
      name
      username
      email
    }
  }
`
