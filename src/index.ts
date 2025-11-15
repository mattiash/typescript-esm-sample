// Sample TypeScript ESM project demonstrating direct execution in Node.js 24+

import { greetUser, type User } from "./lib/utils.ts";

const user: User = {
  name: "TypeScript Developer",
  favoriteColor: "blue",
};

console.log(greetUser(user));
console.log("✓ TypeScript is running directly without a build step!");
