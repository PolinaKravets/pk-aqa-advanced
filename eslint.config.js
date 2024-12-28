import globals from 'globals';
import pluginJs from '@eslint/js';
import jest from 'eslint-plugin-jest';

export default [
  {
    files: ["**/*.js", "**/*.mjs"],
  },
  {
  ignores: ['lesson13-14/jest-html-reporters-attach/jest_html_reporters/**'], 
},
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
  jest.configs['flat/recommended'],
  
  
 {rules: {
  semi: 'error', // Требовать точку с запятой
  'no-console': 'off', // Отключить правило на использование console.log
  'no-unused-vars': 'off', // Отключить предупреждения о неиспользуемых переменных
  'indent': ['off', 2], // Ошибка при неверном отступе (2 пробела)
  'space-in-parens': ['error', 'never'], // Ошибка, если есть пробелы внутри круглых скобок
  "jest/no-standalone-expect": "off",
  "no-undef":'off',
  "jest/valid-expect": "off"
},} 
];
