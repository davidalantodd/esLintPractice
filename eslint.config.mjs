import globals from "globals";
import pluginJs from "@eslint/js";

import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname
});


export default [
  pluginJs.configs.recommended,
  {languageOptions: { globals: globals.node }},
  ...compat.extends("eslint-config-airbnb-base"),
  {
    rules: {
    "no-unused-vars": "off",
    "no-console": "off"
    }
  }
];