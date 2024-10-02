import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      semi: 'error',
      'no-console': 'off',
      'no-unused-vars': 'off',
      'indent': ['error', 2],
      'space-in-parens': ['error', 'never'],
    },
  },
];
