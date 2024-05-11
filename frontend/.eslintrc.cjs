module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'import'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        'eol-last': ['error', 'always'],
        'import/no-unresolved': 'off',
        'import/named': 'off',
        'import/first': 'error',
        'import/dynamic-import-chunkname': 'error',
        'import/no-useless-path-segments': 'error',
        'import/no-duplicates': 'error',
        'import/newline-after-import': 'error',
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                alphabetize: { 'order': 'asc' },
                groups: [['builtin', 'external'], 'internal', 'parent', ['sibling', 'index'], 'unknown'],
                pathGroups: [
                    {
                        pattern: '*.css',
                        patternOptions: { matchBase: true },
                        group: 'unknown',
                        position: 'after'
                    }
                ]
            }
        ]
    }
};
