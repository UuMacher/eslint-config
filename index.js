module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended'
    ],
    env: {
        browser: true,
        es2020: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 11,
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error', {
                printWidth: 140,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'none'
        }],
        'no-restricted-imports': ['warn', {
            'paths': [{
                'name': 'moment',
                'message': 'Please use date-fns or Luxon instead!'
            }, {
                'name': 'lodash',
                'message': 'Please check if equivalent native methods exist (e.g. Array.* or Object.*) or use lodash-es instead!'
            }]
        }]
    }
};
