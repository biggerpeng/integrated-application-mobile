const path = require('path')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const WebpackBar = require('webpackbar')

const isProduction = process.env.NODE_ENV === 'production'

const getStyleLoaders = pre => {
  return [
    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    {
      // 处理css兼容性问题
      // 配合package.json中browserslist来指定兼容性
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['postcss-preset-env']
        }
      }
    },
    pre && {
      loader: pre
    }
  ].filter(Boolean)
}

module.exports = {
  entry: './src/index.js',

  output: {
    path: isProduction ? path.resolve(__dirname, './dist') : undefined,
    filename: isProduction ? 'static/js/[name].[contenthash:10].js' : 'static/js/[name].js',
    chunkFilename: isProduction ? 'static/js/[name].[contenthash:10].chunk.js' : 'static/js/[name].chunk.js',
    assetModuleFilename: 'static/media/[hash:10][ext][query]',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: getStyleLoaders()
      },
      {
        test: /\.less$/,
        use: getStyleLoaders('less-loader')
      },
      {
        test: /\.(jpe?g|png|gif|webp|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
      },
      {
        test: /\.(woff2?|ttf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          cacheCompression: false,
          plugins: [
            !isProduction && 'react-refresh/babel' // 激活js的HMR
          ].filter(Boolean)
        }
      }
    ]
  },

  plugins: [
    new WebpackBar(),
    new EslintWebpackPlugin({
      context: path.resolve(__dirname, './src'),
      exclude: 'node_modules',
      cache: true,
      cacheLocation: path.resolve(__dirname, './node_modules/.cache/.eslintcache')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    isProduction &&
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:10].css',
        chunkFilename: 'static/css/[name].[contenthash:10].chunk.css'
      }),
    isProduction &&
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, './public'),
            to: path.resolve(__dirname, './dist'),
            globOptions: {
              ignore: ['**/index.html']
            }
          }
        ]
      }),
    !isProduction && new ReactRefreshWebpackPlugin()
  ].filter(Boolean),

  mode: isProduction ? 'production' : 'development',

  devtool: isProduction ? 'source-map' : 'cheap-module-source-map',

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // react react-dom react-router-dom 一起打包成一个js文件
        react: {
          test: /[\\/]node_modules[\\/]react(.*)?[\\/]/,
          name: 'chunk-react',
          priority: 40
        },
        // 剩下node_modules单独打包
        libs: {
          test: /[\\/]node_modules[\\/]/,
          name: 'chunk-libs',
          priority: 20
        }
      }
    },
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}.js`
    },
    // 是否需要进行压缩
    minimize: isProduction,
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()]
  },

  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
    extensions: ['.jsx', '.js', '.json']
  },

  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true // 解决前端路由刷新404问题
  },

  performance: false // 关闭性能分析，提升打包速度
}
