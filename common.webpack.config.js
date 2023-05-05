const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index',

  output: {
    filename: '[name].contenthash.js',
    path: path.resolve(__dirname, './dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      }),
    ],
    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              projectReferences: true,
            },
          },
        ],
      },
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
