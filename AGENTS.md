# Agent Development Guide

This document provides guidance for AI coding agents working in this TypeScript ESM repository.

## Project Overview

This is a TypeScript project configured to run directly in Node.js 24+ without a build step, using native ESM (ECMAScript Modules) format. The project leverages Node.js's experimental TypeScript support to execute `.ts` files directly.

## Key Architecture Decisions

### No Build Step

- TypeScript files are executed directly using Node.js built-in TypeScript support
- No compilation or transpilation step required
- Type checking is separate from execution

### Pure ESM

- All code uses ESM syntax (`import`/`export`)
- `package.json` has `"type": "module"`
- Import statements must include `.ts` file extensions

### Node.js 24+ Only

- Requires Node.js version 24 or later
- Uses modern JavaScript features (ES2024)

## Project Structure

```
.
├── src/
│   ├── lib/
│   │   ├── utils.ts          # Utility functions
│   │   └── utils.test.ts     # Tests for utilities
│   ├── index.ts              # Main entry point
│   ├── fetch-example.ts      # Example using pure ESM module (got)
│   └── transform.ts          # Additional examples
├── package.json              # Project configuration
├── tsconfig.json             # TypeScript configuration
└── .gitignore               # Git ignore patterns
```

## Critical Rules for Agents

### 1. Import Statements Must Use .ts Extensions

**CORRECT:**

```typescript
import { something } from './module.ts'
import { type User } from './types.ts'
```

**INCORRECT:**

```typescript
import { something } from './module' // Missing extension
import { something } from './module.js' // Wrong extension
```

**Why:** When using Node.js's direct TypeScript execution, imports must reference the actual file extensions on disk (`.ts`), not the compiled output (`.js`).

### 2. TypeScript Configuration

The `tsconfig.json` includes these critical settings:

- `"module": "NodeNext"` - Node.js ESM resolution
- `"moduleResolution": "NodeNext"` - Match Node.js behavior
- `"target": "ES2024"` - Modern JavaScript features
- `"noEmit": true` - Don't generate JavaScript files
- `"allowImportingTsExtensions": true` - Allow `.ts` in imports

**Do not modify these settings** without understanding the implications for direct TypeScript execution.

### 3. Running Code

Use the provided npm scripts:

```bash
# Run the main application
npm start

# Run with experimental-transform-types (alternative mode)
npm start:transform

# Run the fetch example
npm run fetch

# Type check without running
npm run type-check

# Run tests
npm test
```

**Never suggest** running `tsc` to compile the code - this project runs TypeScript directly.

### 4. Testing

Tests use `purple-tape` and are executed with `multi-tape`:

```typescript
import { test } from 'purple-tape'

test('description', async (t) => {
    t.equal(actual, expected, 'assertion message')
})
```

- Test files must end with `.test.ts`
- Tests are discovered automatically by the pattern `src/**/*.test.ts`
- Each assertion should have a descriptive message

### 5. Dependencies

**Pure ESM modules work perfectly** in this setup. Example:

```typescript
import got from 'got' // Pure ESM module - works fine
```

When adding dependencies:

- Runtime dependencies: `npm install <package>`
- Dev dependencies: `npm install --save-dev <package>`
- Type definitions: `npm install --save-dev @types/<package>`

### 6. Type Checking vs Execution

These are **separate operations**:

- **Execution**: `node src/file.ts` - Strips types and runs code
- **Type Checking**: `npm run type-check` - Validates types without running

Type errors don't prevent execution, but should be fixed for code quality.

### 7. Code Formatting with Prettier

This project uses Prettier for consistent code formatting with the following configuration:

- **Single quotes** instead of double quotes
- **No semicolons**
- **ES5 trailing commas**
- **Tab width of 4 spaces**

**Always format your code** before committing:

```bash
# Format all files
npm run format

# Check formatting without modifying files
npm run format:check
```

The Prettier configuration is defined in `.prettierrc` and should not be modified without team consensus.

## Common Tasks

### Adding a New Module

1. Create the file with `.ts` extension in `src/` or `src/lib/`
2. Use ESM syntax with `.ts` extensions in imports
3. Export functions/types that other modules need
4. Run `npm run format` to format the code
5. Run `npm run type-check` to verify types

### Adding Tests

1. Create a file named `*.test.ts` in the same directory as the code
2. Import `{ test }` from `purple-tape`
3. Write async test functions
4. Run with `npm test`

### Adding Dependencies

1. Install the package: `npm install <package>`
2. Install types if needed: `npm install --save-dev @types/<package>`
3. Import and use with standard ESM syntax
4. Pure ESM packages work without any special configuration

## Troubleshooting

### "Cannot find module" errors

- Check that import paths include `.ts` extension
- Verify the file exists at the specified path
- Ensure relative paths start with `./` or `../`

### Type errors but code runs

- This is expected - types are stripped at runtime
- Run `npm run type-check` to see type errors
- Fix type errors for better code quality

### "allowImportingTsExtensions" error

- Ensure `tsconfig.json` has `"allowImportingTsExtensions": true`
- This flag is required for `.ts` extensions in imports

## Best Practices

1. **Always include file extensions** in import statements
2. **Format code with Prettier** before committing (`npm run format`)
3. **Run type-check** after making changes to catch type errors
4. **Write tests** for new functionality using purple-tape
5. **Use async/await** for asynchronous operations
6. **Keep modules focused** - single responsibility principle
7. **Export types** that other modules might need
8. **Add descriptive messages** to all test assertions
9. **Follow the Prettier style guide** - single quotes, no semicolons, 4-space tabs

## What NOT to Do

❌ Don't suggest adding a build step or compilation process
❌ Don't use `.js` extensions in import statements
❌ Don't modify the core TypeScript configuration without good reason
❌ Don't suggest tools that require compiled JavaScript (unless they support direct TS execution)
❌ Don't omit file extensions in imports
❌ Don't use CommonJS syntax (`require`, `module.exports`)

## Additional Resources

- [Node.js TypeScript Support](https://nodejs.org/api/typescript.html)
- [Purple-tape Documentation](https://www.npmjs.com/package/purple-tape)
- [TypeScript ESM Documentation](https://www.typescriptlang.org/docs/handbook/esm-node.html)
