const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  mode: process.argv.includes('--production') ? 'production' : 'development',
  entry: {
    contacts: path.resolve(__dirname, 'src/assets/scripts/contacts.js'),
    about: path.resolve(__dirname, 'src/assets/scripts/about.js'),
    home: path.resolve(__dirname, 'src/assets/scripts/home.js'),
    index: path.resolve(__dirname, 'src/assets/scripts/index-app.js'),
    gallery: path.resolve(__dirname, 'src/assets/scripts/gallery.js'),
    developer: path.resolve(__dirname, 'src/assets/scripts/developer.js'),
    progress: path.resolve(__dirname, 'src/assets/scripts/progress.js'),
    progressSingle: path.resolve(__dirname, 'src/assets/scripts/progress-single.js'),
    notFound: path.resolve(__dirname, 'src/assets/scripts/not-found.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.mjs$/,
        type: 'javascript/auto', // ✅ ВАЖЛИВО!
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: path.join('assets', 'images'), // ✅ Кросплатформений шлях
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.mjs', '.json'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks(chunk) {
            // exclude `my-excluded-chunk`
            return chunk.name !== 'immediate-loading';
          },
        },
      },
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        compress: {
          drop_console: process.argv.includes('--production'),
        },
      },
    }),
  ],
};

module.exports = config;
