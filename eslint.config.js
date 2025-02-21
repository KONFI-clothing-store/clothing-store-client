import eslintConfigPrettier from 'eslint-config-prettier'
import pluginReact from 'eslint-plugin-react'
import tailwind from 'eslint-plugin-tailwindcss'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import pluginJs from '@eslint/js'

/** @type {import('eslint').Linter.Config[]} */
const rules = [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    excludedFiles: ['node_modules/**', 'dist/**'],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      quotes: ['error', 'single'],
      'prettier/prettier': 'error',
    },
  },
  eslintConfigPrettier,
  ...tailwind.configs['flat/recommended'],
]

const config = {
  extends: ['plugin:prettier/recommended', 'eslint:recommended'],
  rules,
}

export default config
