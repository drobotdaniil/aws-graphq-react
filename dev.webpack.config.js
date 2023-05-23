const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',

  plugins: [new ReactRefreshPlugin({ overlay: false })],

  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    historyApiFallback: true,
    hot: true,
    port: 3007,
    host: 'localhost',
  },
};
