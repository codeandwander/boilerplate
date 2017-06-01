const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: '../css/main.css'
})

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './app/app',
      './assets/js'
    ]
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'local/assets/js')
  },

  devtool: 'source-map',

  devServer: {
    contentBase: 'local',
    historyApiFallback: true,
    inline: true
  },

  module: {
    rules: [

      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'sass-loader'
          }],
          fallback: 'style-loader'
        })
      },

      { 
        test: /\.(js|jsx)$/, 
        use: [
          'babel-loader',
          'eslint-loader'
        ], 
        exclude: /node_modules/ 
      },

    ]
  },

  plugins: [
    extractSass,
    new webpack.HotModuleReplacementPlugin(),
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
      filename: path.resolve(__dirname, 'local/index.html'),
      template: path.resolve(__dirname, 'assets/html/index.html')
    })
  ]

}