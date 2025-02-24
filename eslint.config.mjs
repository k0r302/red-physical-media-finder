import userscripts from 'eslint-plugin-userscripts';
import js from '@eslint/js';
import globals from "globals";

const customGlobals = {
  GM: "readable",
  GM_config: "readable",
};

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.user.js"],
    languageOptions: {
      globals: {
        ...customGlobals,
        ...globals.browser,
      },
    },
    plugins: {
      userscripts,
    },
    rules: {
      ...userscripts.configs.recommended.rules,
    },
    settings: {
      userscriptVersions: {
        violentmonkey: '*',
      },
    },
  },
];