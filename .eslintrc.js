module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'indent':0,
    'space-before-function-paren':0,
    'no-undef': 0,
    'no-mixed-spaces-and-tabs':0,
    'no-spaced-func':0,
    'no-trailing-spaces':0,
    'no-whitespace-before-property':0,
    'space-before-blocks':0,
    'space-before-function-paren':0,
    'space-in-parens':0,
    'space-infix-ops':0,
    'space-unary-ops':0,
    'spaced-comment':0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
