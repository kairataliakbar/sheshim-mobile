module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-cond-assign": "error",
        "eqeqeq": "error",
        "no-implicit-coercion": "error",
        "no-param-reassign": "error",
        "no-return-assign": "error",
        "no-sequences": "off",
        "no-shadow": "error",
        "prefer-const": "error",
        "no-var": "error",
        "prefer-template": "error",
        "curly": ["error", "multi-line"],
        "prefer-arrow-callback": ["error"],
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/ban-types": [
          "error",
          {
            "types": {
              "Node": "Node is disabled, use HTMLElement"
            }
          }
        ],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/consistent-type-assertions": [
          "error",
          {
            "assertionStyle": "as"
          }
        ],
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/require-await": "error",
        "react/display-name": "off",
        "react/no-unescaped-entities": 0,
        "react/prop-types": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "one-var": ["error", "never"],
        "unicorn/filename-case": [
          "error",
          {
            "case": "kebabCase"
          }
        ]
      }
};
