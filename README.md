# TypeScript ESM Project

A modern TypeScript project that runs directly in Node.js 24+ without a build step, using native ESM modules.

## Features

- ✨ **No build step** - Run TypeScript files directly with Node.js
- 🚀 **Pure ESM** - Modern ECMAScript modules throughout
- 🔒 **Type-safe** - Full TypeScript type checking
- 🧪 **Testing ready** - Configured with purple-tape and multi-tape
- 💅 **Formatted** - Prettier for consistent code style

## Requirements

- Node.js 24.0.0 or later

## Getting Started

```bash
# Install dependencies
npm install

# Run the main application
npm start

# Run type checking
npm run type-check

# Run tests
npm test

# Format code
npm run format
```

## Project Structure

```
src/
├── lib/
│   ├── utils.ts          # Utility functions
│   └── utils.test.ts     # Tests
├── index.ts              # Main entry point
├── fetch-example.ts      # HTTP request example
└── transform.ts          # Additional examples
```

## Key Concepts

### Direct TypeScript Execution

This project uses Node.js's built-in TypeScript support to run `.ts` files directly without compilation:

```bash
node src/index.ts
```

### ESM Import Extensions

Import statements must include `.ts` file extensions:

```typescript
import { greetUser } from './lib/utils.ts'
```

### Separate Type Checking

Type checking and execution are independent:

- **Run code**: `npm start` (types are stripped)
- **Check types**: `npm run type-check` (validates without running)

## Available Scripts

- `npm start` - Run the main application
- `npm run fetch` - Run the HTTP fetch example
- `npm test` - Run all tests
- `npm run type-check` - Validate TypeScript types
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Development

For detailed development guidelines, see [AGENTS.md](./AGENTS.md).

### Adding New Code

1. Create `.ts` files in `src/` or `src/lib/`
2. Use ESM syntax with `.ts` extensions in imports
3. Format with `npm run format`
4. Verify types with `npm run type-check`

### Writing Tests

Tests use purple-tape:

```typescript
import { test } from 'purple-tape'

test('my test', async (t) => {
    t.equal(actual, expected, 'description')
})
```

## Code Style

This project uses Prettier with:

- Single quotes
- No semicolons
- ES5 trailing commas
- 4-space indentation

## License

ISC
