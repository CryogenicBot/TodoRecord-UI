const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin');
      TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    app: ['./src/app/App.tsx'],
    vendor: ['react', 'react-dom']
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(ts|tsx)$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.css$/,
            exclude: [/src/],
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                }
              }
            ]
          },
          {
            test: /\.css$/,
            exclude: [/node_modules/],
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: 'typings-for-css-modules-loader',
                options: {
                  modules: true,
                  namedExport: true,
                  camelCase: true,
                  localIdentName: "[name]__[local]_[hash:base64:8]"
                }
              }
            ]
          },
          {
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'app', 'index.html') }),
    new webpack.HotModuleReplacementPlugin(),
    new TSLintPlugin({
      files: ['./src/**/*.tsx']
    })
  ],
  devServer: {
    compress: true,
    port: 3000,
    host: '192.168.50.10',
    hot: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'build')
  }
}