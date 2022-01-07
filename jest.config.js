/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  snapshotFormat: {
    printBasicPrototype: false,
  },
  coverageDirectory: "./coverage",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/*.test.{js,jsx,ts,tsx}",
    "!coverage/**",
  ],
  modulePathIgnorePatterns: ["fixtures", "dist", "generated"],
};
