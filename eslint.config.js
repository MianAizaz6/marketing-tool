// eslint.config.js
import eslintPluginReact from 'eslint-plugin-react';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.tsx', '**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
    },
  },
];
