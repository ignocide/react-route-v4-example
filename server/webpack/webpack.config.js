const Path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = (options) => {
  const ExtractSASS = new ExtractTextPlugin(`styles/${options.cssFileName}`)

  const webpackConfig = {
    devtool: options.devtool,
    entry: function () {
      return [`webpack-dev-server/client?http://localhost:${+options.port}`,
        'webpack/hot/dev-server',
        Path.join(__dirname, '../public/src/app/index')
      ]
    },
    output: {
      path: Path.join(__dirname, '../../'),
      publicPath: '/',
      filename: `scripts/${options.jsFileName}`
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: [/.js?$/, /.jsx?$/],
          include: Path.join(__dirname, '../public/src/app'),
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.isProduction ? 'production' : 'development')
        }
      }),
      new Webpack.ProvidePlugin({
        'Promise': 'es6-promise',
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
      })
    ]
  }

  if (options.isProduction) {
    webpackConfig.entry = [Path.join(__dirname, '../public/src/app/index')]

    webpackConfig.plugins.push(
      new Webpack.optimize.OccurrenceOrderPlugin(),
      new Webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      ExtractSASS,
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      new HtmlWebpackPlugin({
        template: Path.join(__dirname, '../public/src/index.html'),
        filename: 'index.html'
      })
    )

    webpackConfig.module.loaders.push({
      test: /\.scss$/,
      loader: ExtractSASS.extract(['css-loader', 'sass-loader'])
    })
  } else {
    webpackConfig.plugins.push(
      new Webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: Path.join(__dirname, '../public/src/index.html'),
        filename: 'index.html'
      })
    )

    webpackConfig.module.loaders.push({
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    })

    webpackConfig.devServer = {
      contentBase: Path.join(__dirname, '../public/'),
      hot: true,
      port: options.port,
      inline: true,
      historyApiFallback: true
    }
  }

  return webpackConfig
}
