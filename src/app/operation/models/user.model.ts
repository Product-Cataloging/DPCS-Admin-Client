export interface User {
  id: number;
  email: string;
  password: string;
  user_role: 'operator' | 'admin';
}

export function createUser(params: Partial<User>) {
  return {

  } as User;
}
