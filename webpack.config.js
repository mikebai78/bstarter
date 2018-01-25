const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry:'./src/js/app.js',
    output: {
      path: path.resolve(__dirname,'dist'),
      filename: 'js/bundle.js',
      publicPath: ''
    },
    devtool: 'cheap-module-source-map',
    module:{
      rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
             fallback: 'style-loader',
             use:[
                { loader: 'css-loader', options: { sourceMap: true } },
                { loader: 'postcss-loader', options: { sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true } }
              ]
        })
      },
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test:/\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
            publicPath: ''
          }
        },
        {
          loader:'image-webpack-loader'
        }
      ]

      }
    ]
    },
    plugins:[
      // new webpack.optimize.UglifyJsPlugin({
      // }),

      new ExtractTextPlugin({
        filename:'css/main.css'
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Tether: 'tether'
      })
    ]
};
