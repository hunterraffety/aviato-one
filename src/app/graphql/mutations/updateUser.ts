import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
  mutation UpdateUser($id: Int!, $input: UserInput!) {
    updateUser(id: $id, input: $input)
      @rest(type: "User", path: "users/{args.id}", method: "PUT", bodyKey: "input") {
      id
      name
      username
      email
    }
  }
`;