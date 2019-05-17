# @geostarters/eslint-config
[![npm version](https://badge.fury.io/js/%40geostarters%2Feslint-config.svg)](https://badge.fury.io/js/%40geostarters%2Feslint-config)

The linter used by the Geostart projects.

Extends the eslint-config-mourner eslint configuration

## Install

´´´
npm i --D @geostarters/eslint-config 
´´´

## Rules

* Disables [array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing)
* Forces [block-scoped-var](https://eslint.org/docs/rules/block-scoped-var)
* Disables [consistent-return](https://eslint.org/docs/rules/consistent-return)
* Forces [curly](https://eslint.org/docs/rules/curly) braces on blocks
* Uses [flowtype/define-flow-type](https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-define-flow-type) to suppress undefined warnings in type identifiers
* Forces [flowtype/require-valid-file-annotation](https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-valid-file-annotation) to report missing or missplaced annotation
* Use [global-require] to force using `require()` in the top of a module
* Use [indent](https://eslint.org/docs/rules/indent) to enforce consisting indentation
* Disables [key-spacing](https://eslint.org/docs/rules/key-spacing) enforcing
* Forces [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars) so no unused variables are defined
* Forces [no-var](https://eslint.org/docs/rules/no-var) so `let` or `const` are used instead
* Forces [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments) so no TODO or FIX comments are added
* Forces [no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines) so no multiple blank lines are used
* Disables [object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)
* Forces [padded-blocks](https://eslint.org/docs/rules/padded-blocks) so blocks  are padded with blank lines
* Forces [prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback) so arrow functions are used
* Forces [prefer-const](https://eslint.org/docs/rules/prefer-const) sp `const` is used when a `var` is not reassigned
* Forces [prefer-template](https://eslint.org/docs/rules/prefer-template) to use template literals instead of string concatenation
* Forces the use of double [quotes](https://eslint.org/docs/rules/quotes)
* Disables [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)
* Forces [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing) so spaces are forced inside template curly braces
* Disables [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape) to disallow unnecessary escape usage

