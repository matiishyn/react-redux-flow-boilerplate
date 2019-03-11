/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, '../src');
const outPath = path.join(__dirname, '../dist');

module.exports = options => ({
  context: sourcePath,
  mode: options.mode,
  entry: {
    app: './index.js',
  },
  output: Object.assign(
    {
      path: outPath,
      publicPath: '/',
    },
    options.output,
  ), // Merge with env dependent settings
  optimization: options.optimization,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          // isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      // use it if you need
      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: 'svg-url-loader',
      //       options: {
      //         // Inline files smaller than 10 kB
      //         limit: 10 * 1024,
      //         noquotes: true,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
            },
          },
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     mozjpeg: {
          //       enabled: false,
          //       // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
          //       // Try enabling it in your environment by switching the config to:
          //       // enabled: true,
          //       // progressive: true,
          //     },
          //     gifsicle: {
          //       interlaced: false,
          //     },
          //     optipng: {
          //       optimizationLevel: 7,
          //     },
          //     pngquant: {
          //       quality: '65-90',
          //       speed: 4,
          //     },
          //   },
          // },
        ],
      },
      // {
      //   test: /\.html$/,
      //   use: 'html-loader',
      // },
      // {
      //   test: /\.(mp4|webm)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000,
      //     },
      //   },
      // },
    ],
  },
  plugins: options.plugins.concat([
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; Terser will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),
  resolve: {
    // modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx'],
    // mainFields: ['browser', 'jsnext:main', 'main'],
    alias: {
      app: path.join(__dirname, '../src/app/'),
      assets: path.join(__dirname, '../src/assets/'),
    },
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},

  // dev-server
  devServer: {
    // https://webpack.js.org/configuration/dev-server/#devservercontentbase
    contentBase: sourcePath, // assets
    hot: true,
    inline: true,
    open: true,
    overlay: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    stats: 'minimal',
    // proxy: { },
  },
});
