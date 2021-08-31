module.exports = {
  "parser": "babel-eslint",
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['hooks', './hooks'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.tsx', '.json']
      }
    }
  }
  // // globals: {
  // //   __PATH_PREFIX__: true,
  // // },
  // extends: `react-app`,
}