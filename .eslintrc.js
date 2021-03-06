module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended'
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    jest: 'readonly',
    test: 'readonly',
    expect: 'readonly',
    module: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
