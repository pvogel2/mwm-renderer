const path = require('path');

module.exports = {
  mode: 'development',
  entry: {main: './src/js/renderer.js',test: './dev/js/test.js'},
  devServer: {
    contentBase: '.'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};