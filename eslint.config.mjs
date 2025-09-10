import next from 'next/eslint.js';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  // Base configurations
  {
    files: ['**/*.js', '**/*.mjs', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {},
    rules: {},
  },

  // Next.js specific configurations
  next,

  // Prettier configuration - MUST be the last one
  prettier,
];

export default config;