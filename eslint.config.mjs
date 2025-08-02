import eslintJS from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default tseslint.config(
  {
    ignores: ['**/dist', '**/node_modules', '**/.astro'],
  },
  {
    files: ['**/*.js'],
    plugins: { eslintJS },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    extends: [eslintJS.configs.recommended],
  },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.all,
  ...eslintPluginAstro.configs['jsx-a11y-strict'],
);
