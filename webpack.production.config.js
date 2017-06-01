const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: '../css/main.css'
});

module.exports = {
  entry: {
    app: [
      './assets/js'
    ],
  }

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'production/assets/js')
  },

  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'eslint-loader',
        ],
      },

      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
            options: { minimize: true }
          }, {
            loader: 'sass-loader'
          }],
          fallback: 'style-loader'
        })
      },
    ]
  },

  plugins: [
    extractSass,
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new CopyWebpackPlugin([
      { 
        from: './assets/fonts/**/*', to: '../../' 
      },
      { 
        from: './assets/img/**/*', to: '../../' 
      },
    ]),
    new HtmlWebpackPlugin({
      meta: {
        url: 'http://codeandwander.com',
        title: 'Boilerplate',
        description: 'An awesome boilerplate',
        images: {
          facebook: '/assets/img/meta/facebook.jpg',
          twitter: '/assets/img/meta/twitter.jpg'
        },
        twitter: '@codeandwander'
      },
      filename: path.resolve(__dirname, 'production/index.html'),
      minify: {
        collapseWhitespace: true
      },
      template: path.resolve(__dirname, 'assets/html/index.html'),
      inject: true,
    })
  ]

}