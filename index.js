module.exports = {
    extends: ['plugin:prettier/recommended'],
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
        'prettier/prettier': [
            'error',
            {
                printWidth: 140,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'none'
            }
        ]
    }
};
