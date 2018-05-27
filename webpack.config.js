const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/js/renderer.js'],
  devServer: {
    contentBase: '.'
  },
  output: {
    filename: 'bundle.js',
    library: 'MWM',
    libraryTarget: 'window',
    path: path.resolve(__dirname, 'dist')
  }
};