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

## Explaining diferent problems
### Longest Common prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.