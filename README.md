# LeetCode Practice

## Setting up JEST with typeScript
1. Install Jest and TypeScript.
```bash
    npm i -D jest typescript
```
2. Install ts-jest and types
```bash
    npm i -D ts-jest @types/jest
```
3. Create a config file named `jest.config.ts` at root by running this command:
```bash
    npx ts-jest config:init
```

## Running the tests:
Make sure to first have this added in the package.json:
```json
    "scripts": {
    "test": "jest"
  }
```
```
    npm t
```