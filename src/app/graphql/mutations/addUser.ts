import { gql } from '@apollo/client';

// add user mutation
export const ADD_USER = gql`
  mutation AddUser($input: UserInput!) {
    addUser(input: $input)
      @rest(type: "User", path: "users/", method: "POST", bodyKey: "input") {
      id
      name
      username
      email
    }
  }
`;