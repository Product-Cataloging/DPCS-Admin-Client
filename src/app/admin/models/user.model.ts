export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  user_type: string;
  is_active: boolean;
}

export function createUser(params: Partial<User>) {
  return {

  } as User;
}
