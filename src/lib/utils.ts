// Utility functions and types

export interface User {
  name: string;
  favoriteColor: string;
}

export function greetUser(user: User): string {
  return `Hello, ${user.name}! Your favorite color is ${user.favoriteColor}.`;
}
