import { gql } from "@apollo/client";

// delete, won't work
export const DELETE_USER = gql`
  mutation DeleteUser($id: Int!) {
    deleteUser(id: $id)
      @rest(type: "User", path: "/users/{args.id}", method: "DELETE") {
      id
    }
  }
`
