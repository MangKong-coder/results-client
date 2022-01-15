export default {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "google",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "linebreak-style": ["error", "unix"]
    }
};
