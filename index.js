module.exports = {
	"extends": [
	  "mourner",
	  "plugin:flowtype/recommended"
	],
	"parser": "babel-eslint",
	"parserOptions": {
	  "sourceType": "script"
	},
	"plugins": [
	  "flowtype"
	],
	"rules": {
	  "array-bracket-spacing": "off",
	  "block-scoped-var": "error",
	  "consistent-return": "off",
	  "curly": "error",
	  "flowtype/define-flow-type": 1,
	  "flowtype/require-valid-file-annotation": [
		2,
		"always", {
		  "annotationStyle": "line"
		}
	  ],
	  "global-require": "off",
	  "indent": ["error", "tab", {
		"flatTernaryExpressions": true,
		"CallExpression": {
		  "arguments": "off"
		},
		"FunctionDeclaration": {
		  "parameters": "off"
		},
		"FunctionExpression": {
		  "parameters": "off"
		}
	  }],
	  "key-spacing": "off",
	  "no-unused-vars": ["error", {"argsIgnorePattern": "^_$"}],
	  "no-var": "error",
	  "no-warning-comments": "error",
	  "no-multiple-empty-lines": "error",
	  "object-curly-spacing": "off",
	  "padded-blocks": [2, "always"],
	  "prefer-arrow-callback": "error",
	  "prefer-const": ["error", {"destructuring": "all"}],
	  "prefer-template": "error",
	  "quotes": ["error", "double"],
	  "space-before-function-paren": "off",
	  "template-curly-spacing": "error",
		"no-useless-escape": "off"
	},
	"globals": {
	  "performance": true
	},
	"env": {
	  "es6": true,
	  "browser": false
	}
}
  