// jest.config.js (javascript file)
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper: {
    '.*workerFactory': '<rootDir>/src/app/__mocks__/workerFactory.mock.ts',
  },
};
