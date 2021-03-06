module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/stories/",
  ],
  globals: {
    "ts-jest": {
      packageJson: "package.json",
    },
  },
}
