module.exports = {
    extends: ['airbnb', 'prettier', 'plugin:node/recommended'],
    plugins: ['prettier'],

    rules: {
        'no-usued-vars': 'warn',
        'no-console': 'off',
        'prettier/prettier': 'error',
        'func-names': 'off',
        'no-process-exit': 'off',
        'object-short-hand': 'off',
        'class-methods-use-this': 'off',
    },
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: true,
    },
};