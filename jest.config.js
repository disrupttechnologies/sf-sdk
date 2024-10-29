/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  testTimeout: 5000, // 10 seconds timeout

  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};