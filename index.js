module.exports = {
    extends: ['plugin:prettier/recommended'],
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

