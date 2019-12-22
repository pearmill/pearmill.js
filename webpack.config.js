const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const libraryName = 'pearmill'

let plugins = [];

const baseConfig = {
  entry: [`./${libraryName}.js`],
  module: {
    rules: [
      {
        loader:'babel-loader',
        test: /\.js$/,
        exclude:  /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins
}

const output = {
  ...baseConfig,
  mode: 'development',
  devtool: false,
  output: {
    pathinfo: false,
    path: path.resolve(__dirname),
    filename: `${libraryName}-dev.js`
  },
  plugins: [
    ...baseConfig.plugins,
    new webpack.DefinePlugin({
      PEARMILL_BASE_URL: JSON.stringify('http://localhost:8080')
    })
  ]
}

const minified = {
  ...baseConfig,
  mode: 'production',
  output: {
    path: path.resolve(__dirname),
    filename: `${libraryName}.min.js`
  },
  optimization: {
    minimize: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    providedExports: true,
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ]
  },
  plugins: [
    ...baseConfig.plugins,
    new webpack.DefinePlugin({
      PEARMILL_BASE_URL: JSON.stringify('https://consumer.pearmill.com')
    })
  ]
}

module.exports = [
  output,
  minified
];
