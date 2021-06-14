const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const port = process.env.PORT || 8080

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.jsx'),
    vendor: ['react-bootstrap']
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
    filename: '[name].[fullhash].js'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@': path.resolve(__dirname, '..', 'src')
    },
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }, {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.s[ac]ss$/,
          chunks: 'all',
          enforce: true
        },
        vendor: {
          name: 'vendor',
          test: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/template.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    host: 'localhost',
    port,
    historyApiFallback: true,
    hot: true
  }
}
