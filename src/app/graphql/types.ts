export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface UpdateUserInput {
  name: string;
  username: string;
  email: string;
}

export interface GetUserData {
  user: User;
}

export interface GetUserVars {
  id: number;
}

export interface UpdateUserData {
  updateUser: User;
}

export interface UpdateUserVars {
  id: number;
  input: UpdateUserInput;
}
export interface DeleteUserData {
  deleteUser: User;
}
export interface DeleteUserVars {
  id: number;
}

export interface GetUsersData {
  users: User[];
}
