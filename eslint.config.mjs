import globals from"globals";
import pluginJs from"@eslint/js";
import tseslint from"typescript-eslint";
import pluginReactConfig from"eslint-plugin-react/configs/recommended.js";
import prettierConfig from"eslint-config-prettier";
import prettierPlugin from"eslint-plugin-prettier";
export default[
    {files:["**/*.{js,cjs,ts,jsx,tsx}"]},
    {languageOptions:
        {parserOptions:{ecmaFeatures:{jsx:!0}},
        globals: {
            ...globals.browser,
            ...globals.node, // Add this line to include Node.js globals
        },
    },
        env: {
            node: true, // Add this line to set the Node.js environment
        },
    },
    {languageOptions:{globals:globals.browser}},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReactConfig,
    prettierConfig,
    {plugins:{prettier:prettierPlugin},
    rules:{
        "@typescript-eslint/no-explicit-any": "off",
        "prettier/prettier":"error",
        "no-unused-vars":"off",
        "@typescript-eslint/no-unused-vars":["warn",{vars:"all",args:"after-used",ignoreRestSiblings:!0}],
        "react/react-in-jsx-scope":"off"}},
    {settings:{react:{version:"detect"}}},{files:["src/styles/**/*.js"],rules:{"@typescript-eslint/no-unused-vars":"off"}}];