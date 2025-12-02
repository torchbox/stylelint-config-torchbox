import { defineConfig } from 'eslint/config';
import js from '@eslint/js';

export default defineConfig([
    {
        files: ['**/*.js'],
        plugins: {
            js,
        },
        extends: ['js/recommended'],
        languageOptions: {
            globals: {
                require: 'readonly',
                module: 'readonly',
            },
        },
    },
]);
