// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    quotes: 'single',
    semi: false,
  },
  rules: {
    'no-console': 'off',
  },
  overrides: {
    typescript: {
      'ts/consistent-type-definitions': ['error', 'type'],
    },
  },
})
