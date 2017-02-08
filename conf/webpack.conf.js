const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');
const fs = require('fs')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const COMMON_MODULES = eval(fs.readFileSync('./src/libs.js', 'utf8').replace(/require\('[^']*'\)/g, 'true'))

module.exports = {
  module: {
    preLoaders: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: 'tslint'
      }
    ],

    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.(css|less)$/,
        loaders: [
          'style',
          'css',
          'postcss',
          'less'
        ]
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
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
      'process.env.NODE_ENV': '"development"',
      'process.env.DEPLOY_ENV': JSON.stringify(process.env.DEPLOY_ENV || 'development')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  postcss: () => [autoprefixer],
  debug: true,
  devtool: 'source-map',
  output: {
    path: path.join(process.cwd(), conf.paths.tmp),
    filename: 'index.js'
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
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    `./${conf.path.src('index')}`
  ],
  ts: {
    configFileName: 'tsconfig.json'
  },
  tslint: {
    configuration: require('../tslint.json')
  },
  externals: [
    function (context, request, callback) {
      if (COMMON_MODULES.hasOwnProperty(request)) {
        callback(null, `COMMON_MODULES.require("${request}")`)
      } else {
        // console.log(`module not in COMMON_MODULES: ${request} ${context}`)
        callback()
      }
    }
  ]
};
