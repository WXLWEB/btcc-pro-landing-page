const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('../package.json');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.(css|less)$/,
        loaders: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css?minimize!postcss!less'
        })
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader?presets[]=es2015',
          'ts?transpileOnly=true'
        ]
      },
      {
        test   : /\.(ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'url-loader?limit=1024&name=fonts/[name].[ext]'
      },
      {
        test: /\.(ico|png|jpg|gif)$/,
        loader: 'url-loader?limit=10240&name=images/[name]-[hash:base64:5].[ext]'
      },
      {
        test: /analytics\.js/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /app\.plist/,
        loader: 'file?name=[name].[ext]'
      },
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'process.env.DEPLOY_ENV': JSON.stringify(process.env.DEPLOY_ENV || 'development')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {unused: true, dead_code: true, warnings: false} // eslint-disable-line camelcase
    }),
    new ExtractTextPlugin('index.css'),
    // new webpack.optimize.CommonsChunkPlugin({name: 'vendor'})
  ],
  postcss: () => [autoprefixer],
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: '[name].js'
  },
  resolve: {
    extensions: [
      '',
      '.webpack.js',
      '.web.js',
      '.js',
      '.ts',
      '.tsx'
    ]
  },
  entry: {
    index: `./${conf.path.src('index')}`
  },
  ts: {
    configFileName: 'tsconfig.json'
  },
  tslint: {
    configuration: require('../tslint.json')
  }
};
