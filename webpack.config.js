const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/public/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
	use:[{
	  loader: 'babel-loader',
	}],
	exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
