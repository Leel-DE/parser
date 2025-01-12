const { defaults } = require('jest-config');

module.exports = {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.json',
      },
    ],
    '^.+\\.(js|jsx|ts|tsx)$': [
      'esbuild-jest',
      {
        babel: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./setupTests.ts'],
};
