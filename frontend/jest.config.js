module.exports = {
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.scss$': 'jest-css-modules-transform',
    '\\.(png)$': 'jest-transform-stub',
    '\\.(svg)$': 'svg-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!my-module)'],
  setupFilesAfterEnv: ['./tests/setupTests.js'],
};
