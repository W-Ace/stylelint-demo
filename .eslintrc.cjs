module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2022,
  },
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
    defineExpose: 'readonly',
  },
  plugins: ['sort'],
  extends: ['plugin:vue/vue3-strongly-recommended', 'airbnb-base', 'plugin:sort/recommended'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-param-reassign': 0,
    'linebreak-style': 0,
    'vue/no-v-html': 0,
    'consistent-return': 0,
    'no-shadow': ['error', { allow: ['state'] }],
    'import/no-unresolved': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-useless-escape': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'max-len': ['error', { code: 1500 }],
    'no-underscore-dangle': 0,
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'vue/multi-word-component-names': 0,
    'template-curly-spacing': 'off',
    indent: [
      'error',
      2,
      {
        ignoredNodes: ['TemplateLiteral'],
      },
    ],
    'sort/imports': 'off',
    'sort/object-properties': 'off',
    'sort/destructured-properties': 'off',
    'sort/imported-variables': 'off',
  },
  overrides: [
    {
      // 自動排序只在文檔開啟
      files: ['src/locales/*.js'],
      rules: {
        'sort/object-properties': 'warn',
      },
    },
  ],
};
