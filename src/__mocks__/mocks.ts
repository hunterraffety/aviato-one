import { GET_USER_BY_ID } from '@/app/graphql/queries/getUserById';
import { UPDATE_USER } from '@/app/graphql/mutations/updateUser';
import { MockedResponse } from '@apollo/client/testing';

export const mocks: MockedResponse[] = [
  {
    request: {
      query: GET_USER_BY_ID,
      variables: { id: 1 },
    },
    result: {
      data: {
        user: {
          id: 1,
          name: 'John Doe',
          username: 'johndoe',
          email: 'john@example.com',
        },
      },
    },
  },
  {
    request: {
      query: UPDATE_USER,
      variables: {
        id: 1,
        input: {
          name: 'John Smith',
          username: 'johnsmith',
          email: 'john.smith@example.com',
        },
      },
    },
    result: {
      data: {
        updateUser: {
          id: 1,
          name: 'John Smith',
          username: 'johnsmith',
          email: 'john.smith@example.com',
        },
      },
    },
  },
];
